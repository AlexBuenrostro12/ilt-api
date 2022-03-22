import { TACOS_TYPE } from 'src/shared/enums/tacos.enum';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Ingredients } from './ingredients.entity';
import { Orders } from '../../orders/entities/orders.entity';
import { Taco } from 'src/taco/entities/taco.entity';

// TODO: Remove type and proce also remove TACOS_TYPE enum

@Entity()
export class Tacos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: TACOS_TYPE,
    default: TACOS_TYPE.ADOBADA,
  })
  type: TACOS_TYPE;

  @Column()
  price: number;

  @OneToOne(() => Ingredients, (ingredient) => ingredient.tacos, {
    cascade: true,
  })
  @JoinColumn({ name: 'ingredientsId' })
  ingredients: Ingredients;

  @OneToOne(() => Ingredients, (ingredient) => ingredient.tacos, {
    cascade: true,
  })
  @JoinColumn({ name: 'tacoId' })
  taco: Taco;

  @ManyToOne(() => Orders, (order) => order.tacos)
  order: Orders;
}
