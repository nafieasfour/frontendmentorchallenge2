import { useState } from "react";
import CreateTask from "./CreateTask";
import TaskViewer from "./TaskViewer";
import TaskFilter from "./TaskFilter";

export default function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");

  const addTask = (task) => {
    setTasks([...tasks, { text: task, completed: false }]);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleTaskSelection = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const clearCompletedTasks = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "All") return true;
    if (filter === "Active") return !task.completed;
    if (filter === "Completed") return task.completed;
  });

  return (
    <div>
      <CreateTask addTask={addTask} />
      <TaskViewer
        tasks={filteredTasks}
        deleteTask={deleteTask}
        toggleTaskSelection={toggleTaskSelection}
      />
      <TaskFilter
        setFilter={setFilter}
        totalTasks={tasks.length}
        clearCompletedTasks={clearCompletedTasks}
      />
    </div>
  );
}
