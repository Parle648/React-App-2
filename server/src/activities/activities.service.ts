import { Injectable, Logger } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ActivitiesService {
  constructor (private readonly databaseService: DatabaseService) {}

  logger = new Logger('ActivitiesService');

  async create(createActivityDto: Prisma.TasksActivitiesCreateInput) {
    return this.databaseService.tasksActivities.create({ data: createActivityDto })
  }

  findAll(board_id: number) {

    this.logger.log(`User get all activities`)

    const tasksActivities = this.databaseService.tasksActivities.findMany({
      where: {
        board_id: +board_id
      }
    });
    const lsitsActivities = this.databaseService.listActivities.findMany({
      where: {
        board_id: +board_id
      }
    });

    return this.databaseService.$transaction([tasksActivities, lsitsActivities])
  }

  async findOne(id: number) {
    this.logger.log(`User get activities for task which id = ${id}`)
    return this.databaseService.tasksActivities.findMany({
      where: { 
        task_id: id 
      }
    })
  }

  async update(id: number, updateActivityDto: Prisma.TasksActivitiesCreateInput) {
    return this.databaseService.tasksActivities.update({
      where: {
        id,
      },
      data: updateActivityDto
    })
  }

  remove(id: number) {
    return this.databaseService.tasksActivities.delete({
      where: { id }
    })
  }
}
