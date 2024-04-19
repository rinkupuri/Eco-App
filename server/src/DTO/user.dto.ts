import { IsNotEmpty, IsEmail, MinLength } from 'class-validator';

export class createUserDto {
  @IsNotEmpty({ message: 'this field is required' })
  name: string;
  @IsEmail()
  @IsNotEmpty({ message: 'this field is required' })
  email: string;
  @IsNotEmpty({ message: 'this field is required' })
  @MinLength(6, { message: 'min length is 6' })
  password: string;
  @IsNotEmpty()
  avatar: object;
}
