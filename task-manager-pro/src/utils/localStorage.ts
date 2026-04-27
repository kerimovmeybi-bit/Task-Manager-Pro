// тип задачи
import type { Task } from "@/features/tasks/tasksSlice";


// ключ в localStorage
const STORAGE_KEY = "tasks";


// загрузка задач
export const loadTasks = (): Task[] => {
  try {
    // читаем строку из localStorage
    const data = localStorage.getItem(STORAGE_KEY);

    // если есть — парсим JSON
    return data ? JSON.parse(data) : [];
  } catch {
    // если JSON сломан — возвращаем пустой массив
    return [];
  }
};


// сохранение задач
export const saveTasks = (tasks: Task[]) => {
  try {
    // превращаем в строку и сохраняем
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch {
    // если ошибка — логируем
    console.error("Failed to save tasks");
  }
};