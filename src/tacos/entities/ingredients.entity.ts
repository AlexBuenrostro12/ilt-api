import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Tacos } from './tacos.entity';

@Entity()
export class Ingredients {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  unaTortilla: boolean;

  @Column()
  cilantro: boolean;

  @Column()
  cebolla: boolean;

  @Column()
  cebollaCocida: boolean;

  @Column()
  frijoles: boolean;

  @Column()
  salsaVerde: boolean;

  @Column()
  salsaRoja: boolean;

  @Column()
  limon: boolean;

  @OneToOne(() => Tacos, (taco) => taco.ingredients) // specify inverse side as a second parameter
  tacos: Tacos;
}
