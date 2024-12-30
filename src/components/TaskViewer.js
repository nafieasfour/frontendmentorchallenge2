import styles from "./taskviewer.module.css";
import Image from "next/image";
import { useState } from "react";

export default function TaskViewer({
  tasks = [],
  deleteTask,
  toggleTaskSelection,
}) {
  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        {tasks.map((t, index) => (
          <div key={index} className={styles.viewer}>
            <div
              className={`${styles.circle} ${
                t.completed ? styles.selected : ""
              }`}
              onClick={() => toggleTaskSelection(index)}
            ></div>
            <p>{t.text}</p>
            <Image
              src={"/images/icon-cross.svg"}
              width={16}
              height={16}
              alt="icon"
              onClick={() => deleteTask(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
