import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HtmlController } from './html.controller';


@Module({
  imports: [],
  controllers: [AppController,HtmlController],
  providers: [AppService],
})
export class AppModule {}
