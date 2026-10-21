import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ApiKeyGuard } from './common/guards/api-key/api-key.guard.js';

@Module({
  imports: [ConfigModule.forRoot({isGlobal:true})],
  controllers: [AppController],
  providers: [
    AppService,
    {provide: APP_GUARD, useClass: ApiKeyGuard},
  ]
    })
export class AppModule {}
