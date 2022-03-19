import { Test, TestingModule } from '@nestjs/testing';
import { TacosController } from './tacos.controller';

describe('TacoController', () => {
  let controller: TacosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TacosController],
    }).compile();

    controller = module.get<TacosController>(TacosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
