import { Todo, NewTodo } from "../Interfaces";

export const getTodos = async (): Promise<Todo[]> => {
  const res = await fetch("http://localhost:8080/todos");
  const todos = await res.json();
  return todos.data;
};

export const addNewTodo = async (todo: NewTodo[]): Promise<Todo> => {
  const res = await fetch("http://localhost:8080/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });

  const addedTodo = await res.json();
  return addedTodo;
};
