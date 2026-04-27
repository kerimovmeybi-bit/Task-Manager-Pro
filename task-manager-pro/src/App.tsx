import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useAppDispatch } from "@/app/hooks";
import { fetchTasks } from "@/features/tasks/tasksSlice";

import Home from "@/pages/Home";
import TaskDetails from "@/pages/TaskDetails";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/task/:id" element={<TaskDetails />} />
    </Routes>
  );
}

export default App;