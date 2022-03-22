import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Orders } from './entities/orders.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Orders)
    private readonly ordesRepository: Repository<Orders>,
  ) {}

  findAll() {
    return this.ordesRepository.find({
      relations: ['tacos', 'tacos.ingredients'],
    });
  }

  async findOne(id: string) {
    const order = await this.ordesRepository.findOne(id, {
      relations: ['tacos', 'tacos.ingredients'],
    });

    if (!order) {
      throw new NotFoundException(`order #${id} not found`);
    }

    return order;
  }

  create(createOrderDto: CreateOrderDto) {
    const order = this.ordesRepository.create(createOrderDto);

    return this.ordesRepository.save(order);
  }

  async update(id: string, updateOrderDto: UpdateOrderDto) {
    const order = await this.ordesRepository.preload({
      id: +id,
      ...updateOrderDto,
    });

    if (!order) {
      throw new NotFoundException(`Order #${id} not found`);
    }

    return this.ordesRepository.save(order);
  }

  async remove(id: string) {
    const order = await this.findOne(id);
    return this.ordesRepository.remove(order);
  }
}
