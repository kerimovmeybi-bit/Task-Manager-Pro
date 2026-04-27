// базовый URL  API (json-server)
const BASE_URL = "http://localhost:3001/tasks";

//  GET — получение всех задач
export const getTasks = async () => {
  // отправляем GET-запрос
  const res = await fetch(BASE_URL);
  return res.json();
};

//  POST — создание задачи
export const createTask = async (task: any) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // говорим серверу что отправляем JSON
    },
    body: JSON.stringify(task), // превращаем объект в строку
  });
  return res.json();
};

//  DELETE — удаление задачи
export const deleteTaskApi = async (id: string) => {
  // отправляем DELETE запрос по id
  await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
};