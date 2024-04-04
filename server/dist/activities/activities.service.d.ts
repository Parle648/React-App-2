import { Logger } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
export declare class ActivitiesService {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
    logger: Logger;
    create(createActivityDto: Prisma.TasksActivitiesCreateInput): Promise<{
        id: number;
        activity_type: string;
        task_name: string;
        from: string;
        to: string;
        time: Date;
        task_property: string;
        board_id: number;
        task_id: number;
    }>;
    findAll(board_id: number): Promise<[{
        id: number;
        activity_type: string;
        task_name: string;
        from: string;
        to: string;
        time: Date;
        task_property: string;
        board_id: number;
        task_id: number;
    }[], {
        id: number;
        activity_type: string;
        list_name: string;
        from: string;
        to: string;
        board_id: number;
        time: Date;
        list_id: number;
    }[]]>;
    findOne(id: number): Promise<{
        id: number;
        activity_type: string;
        task_name: string;
        from: string;
        to: string;
        time: Date;
        task_property: string;
        board_id: number;
        task_id: number;
    }[]>;
    update(id: number, updateActivityDto: Prisma.TasksActivitiesCreateInput): Promise<{
        id: number;
        activity_type: string;
        task_name: string;
        from: string;
        to: string;
        time: Date;
        task_property: string;
        board_id: number;
        task_id: number;
    }>;
    remove(id: number): Prisma.Prisma__TasksActivitiesClient<{
        id: number;
        activity_type: string;
        task_name: string;
        from: string;
        to: string;
        time: Date;
        task_property: string;
        board_id: number;
        task_id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
