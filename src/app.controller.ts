import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api/todos')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getTodos() {
    return this.appService.getTodos();
  }
}
