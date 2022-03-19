import { IsEnum, IsNumber } from 'class-validator';
import { TACOS_TYPE } from 'src/shared/enums/tacos.enum';

export class CreateTacoDto {
  @IsEnum(TACOS_TYPE)
  readonly type: TACOS_TYPE;

  @IsNumber()
  readonly price: number;
}
