import { Injectable } from '@nestjs/common';
import { TACOS_TYPE } from 'src/shared/enums/tacos.enum';
import { Tacos } from './entities/tacos.entity';

@Injectable()
export class TacosService {
  private tacos: Tacos[] = [
    {
      id: 1,
      orderDetailId: 1,
      type: TACOS_TYPE.ADOBADA,
      price: 12,
    },
  ];

  findAll() {
    return this.tacos;
  }

  findOne(id: string) {
    return this.tacos.find((item) => item.id === +id);
  }

  create(createTacoDto: any) {
    this.tacos.push(createTacoDto);
  }

  update(id: string, updateTacoDto: any) {
    const existingTaco = this.findOne(id);
    if (existingTaco) {
      // update the existing entity
    }
  }

  remove(id: string) {
    const coffeeIndex = this.tacos.findIndex((item) => item.id === +id);
    if (coffeeIndex >= 0) {
      this.tacos.splice(coffeeIndex, 1);
    }
  }
}
