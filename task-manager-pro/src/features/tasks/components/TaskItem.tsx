import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Select,
  MenuItem,
  Stack,
  Box,
} from "@mui/material";
// MUI — ок 

import DeleteIcon from "@mui/icons-material/Delete";
// иконка

import { useAppDispatch } from "@/app/hooks";
// типизированный dispatch 

import { deleteTaskAsync, changeStatus } from "../tasksSlice";
// actions

import type { Task } from "../tasksSlice";
// тип задачи

import { useNavigate } from "react-router-dom";
// навигация


const TaskItem = ({ task }: { task: Task }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        mb: 2,
        borderRadius: 2,
        cursor: "pointer", // UX 
        transition: "0.2s",
        "&:hover": {
          boxShadow: 6, // hover эффект 
        },
      }}
      onClick={() => navigate(`/task/${task.id}`)} // переход
    >
      <CardContent>
        <Stack
          direction="row"
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography fontWeight={500}>{task.title}</Typography>

          <Box display="flex" gap={1}>
            <Select
              size="small"
              value={task.status}

              //  правильно остановил всплытие
              onClick={(e) => e.stopPropagation()}

              onChange={(e) =>
                dispatch(
                  changeStatus({
                    id: task.id,
                    status: e.target.value as Task["status"],
                  })
                )
              }
            >
              <MenuItem value="todo">Todo</MenuItem>
              <MenuItem value="in_progress">In Progress</MenuItem>
              <MenuItem value="done">Done</MenuItem>
            </Select>

            <IconButton
              color="error"
              onClick={(e) => {
                e.stopPropagation(); //  фикс бага
                dispatch(deleteTaskAsync(task.id));
              }}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default TaskItem;