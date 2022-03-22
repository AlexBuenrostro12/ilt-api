import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tacos } from './entities/tacos.entity';
import { Ingredients } from './entities/ingredients.entity';
import { TacosController } from './tacos.controller';
import { TacosService } from './tacos.service';
import { Taco } from 'src/taco/entities/taco.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tacos, Ingredients, Taco])],
  controllers: [TacosController],
  providers: [TacosService],
})
export class TacosModule {}
