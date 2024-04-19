import {
  Controller,
  Get,
  UsePipes,
  ValidationPipe,
  Body,
  Post,
} from '@nestjs/common';
import { createUserDto } from 'src/DTO/user.dto';
import { UsersService } from './users.service';
import { UserResponse } from 'src/types/user.types';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Get('me')
  getMe(): string {
    return 'Test Case two';
  }

  @Post('create')
  @UsePipes(new ValidationPipe({ transform: true }))
  async createUser(
    @Body() createUserDto: createUserDto,
  ): Promise<UserResponse> {
    const { user } = await this.userService.createUser(createUserDto);
    return { user };
  }
}
