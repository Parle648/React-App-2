import { createContext } from "react";

const TaskContext = createContext<{props: any} | undefined>(undefined);

export { TaskContext };