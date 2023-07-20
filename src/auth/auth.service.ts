import { ForbiddenException, Injectable } from '@nestjs/common';
// import { User } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { authDto } from './dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private database: DatabaseService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}
  async signup(dto: authDto) {
    try {
      //generate and encrypted password
      const encryptedPassword = await argon.hash(dto.password);
      const user = await this.database.user.create({
        data: {
          email: dto.email,
          password: encryptedPassword,
        },
        // what we have to return in the response
        select: {
          id: true,
          email: true,
          createdAt: true,
        },

        // or delete user.password
      });
      return user;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          // duplicate error code for prisma
          // nest js exception
          throw new ForbiddenException('Credentials taken ');
        }
      }
      throw error;
    }
  }
  async signin(dto: authDto) {
    const user = await this.database.user.findUnique({
      where: { email: dto.email },
    });
    console.log(user);
    if (!user) throw new ForbiddenException('Email Or password Wrong');
    const isPassMatch = await argon.verify(user.password, dto.password);
    if (!isPassMatch) throw new ForbiddenException('Email Or password Wrong');
    const token = await this.createJwtToken(user.id, user.email);
    return { data: token };
  }
  createJwtToken(userId: number, email: string): Promise<string> {
    const payload = { id: userId, email };
    const secret = this.config.get('JWT_SECRET');
    return this.jwt.signAsync(payload, {
      expiresIn: '1d',
      secret,
    });
  }
}
