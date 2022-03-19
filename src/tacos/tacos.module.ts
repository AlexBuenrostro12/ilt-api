import { Module } from '@nestjs/common';
import { TacosController } from './tacos.controller';
import { TacosService } from './tacos.service';

@Module({
  controllers: [TacosController],
  providers: [TacosService],
})
export class TacosModule {}
