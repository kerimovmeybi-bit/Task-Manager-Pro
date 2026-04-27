// функция для создания store из Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";

// редьюсер задач
import tasksReduser from "@/features/tasks/tasksSlice";


// создаём store
export const store = configureStore({
  reducer: {
    // ключ = часть state
    // state.tasks → будет доступен в приложении
    tasks: tasksReduser,
  },
});


// тип всего state (глобального)
export type RootState = ReturnType<typeof store.getState>;

// тип dispatch (для async и обычных actions)
export type AppDispatch = typeof store.dispatch;