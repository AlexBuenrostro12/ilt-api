import { Test, TestingModule } from '@nestjs/testing';
import { TacosService } from './tacos.service';

describe('TacosService', () => {
  let service: TacosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TacosService],
    }).compile();

    service = module.get<TacosService>(TacosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
