import { ORDERS_STATUS } from 'src/shared/enums/orders.enum';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Tacos } from '../../tacos/entities/tacos.entity';

@Entity()
export class Orders {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: ORDERS_STATUS,
    default: ORDERS_STATUS.PENDING,
  })
  status: ORDERS_STATUS;

  @Column()
  total: number;

  @OneToMany(() => Tacos, (taco) => taco.order, {
    cascade: true,
  })
  tacos: Tacos[];
}
