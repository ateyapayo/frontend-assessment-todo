import Todo from "../Interfaces";

export const getTodos = async (): Promise<Todo[]> => {
  const res = await fetch("http://localhost:8080/todos");
  const todos = await res.json();
  return todos.data;
};
