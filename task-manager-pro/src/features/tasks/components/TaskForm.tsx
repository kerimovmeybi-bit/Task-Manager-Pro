import { useState } from "react";
import { TextField, Button, Stack } from "@mui/material";
import { useAppDispatch } from "@/app/hooks";
import { addTaskAsync } from "../tasksSlice";

const TaskForm = () => {
  const [text, setText] = useState("");
  const dispatch = useAppDispatch();

  const handleAdd = () => {
    if (!text.trim()) return;
    dispatch(addTaskAsync(text));
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