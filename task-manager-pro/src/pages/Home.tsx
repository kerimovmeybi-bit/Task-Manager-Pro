import TaskForm from "@/features/tasks/components/TaskForm";
// форма добавления задач

import TaskList from "@/features/tasks/components/TaskList";
// список задач

import TaskFilter from "@/features/tasks/components/TaskFilter";
// фильтр

import { Container, Paper, Typography } from "@mui/material";
// layout + UI


const Home = () => {
  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      {/* контейнер по центру страницы */}

      <Paper sx={{ p: 3, borderRadius: 3 }}>
        {/* карточка */}

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