import { useParams } from "react-router-dom";
// берём id из URL

import { useAppSelector } from "@/app/hooks";
// доступ к Redux

import { Container, Typography, Paper } from "@mui/material";
// UI


const TaskDetails = () => {
  const { id } = useParams();
  //  id имеет тип string | undefined

  const task = useAppSelector((state) =>
    state.tasks.items.find((t) => t.id === id)
  );
  // ищем задачу по id

  if (!task) {
    return <Typography>Task not found</Typography>;
  }
  // обработка отсутствия задачи 

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Paper sx={{ p: 3, borderRadius: 3 }}>
        <Typography variant="h5">{task.title}</Typography>
        <Typography>Status: {task.status}</Typography>
      </Paper>
    </Container>
  );
};

export default TaskDetails;