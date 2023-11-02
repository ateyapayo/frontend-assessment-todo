import { Input } from "@mantine/core";

import { useState } from "react";

import { addNewTodo } from "../api/todos";

type InputProps = {
  reload: React.Dispatch<React.SetStateAction<boolean>>;
};

const InputContainer: React.FC<InputProps> = ({ reload }) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(newTodo);

    const todo: any = {
      title: newTodo,
    };

    try {
      await addNewTodo(todo);
      setNewTodo("");
      reload(true);
    } catch (error) {
      console.error("Error adding New Todo:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        style={{ width: "550px" }}
        size="md"
        radius="xl"
        onChange={(e) => setNewTodo(e.target.value)}
        value={newTodo}
        placeholder="Add a new task"
      />
      <button className="plus-button" type="submit" />
    </form>
  );
};

export default InputContainer;
