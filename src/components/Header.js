"use client";
import Image from "next/image";
import styles from "./header.module.css";
import { useEffect } from "react";

export default function Header({ theme, toggleMode, iconSource }) {
  //console.log(theme);

  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.title}>TODO</div>
        <div>
          <button onClick={toggleMode}>
            <div className={styles.iconDiv}>
              {theme === "light" ? (
                <Image
                  src={iconSource}
                  className={styles.icon}
                  alt="icon"
                  width={24}
                  height={24}
                />
              ) : (
                <Image
                  src={iconSource}
                  className={styles.icon}
                  alt="icon"
                  width={24}
                  height={24}
                />
              )}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
