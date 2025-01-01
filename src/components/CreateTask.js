import styles from "./createtask.module.css";
import { useState } from "react";

export default function CreateTask({ addTask }) {
  const [task, setTask] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask("");
    }
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.formStyle} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <input
            type="text"
            className={styles.input}
            placeholder="Create a new task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}
