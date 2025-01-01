import styles from "./taskfilter.module.css";

export default function TaskFilter({
  setFilter,
  totalTasks,
  clearCompletedTasks,
}) {
  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <div>{totalTasks} items left</div>
        <div className={styles.options}>
          <button className={styles.button} onClick={() => setFilter("All")}>
            All
          </button>
          <button className={styles.button} onClick={() => setFilter("Active")}>
            Active
          </button>
          <button
            className={styles.button}
            onClick={() => setFilter("Completed")}
          >
            Completed
          </button>
        </div>
        <div>
          <button onClick={clearCompletedTasks}>Clear Completed</button>
        </div>
      </div>
    </div>
  );
}
