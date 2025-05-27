import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from '../service/user.service';

@Controller()
export class UserController {
  constructor(private readonly appService: UserService) {}

  @Post('createUser')
  createUser(@Body()body): string {
    return this.appService.createUser(body);
  }
  
  @Get('getUser')
  getUser(): string{
    return this.appService.getUser();
  }
  
}
