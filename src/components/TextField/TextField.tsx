import React from "react";
import styles from "./textfield.less";

export function TextField() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Наша команда</h2>
      <p className={styles.information}>
        Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые
        ложатся на их плечи, и умеющие находить выход из любых, даже самых
        сложных ситуаций.
      </p>
    </div>
  );
}
