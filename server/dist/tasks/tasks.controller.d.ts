import { TasksService } from './tasks.service';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    create(createTasksDto: any): Promise<{
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
    findOne(id: string): Promise<{
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
    update(id: string, updateTaskDto: any): Promise<{
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
    remove(id: string, taskDto: any): Promise<{
        status: number;
    }>;
}
