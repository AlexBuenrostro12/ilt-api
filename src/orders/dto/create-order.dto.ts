import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsNumber,
  IsOptional,
} from 'class-validator';
import { ORDERS_STATUS } from 'src/shared/enums/orders.enum';
import { Tacos } from 'src/tacos/entities/tacos.entity';

export class CreateOrderDto {
  @IsBoolean()
  @IsOptional()
  salsaVerde: boolean;

  @IsBoolean()
  @IsOptional()
  salsaRoja: boolean;

  @IsBoolean()
  @IsOptional()
  rabanos: boolean;

  @IsEnum(ORDERS_STATUS)
  readonly status: ORDERS_STATUS;

  @IsNumber()
  readonly total: number;

  @IsArray()
  @Type(() => Tacos)
  readonly tacos: Tacos[];
}
