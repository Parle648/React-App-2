import { ListsService } from './lists.service';
export declare class ListsController {
    private readonly listsService;
    constructor(listsService: ListsService);
    create(createListDto: any): Promise<{
        listActivities: {
            id: number;
            activity_type: string;
            list_name: string;
            from: string;
            to: string;
            board_id: number;
            time: Date;
            list_id: number;
        }[];
    } & {
        id: number;
        list_name: string;
        board_id: number;
    }>;
    findAll(query: any): Promise<{
        id: number;
        list_name: string;
        board_id: number;
    }[]>;
    update(id: string, updateListDto: any): Promise<{
        status: number;
        lists: {
            id: number;
            list_name: string;
            board_id: number;
        }[];
    }>;
    remove(id: string, deleteListDto: any): Promise<[{
        id: number;
        activity_type: string;
        list_name: string;
        from: string;
        to: string;
        board_id: number;
        time: Date;
        list_id: number;
    }, {
        id: number;
        list_name: string;
        board_id: number;
    }]>;
}
