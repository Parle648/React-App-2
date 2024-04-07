import { Test, TestingModule } from '@nestjs/testing';
import { ListsController } from './lists.controller';
import { ListsService } from './lists.service';
import { DatabaseService } from 'src/database/database.service';
import request from 'supertest';

describe('ListsController', () => {
  let controller: ListsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListsController],
      providers: [ListsService, DatabaseService],
    }).compile();

    controller = module.get<ListsController>(ListsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('GET all lists', async () => {
    const lists = await request('http://localhost:3001').get('/lists')

    expect(lists.status).toBe(200)
  })
  
  it('GET all lists by board', async () => {
    const lists = await request('http://localhost:3001').get('/lists?board_id=1')

    expect(lists.status).toBe(200)
  })

  it('POST list', async () => {
    const lists = await request('http://localhost:3001')
    .post('/lists')
    .send({
      listData: {
        list_name: 'List',
        board_id: 1
      },
      action: {
          activity_type: "createList",
          from: "",
          to: 'List',
          list_name: 'List',
          board_id: 1
      }
    })

    expect(lists.status).toBe(201)
  })

  it('PATCH list', async () => {
    const lists = await request('http://localhost:3001')
    .patch('/lists/1')
    .send({
      listData: {
        list_name: 'List',
        board_id: 1
      },
      action: {
          activity_type: "createList",
          from: "",
          to: 'List',
          list_name: 'List',
          board_id: 1
      }
    })

    expect(lists.status).toBe(200)
  })

  it('DELETE list', async () => {
    const existLists = await request('http://localhost:3001').get('/lists')
    const lists = await request('http://localhost:3001')
    .patch(`/lists/${existLists.body[0].id}`)
    .send({
      listData: {
        list_name: 'List',
        board_id: 1
      },
      action: {
          activity_type: "createList",
          from: "",
          to: 'List',
          list_name: 'List',
          board_id: 1
      }
    })

    expect(lists.status).toBe(200)
  })
});
