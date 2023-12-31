import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from 'src/auth/decorator';
import { JwtGaurd } from 'src/auth/guard';

@UseGuards(JwtGaurd)
@Controller('users')
export class UserController {
  @HttpCode(HttpStatus.OK)
  @Get('me')
  getMe(@GetUser('') user: User) {
    return user;
  }

  //   @Patch()
  //   editUser() {}
}
