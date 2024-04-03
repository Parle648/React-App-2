import { createContext } from "react";

export const ListContext = createContext<{list_id: number, list_name: string, tasks: []}>({
    list_id: 0,
    list_name: '',
    tasks: []
});