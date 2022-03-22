import { Test, TestingModule } from '@nestjs/testing';
import { TacoController } from './taco.controller';

describe('TacoController', () => {
  let controller: TacoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TacoController],
    }).compile();

    controller = module.get<TacoController>(TacoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
