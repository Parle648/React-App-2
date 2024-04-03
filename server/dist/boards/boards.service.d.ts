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
    findAll(): string;
    update(id: number, updateBoardDto: any): string;
    remove(id: number): string;
}
