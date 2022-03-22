import { Tacos } from 'src/tacos/entities/tacos.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Taco {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  price: number;

  @OneToOne(() => Tacos, (taco) => taco.taco) // specify inverse side as a second parameter
  tacos: Tacos;
}
