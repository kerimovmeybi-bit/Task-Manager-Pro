import { ToggleButton, ToggleButtonGroup } from "@mui/material";
// используем MUI — ок 

import { useAppDispatch, useAppSelector } from "@/app/hooks";
// типизированные хуки 

import { setFilter } from "../tasksSlice";
// action из slice


const TaskFilter = () => {
  const dispatch = useAppDispatch();

  // берём текущий фильтр из store
  const filter = useAppSelector((state) => state.tasks.filter);

  return (
    <ToggleButtonGroup
      value={filter} // текущий выбранный фильтр
      exclusive // можно выбрать только один
      onChange={(_, value) => value && dispatch(setFilter(value))}
      //  value может быть null 

      fullWidth
      sx={{ mb: 2 }}
    >
      <ToggleButton value="all">All</ToggleButton>
      <ToggleButton value="todo">Todo</ToggleButton>
      <ToggleButton value="in_progress">In Progress</ToggleButton>
      <ToggleButton value="done">Done</ToggleButton>
    </ToggleButtonGroup>
  );
};

export default TaskFilter;