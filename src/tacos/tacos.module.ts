import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tacos } from './entities/tacos.entity';
import { Ingredients } from './entities/ingredients.entity';
import { TacosController } from './tacos.controller';
import { TacosService } from './tacos.service';

@Module({
  imports: [TypeOrmModule.forFeature([Tacos, Ingredients])],
  controllers: [TacosController],
  providers: [TacosService],
})
export class TacosModule {}
