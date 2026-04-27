import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { setFilter } from "../tasksSlice";

const TaskFilter = () => {
  const dispatch = useAppDispatch();
  const filter = useAppSelector((state) => state.tasks.filter);

  return (
    <ToggleButtonGroup
      value={filter}
      exclusive
      onChange={(_, value) => value && dispatch(setFilter(value))}
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