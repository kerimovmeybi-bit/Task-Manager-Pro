import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// берём RTK — всё ок 

import type { PayloadAction } from "@reduxjs/toolkit";
// используем import type 

import type { Task } from "./tasksSlice";

import { getTasks, createTask, deleteTaskApi } from "@/api/tasksApi";
// API слой вынесен отдельно


// тип статусов
export type TaskStatus = "todo" | "in_progress" | "done";

// модель задачи
export interface Task {
  id: string;
  title: string;
  status: TaskStatus;
}


//  GET (получение задач)
export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  return await getTasks();
});


//  POST (создание)
export const addTaskAsync = createAsyncThunk(
  "tasks/addTask",
  async (title: string) => {
    const newTask = {
      title,
      status: "todo",
    };

    return await createTask(newTask);
  }
);


//  DELETE
export const deleteTaskAsync = createAsyncThunk(
  "tasks/deleteTask",
  async (id: string) => {
    await deleteTaskApi(id);
    return id; // возвращаем id чтобы удалить из store
  }
);


// state
interface TasksState {
  items: Task[];
  filter: TaskStatus | "all";
  status: "idle" | "loading" | "succeeded" | "failed";
}


// начальное состояние
const initialState: TasksState = {
  items: [],
  filter: "all",
  status: "idle",
};


// slice
const tasksSlice = createSlice({
  name: "tasks",
  initialState,

  reducers: {
    // изменение статуса (локально)
    changeStatus: (
      state,
      action: PayloadAction<{ id: string; status: TaskStatus }>
    ) => {
      const task = state.items.find((t) => t.id === action.payload.id);

      if (task) {
        task.status = action.payload.status;
      }
    },

    // фильтр
    setFilter: (state, action: PayloadAction<TasksState["filter"]>) => {
      state.filter = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      // fetch
      .addCase(fetchTasks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchTasks.rejected, (state) => {
        state.status = "failed";
      })

      // add
      .addCase(addTaskAsync.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })

      // delete
      .addCase(deleteTaskAsync.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (task) => task.id !== action.payload
        );
      });
  },
});

// экспорт actions
export const { changeStatus, setFilter } = tasksSlice.actions;

// экспорт reducer
export default tasksSlice.reducer;