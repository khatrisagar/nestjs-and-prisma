import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { authDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  // auth/signup
  @Post('signup')
  signup(@Body() dto: authDto) {
    // @Body('email') email:string, @Body('password',ParseIntPipe) password:string    // it will convert a datatype to the given
    // ParseIntPipe transform a data into a number

    console.log(dto);
    return this.authService.signup(dto);
  }
  // auth/signin
  @Post('signin')
  signin(@Body() dto: authDto) {
    return this.authService.signin(dto);
  }
}
