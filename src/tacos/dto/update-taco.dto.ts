import { PartialType } from '@nestjs/mapped-types';
import { CreateTacoDto } from './create-taco.dto';

export class UpdateTacoDto extends PartialType(CreateTacoDto) {}
