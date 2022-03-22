import { Module } from '@nestjs/common';
import { TacoController } from './taco.controller';
import { TacoService } from './taco.service';

@Module({
  controllers: [TacoController],
  providers: [TacoService],
})
export class TacoModule {}
