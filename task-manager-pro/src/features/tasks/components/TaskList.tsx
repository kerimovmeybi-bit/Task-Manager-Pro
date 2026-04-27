import { useAppSelector } from "@/app/hooks";
import TaskItem from "./TaskItem";
import { Typography } from "@mui/material";

const TaskList = () => {
  const { items, filter, status } = useAppSelector((state) => state.tasks);

  if (status === "loading") {
    return <Typography>Loading...</Typography>;
  }

  const filtered =
    filter === "all"
      ? items
      : items.filter((t) => t.status === filter);

  if (filtered.length === 0) {
    return <Typography>No tasks yet </Typography>;
  }

  return (
    <>
      {filtered.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </>
  );
};

export default TaskList;