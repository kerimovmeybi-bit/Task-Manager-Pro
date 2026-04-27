const BASE_URL = "http://localhost:3001/tasks";

export const getTasks = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export const createTask = async (task: any) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  return res.json();
};

export const deleteTaskApi = async (id: string) => {
  await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
};