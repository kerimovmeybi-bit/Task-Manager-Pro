import TaskForm from "@/features/tasks/components/TaskForm";
import TaskList from "@/features/tasks/components/TaskList";
import TaskFilter from "@/features/tasks/components/TaskFilter";
import { Container, Paper, Typography } from "@mui/material";

const Home = () => {
  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Paper sx={{ p: 3, borderRadius: 3 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Task Manager 
        </Typography>

        <TaskForm />
        <TaskFilter />
        <TaskList />
      </Paper>
    </Container>
  );
};

export default Home;