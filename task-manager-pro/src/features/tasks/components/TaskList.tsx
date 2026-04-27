import { useAppSelector } from "@/app/hooks";
// берём данные из Redux

import TaskItem from "./TaskItem";
// компонент задачи

import { Typography } from "@mui/material";
// UI


const TaskList = () => {
  // деструктурируем state
  const { items, filter, status } = useAppSelector((state) => state.tasks);

  // состояние загрузки
  if (status === "loading") {
    return <Typography>Loading...</Typography>;
  }

  // фильтрация задач
  const filtered =
    filter === "all"
      ? items
      : items.filter((t) => t.status === filter);

  // пустое состояние
  if (filtered.length === 0) {
    return <Typography>No tasks yet </Typography>;
  }

  // рендер списка
  return (
    <>
      {filtered.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </>
  );
};

export default TaskList;