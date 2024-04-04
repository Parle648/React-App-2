import { ActivitiesService } from './activities.service';
export declare class ActivitiesController {
    private readonly activitiesService;
    constructor(activitiesService: ActivitiesService);
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
    findOne(id: string): Promise<{
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
}
