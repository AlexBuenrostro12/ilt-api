import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTacoDto } from './dto/create-taco.dto';
import { UpdateTacoDto } from './dto/update-taco.dto';
import { Tacos } from './entities/tacos.entity';

@Injectable()
export class TacosService {
  constructor(
    @InjectRepository(Tacos)
    private readonly tacosRepository: Repository<Tacos>,
  ) {}

  findAll() {
    return this.tacosRepository.find({
      relations: ['ingredients'],
    });
  }

  async findOne(id: string) {
    const taco = await this.tacosRepository.findOne(id, {
      relations: ['ingredients'],
    });

    if (!taco) {
      throw new NotFoundException(`Taco #${id} not found`);
    }

    return taco;
  }

  create(createTacoDto: CreateTacoDto) {
    const taco = this.tacosRepository.create(createTacoDto);

    return this.tacosRepository.save(taco);
  }

  async update(id: string, updateTacoDto: UpdateTacoDto) {
    const taco = await this.tacosRepository.preload({
      id: +id,
      ...updateTacoDto,
    });

    if (!taco) {
      throw new NotFoundException(`Taco #${id} not found`);
    }

    return this.tacosRepository.save(taco);
  }

  async remove(id: string) {
    const taco = await this.findOne(id);
    return this.tacosRepository.remove(taco);
  }
}
