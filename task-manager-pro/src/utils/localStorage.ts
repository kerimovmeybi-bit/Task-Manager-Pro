import type { Task } from "@/features/tasks/tasksSlice";

const STORAGE_KEY = "tasks";

export const loadTasks = (): Task[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

export const saveTasks = (tasks: Task[]) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch {
    console.error("Failed to save tasks");
  }
};