import { IsEnum, IsNumber } from 'class-validator';
import { ORDERS_STATUS } from 'src/shared/enums/orders.enum';

export class CreateOrderDto {
  @IsEnum(ORDERS_STATUS)
  readonly status: ORDERS_STATUS;

  @IsNumber()
  readonly total: number;
}
