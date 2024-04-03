import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Task {
  id: number;
  list_id: number;
  name: string;
  status: string;
  deadline: string | Date;
  priority: string;
  description: string;
}

interface TasksState {
  value: Task[];
}

const initialState: TasksState = {
  value: [],
};

const Tasks = createSlice({
  name: 'Tasks',
  initialState,
  reducers: {
    setTasks(state, action: PayloadAction<Task[]>) {
      state.value = action.payload;
    },
  }
})

export const { setTasks } = Tasks.actions;

export default Tasks.reducer;
