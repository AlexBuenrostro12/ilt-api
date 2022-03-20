import { TACOS_TYPE } from 'src/shared/enums/tacos.enum';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tacos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  orderDetailId: number;

  @Column({
    type: 'enum',
    enum: TACOS_TYPE,
    default: TACOS_TYPE.ADOBADA,
  })
  type: TACOS_TYPE;

  @Column()
  price: number;
}
