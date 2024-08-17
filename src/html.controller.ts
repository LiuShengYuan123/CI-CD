import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
const superagent = require('superagent')

@Controller('/')
export class HtmlController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async GetHtml(){
    const res = await superagent.get('https://test-demo-1327643432.cos.ap-nanjing.myqcloud.com/index.html')
    if(!res.text){
        return '暂未找到远程index.html文件'
    }else{
        return res.text
    }
  }
}
