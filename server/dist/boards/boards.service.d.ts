import { Logger } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
export declare class BoardsService {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
    logger: Logger;
    create(createBoardDto: any): Promise<{
        status: number;
        boards: {
            id: number;
            name: string;
        }[];
        error?: undefined;
    } | {
        status: number;
        error: any;
        boards?: undefined;
    }>;
    findAll(): Promise<{
        status: number;
        boards: {
            id: number;
            name: string;
        }[];
    }>;
    update(id: number, updateBoardDto: any): Promise<string | {
        status: number;
        boards: {
            id: number;
            name: string;
        }[];
    }>;
    remove(id: number): Promise<{
        status: number;
        boards: {
            id: number;
            name: string;
        }[];
    }>;
}
