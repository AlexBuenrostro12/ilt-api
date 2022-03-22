import { IsOptional } from 'class-validator';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Tacos } from './tacos.entity';
// TODO: remove salsas from here and add to orders entity

@Entity()
export class Ingredients {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: false })
  @IsOptional()
  unaTortilla: boolean;

  @Column({ default: false })
  @IsOptional()
  cilantro: boolean;

  @Column({ default: false })
  @IsOptional()
  cebolla: boolean;

  @Column({ default: false })
  @IsOptional()
  cebollaCocida: boolean;

  @Column({ default: false })
  @IsOptional()
  frijoles: boolean;

  @Column({ default: false })
  @IsOptional()
  salsaVerde: boolean;

  @Column({ default: false })
  @IsOptional()
  salsaRoja: boolean;

  @Column({ default: false })
  @IsOptional()
  limon: boolean;

  @Column({ default: false })
  @IsOptional()
  conTodo: boolean;

  @OneToOne(() => Tacos, (taco) => taco.ingredients) // specify inverse side as a second parameter
  tacos: Tacos;
}
