import Task from "../Interfaces";

export const getTasks = async (): Promise<Task[]> => {
  const res = await fetch("http://localhost:8080/todos");
  const tasks = await res.json();
  return tasks.data;
};
