import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  @Post('/signup')
  createUser(@Body() body: CreateUserDto) {
    console.log(body);
  }
}
