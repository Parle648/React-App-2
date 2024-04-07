import { Test, TestingModule } from '@nestjs/testing';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { DatabaseService } from 'src/database/database.service';
import request from 'supertest'

describe('TasksController', () => {
  let controller: TasksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TasksController],
      providers: [TasksService, DatabaseService],
    }).compile();

    controller = module.get<TasksController>(TasksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('GET all tasks', async () => {
    const result = await request('http://localhost:3001').get('/tasks')
    expect(result.status).toBe(200);
  })

  it('POST tasks', async () => {
    const result = await request('http://localhost:3001')
    .post('/tasks')
    .send({
      taskData: {
        list_id: 1,
        name: 'task_name',
        status: 'status',
        deadline: new Date(),
        priority: 'low',
        description: 'asdasd'
      },
      action: {
        activity_type: 'type',
        task_name: 'task_name',
        from: '',
        to: '',
        task_property: '',
        board_id: 1
      }
    })

    expect(result.status).toBe(201);
  })

  it('DELETE tasks', async () => {
    const tasks = await request('http://localhost:3001').get('/tasks')
    const result = await request('http://localhost:3001')
    .del(`/tasks/${tasks.body.tasks[0].id}`)
    .send({
      task_name: 'task_name',
    })

    expect(result.status).toBe(200);
  })

  it('PATCH tasks', async () => {
    const result = await request('http://localhost:3001')
    .patch('/tasks/5')
    .send({
      taskData: {
        list_id: 1,
        name: 'task_name',
        status: 'status',
        deadline: new Date(),
        priority: 'middle',
        description: 'asdasd'
      },
      action: {
        activity_type: 'type',
        task_name: 'task_name',
        from: '',
        to: '',
        task_property: '',
        board_id: 1
      }
    })

    expect(result.status).toBe(200);
  })
});
