import { Test, TestingModule } from '@nestjs/testing';
import { ListsService } from './lists.service';
import { DatabaseService } from 'src/database/database.service';

describe('ListsService', () => {
  let service: ListsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListsService, DatabaseService],
    }).compile();

    service = module.get<ListsService>(ListsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
