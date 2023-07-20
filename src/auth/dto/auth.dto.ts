// export interface authDto {
//   email: string;
//   password: string;
// }
//  to use an packages class-transformer and validator we have to create a class insteadof interface

import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class authDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
