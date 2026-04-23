import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { addTask, deleteTask } from "@/features/tasks/tasksSlice";

function App() {
  const [text, setText] = useState("");
  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state) => state.tasks.items);

  return (
    <div style={{ padding: 20 }}>
      <h1>Task Manager</h1>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="New task"
      />

      <button
        onClick={() => {
          dispatch(addTask(text));
          setText("");
        }}
      >
        Add
      </button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title}
            <button onClick={() => dispatch(deleteTask(task.id))}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;