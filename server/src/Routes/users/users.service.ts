import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { createUserDto } from 'src/DTO/user.dto';
import { UserResponse } from 'src/types/user.types';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}
  async createUser(createUserDto: createUserDto): Promise<UserResponse> {
    const { email, name, password, avatar } = createUserDto;
    if (!email || !name || !password) {
      throw new HttpException('All Fields Required', HttpStatus.BAD_REQUEST);
    }
    const isExist = await this.prismaService.user.findUnique({
      where: {
        email: email,
      },
    });
    if (isExist) {
      throw new HttpException('User Already Exist', HttpStatus.FORBIDDEN);
    }
    const user = await this.prismaService.user.create({
      data: {
        name,
        email,
        password,
        avatar,
      },
    });

    return { user };
  }
}
