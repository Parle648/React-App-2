import { ActivitiesService } from './activities.service';
export declare class ActivitiesController {
    private readonly activitiesService;
    constructor(activitiesService: ActivitiesService);
    findAll(): Promise<[{
        id: number;
        activity_type: string;
        task_name: string;
        from: string;
        to: string;
        time: Date;
        task_property: string;
        task_id: number;
    }[], {
        id: number;
        activity_type: string;
        list_name: string;
        from: string;
        to: string;
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
        task_id: number;
    }[]>;
}
