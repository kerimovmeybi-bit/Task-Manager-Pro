import { useParams } from "react-router-dom";
import { useAppSelector } from "@/app/hooks";
import { Container, Typography, Paper } from "@mui/material";

const TaskDetails = () => {
  const { id } = useParams();
  const task = useAppSelector((state) =>
    state.tasks.items.find((t) => t.id === id)
  );

  if (!task) {
    return <Typography>Task not found</Typography>;
  }

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