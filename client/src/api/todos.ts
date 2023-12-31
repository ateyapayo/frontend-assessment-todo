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

export const removeTodo = async (todoId: any) => {
  const res = await fetch(`http://localhost:8080/todos/${todoId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res;
};

export const updateTodo = async (todo: any) => {
  const res = await fetch(`http://localhost:8080/todos/${todo.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });

  const updatedTodo = await res.json();
  return updatedTodo;
};
