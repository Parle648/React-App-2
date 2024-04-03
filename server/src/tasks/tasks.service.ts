import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class TasksService {
  constructor (private readonly databaseService: DatabaseService) {}

  logger = new Logger('TasksService')

  async create(createTasksDto: {
    taskData: Prisma.TasksCreateInput,
    action: Prisma.TasksActivitiesCreateInput,
  }) {
    const {taskData, action} = createTasksDto;

    
    try {
      await this.databaseService.tasks.create({
        data: {
          ...taskData,
          activities: {
            create: [
              action
            ]
          }
        },
        include: {
          activities: true
        }
      });

      this.logger.log(`User create task with name - "${action.task_name}". DTO is ${JSON.stringify(createTasksDto)}`)

      const tasks = await this.databaseService.tasks.findMany()

      return { status: 200, tasks }
    } catch (error) {
      this.logger.debug(`User failed to create task - "${action.task_name}". DTO is ${JSON.stringify(createTasksDto)}`)
      
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: error,
      }, HttpStatus.FORBIDDEN, {
        cause: error
      });
    }
  }

  async findAll() {
    try {
      const tasks = await this.databaseService.tasks.findMany()
      
      this.logger.log(`User get all tasks`)

      return { 
        status: 200,
        tasks
      }
    } catch (error) {
      this.logger.debug(`User failed to get all tasks. error = ${error}`)
      
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: error,
      }, HttpStatus.FORBIDDEN, {
        cause: error
      });
    }
  }

  async findOne(id: number) {
    try {
      const tasks = await this.databaseService.tasks.findUnique({
        where: { id }
      })
      
      if (tasks === null) {
        this.logger.debug(`User failed to get all task with id = ${id}`)
      
        throw new HttpException({
          status: HttpStatus.FORBIDDEN,
          error: 'There is no that task',
        }, HttpStatus.FORBIDDEN, {
          cause: 'There is no that task'
        });
      } else {
        this.logger.log(`User get specific task which id = ${id}`)

        return {
          status: 200,
          tasks
        }
      }
    } catch (error) {
      this.logger.debug(`User failed to get all task with id = ${id} error = ${error}`)
      
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: error,
      }, HttpStatus.FORBIDDEN, {
        cause: error
      });
    }
  }

  async update(id: number, updateTasksDto) {
    const { taskData, action } = updateTasksDto;

    try {
      const taskUpdate = await this.databaseService.tasks.update({
        where: {
          id,
        },
        data: {
          ...taskData,
          activities: {
            create: [
              action
            ]
          }
        },
        include: {
          activities: true
        }
      });

      this.logger.log(`User update task wich name - "${action.task_name}". DTO is ${JSON.stringify(updateTasksDto)}`)
    
      const tasks = await this.databaseService.tasks.findMany();

      return { status: 200, tasks }
    } catch (error) {
      this.logger.debug(`User failed to update task "${action.task_name}" error = ${error}`)
      
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: error,
      }, HttpStatus.FORBIDDEN, {
        cause: error
      });
    }
  }

  async remove(id: number, taskDto) {
    try {
      await this.databaseService.tasks.delete({
        where: { id },
      })
      this.logger.log(`User delete task which id = ${id}`)

      await this.databaseService.tasksActivities.create({
        data: {
          activity_type: "deleteTask",
          task_name: taskDto.task_name,
          from: "",
          to: taskDto.task_name,
          task_property: '',
          board_id: 1
        }
      })

      return { status: 200}
    } catch (error) {
      this.logger.debug(`User failed to delete task with id: ${id} error = ${error}`)
      
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: error,
      }, HttpStatus.FORBIDDEN, {
        cause: error
      });
    }
  }
}
