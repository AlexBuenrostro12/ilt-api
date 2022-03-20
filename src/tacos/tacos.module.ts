import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tacos } from './entities/tacos.entity';
import { TacosController } from './tacos.controller';
import { TacosService } from './tacos.service';

@Module({
  imports: [TypeOrmModule.forFeature([Tacos])],
  controllers: [TacosController],
  providers: [TacosService],
})
export class TacosModule {}
