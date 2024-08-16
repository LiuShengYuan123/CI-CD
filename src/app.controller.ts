import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/api/demo')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(){
    return {
      data:'这是一条后台数据',
      msg:'OK',
      code:200
    }
  }
}
