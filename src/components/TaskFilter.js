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
        <div>
          <button onClick={() => setFilter("All")}>All</button>
          <button onClick={() => setFilter("Active")}>Active</button>
          <button onClick={() => setFilter("Completed")}>Completed</button>
        </div>
        <div>
          <button onClick={clearCompletedTasks}>Clear Completed</button>
        </div>
      </div>
    </div>
  );
}
