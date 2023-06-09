//
// packages/backends/nest-app/src/app.controller.ts
//

import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

import { hello } from '@travel/common';  // 추가

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log('nest-app >', hello()); // 추가
    return this.appService.getHello();
  }
}
