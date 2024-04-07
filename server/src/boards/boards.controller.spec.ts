import { Test, TestingModule } from '@nestjs/testing';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';
import { DatabaseService } from 'src/database/database.service';
import request from 'supertest';

describe('BoardsController', () => {
  let controller: BoardsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BoardsController],
      providers: [BoardsService, DatabaseService],
    }).compile();

    controller = module.get<BoardsController>(BoardsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('GET all boards', async () => {
    const boards = await request('http://localhost:3001').get('/boards')

    expect(boards.status).toBe(200)
  })

  it('POST board', async () => {
    const result = await request('http://localhost:3001')
    .post('/boards')
    .send({
      name: 'asd'
    })

    expect(result.status).toBe(201);
  })

  it('DELETE boards', async () => {
    const boards = await request('http://localhost:3001').get('/boards')
    const result = await request('http://localhost:3001')
    .del(`/boards/${boards.body.boards[0].id}`)
    .send({
      name: 'name',
    })

    expect(result.status).toBe(200);
  })

  it('PATCH boards', async () => {
    const result = await request('http://localhost:3001')
    .patch('/boards/1')
    .send({
      name: 'asd'
    })

    expect(result.status).toBe(200);
  })
});
