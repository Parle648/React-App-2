import { Logger } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
export declare class TasksService {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
    logger: Logger;
    create(createTasksDto: {
        taskData: Prisma.TasksCreateInput;
        action: Prisma.TasksActivitiesCreateInput;
    }): Promise<{
        status: number;
        tasks: {
            id: number;
            list_id: number;
            name: string;
            status: string;
            deadline: Date;
            priority: string;
            description: string;
        }[];
    }>;
    findAll(): Promise<{
        status: number;
        tasks: {
            id: number;
            list_id: number;
            name: string;
            status: string;
            deadline: Date;
            priority: string;
            description: string;
        }[];
    }>;
    findOne(id: number): Promise<{
        status: number;
        tasks: {
            id: number;
            list_id: number;
            name: string;
            status: string;
            deadline: Date;
            priority: string;
            description: string;
        };
    }>;
    update(id: number, updateTasksDto: any): Promise<{
        status: number;
        tasks: {
            id: number;
            list_id: number;
            name: string;
            status: string;
            deadline: Date;
            priority: string;
            description: string;
        }[];
    }>;
    remove(id: number, taskDto: any): Promise<{
        status: number;
    }>;
}
