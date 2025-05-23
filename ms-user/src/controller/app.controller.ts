import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from '../service/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('createUser')
  createUser(@Body()body): string {
    return this.appService.createUser(body);
  }
  
  @Get('getUser')
  getUser(): string{
    return this.appService.getUser();
  }
  
}
