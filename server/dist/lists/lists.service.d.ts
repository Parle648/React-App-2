import { Logger } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
export declare class ListsService {
    private readonly dataBaseService;
    constructor(dataBaseService: DatabaseService);
    logger: Logger;
    create(createListDto: {
        listData: Prisma.ListsCreateInput;
        action: Prisma.ListActivitiesCreateInput;
    }): Promise<{
        listActivities: {
            id: number;
            activity_type: string;
            list_name: string;
            from: string;
            to: string;
            time: Date;
            list_id: number;
        }[];
    } & {
        id: number;
        list_name: string;
    }>;
    findAll(): Promise<{
        id: number;
        list_name: string;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        list_name: string;
    }>;
    update(id: number, updateListDto: {
        listData: Prisma.ListsCreateInput;
        action: Prisma.ListActivitiesCreateInput;
    }): Promise<{
        status: number;
        lists: {
            id: number;
            list_name: string;
        }[];
    }>;
    remove(id: number, deleteListDto: any): Promise<[{
        id: number;
        activity_type: string;
        list_name: string;
        from: string;
        to: string;
        time: Date;
        list_id: number;
    }, {
        id: number;
        list_name: string;
    }]>;
}
