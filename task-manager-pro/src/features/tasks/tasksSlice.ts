import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Task } from "./tasksSlice";
import { getTasks, createTask, deleteTaskApi } from "@/api/tasksApi";

// типы
export type TaskStatus = "todo" | "in_progress" | "done";

export interface Task {
  id: string;
  title: string;
  status: TaskStatus;
}

// 🔄 GET
export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  return await getTasks();
});

// ➕ POST
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

// ❌ DELETE
export const deleteTaskAsync = createAsyncThunk(
  "tasks/deleteTask",
  async (id: string) => {
    await deleteTaskApi(id);
    return id;
  }
);

// state
interface TasksState {
  items: Task[];
  filter: TaskStatus | "all";
  status: "idle" | "loading" | "succeeded" | "failed";
}

const initialState: TasksState = {
  items: [],
  filter: "all",
  status: "idle",
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
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

export const { changeStatus, setFilter } = tasksSlice.actions;

export default tasksSlice.reducer;