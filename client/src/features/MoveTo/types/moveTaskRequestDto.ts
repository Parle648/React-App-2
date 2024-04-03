export type MoveTaskRequestDto = {
    task_id: number,
    new_list_name: string, 
    old_list_name: string, 
    list_id: number,
    task_name: string
}