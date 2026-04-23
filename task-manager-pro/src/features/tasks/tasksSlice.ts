import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type TaskStatus = "todo" | "in_progress" | "done";

export interface Task {
  id: string;
  title: string;
  status: TaskStatus;
}

interface TasksState {
  items: Task[];
  filter: TaskStatus | "all";
}

const initialState: TasksState = {
  items: [],
  filter: "all",
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      const newTask: Task = {
        id: Date.now().toString(),
        title: action.payload,
        status: "todo",
      };
      state.items.push(newTask);
    },

    deleteTask: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(
        (task) => task.id !== action.payload
      );
    },

    changeStatus: (
      state,
      action: PayloadAction<{ id: string; status: TaskStatus }>
    ) => {
      const task = state.items.find((t) => t.id === action.payload.id);
      if (task) {
        task.status = action.payload.status;
      }
    },

    setFilter: (state, action: PayloadAction<TasksState["filter"]>) => {
      state.filter = action.payload;
    },
  },
});

export const { addTask, deleteTask, changeStatus, setFilter } =
  tasksSlice.actions;

export default tasksSlice.reducer;