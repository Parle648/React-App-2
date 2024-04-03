import { BoardsService } from './boards.service';
export declare class BoardsController {
    private readonly boardsService;
    constructor(boardsService: BoardsService);
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
    update(id: string, updateBoardDto: any): string;
    remove(id: string): string;
}
