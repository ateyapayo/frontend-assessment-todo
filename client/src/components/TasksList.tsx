import { useState, useEffect } from "react";

import { getTasks } from "../api/Tasks.ts";
import Task from "../Interfaces.ts";

const TasksList: React.FC = () => {
  const [tasksList, setTasksList] = useState<Task[]>([]);

  const fetchAllTasks = async () => {
    const tasks = await getTasks();
    setTasksList(tasks);
  };

  useEffect(() => {
    fetchAllTasks();
  }, []);

  return (
    <>
      {tasksList.map((task) => (
        <ul key={task.id}>
          <li>{task.title}</li>
        </ul>
      ))}
    </>
  );
};

export default TasksList;
