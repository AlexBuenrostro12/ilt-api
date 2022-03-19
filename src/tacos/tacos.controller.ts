import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateTacoDto } from './dto/create-taco.dto';
import { UpdateTacoDto } from './dto/update-taco.dto';
import { TacosService } from './tacos.service';

@Controller('tacos')
export class TacosController {
  constructor(private readonly tacosService: TacosService) {}

  @Get()
  findAllTacos(@Query() paginationQuery) {
    // const { limit, offset } = paginationQuery;
    return this.tacosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tacosService.findOne(id);
  }

  @Post()
  create(@Body() createTacoDto: CreateTacoDto) {
    return this.tacosService.create(createTacoDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTacoDto: UpdateTacoDto) {
    return this.tacosService.update(id, updateTacoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tacosService.remove(id);
  }
}
