import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Tacos } from './tacos.entity';

@Entity()
export class Ingredients {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: false })
  unaTortilla: boolean;

  @Column({ default: false })
  cilantro: boolean;

  @Column({ default: false })
  cebolla: boolean;

  @Column({ default: false })
  cebollaCocida: boolean;

  @Column({ default: false })
  frijoles: boolean;

  @Column({ default: false })
  limon: boolean;

  @Column({ default: false })
  conTodo: boolean;

  @OneToOne(() => Tacos, (taco) => taco.ingredients) // specify inverse side as a second parameter
  tacos: Tacos;
}
