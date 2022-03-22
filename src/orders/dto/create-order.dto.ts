import { Type } from 'class-transformer';
import { IsArray, IsEnum, IsNumber } from 'class-validator';
import { ORDERS_STATUS } from 'src/shared/enums/orders.enum';
import { Tacos } from 'src/tacos/entities/tacos.entity';

export class CreateOrderDto {
  @IsEnum(ORDERS_STATUS)
  readonly status: ORDERS_STATUS;

  @IsNumber()
  readonly total: number;

  @IsArray()
  @Type(() => Tacos)
  readonly tacos: Tacos[];
}
