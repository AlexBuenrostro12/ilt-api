import { TACOS_TYPE } from 'src/shared/enums/tacos.enum';

export class Tacos {
  id: number;
  orderDetailId: number;
  type: TACOS_TYPE;
  price: number;
}
