import { useEffect } from "react";
// для побочного эффекта (загрузка данных)

import { Routes, Route } from "react-router-dom";
// роутинг

import { useAppDispatch } from "@/app/hooks";
// типизированный dispatch

import { fetchTasks } from "@/features/tasks/tasksSlice";
// async загрузка задач

import Home from "@/pages/Home";
import TaskDetails from "@/pages/TaskDetails";
// страницы


function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // при старте приложения загружаем задачи
    dispatch(fetchTasks());
  }, [dispatch]);
  // добавил dispatch в зависимости

  return (
    <Routes>
      {/* главная страница */}
      <Route path="/" element={<Home />} />

      {/* динамический маршрут */}
      <Route path="/task/:id" element={<TaskDetails />} />
    </Routes>
  );
}

export default App;