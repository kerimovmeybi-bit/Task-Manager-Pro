import { configureStore } from "@reduxjs/toolkit";
import tasksReduser from "@/features/tasks/tasksSlice";

export const store = configureStore({
    reducer: {
      tasks: tasksReduser,    
    },
});

// Типы для TS очень важно 
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;