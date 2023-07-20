import { Body, Injectable } from '@nestjs/common';
// import { User } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class AuthService {
  constructor(private database: DatabaseService) {}
  signup() {
    return { message: 'I am signed up' };
  }
  signin() {
    return 'I am signed in';
  }
}
