import { useState } from "react";
// локальный state для input

import { TextField, Button, Stack } from "@mui/material";
// UI компоненты

import { useAppDispatch } from "@/app/hooks";
// типизированный dispatch 

import { addTaskAsync } from "../tasksSlice";
// async action


const TaskForm = () => {
  const [text, setText] = useState("");
  // состояние инпута

  const dispatch = useAppDispatch();

  const handleAdd = () => {
    // защита от пустых строк 
    if (!text.trim()) return;

    // отправляем action
    dispatch(addTaskAsync(text));

    // очищаем input
    setText("");
  };

  return (
    <Stack direction="row" spacing={2} mb={2}>
      <TextField
        fullWidth
        label="New task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button variant="contained" onClick={handleAdd}>
        Add
      </Button>
    </Stack>
  );
};

export default TaskForm;