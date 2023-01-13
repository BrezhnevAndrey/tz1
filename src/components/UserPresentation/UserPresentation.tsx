import React from "react";
import { useSelector } from "react-redux";
import { IDataElement, IDataState } from "../../store/dataSlice";
import styles from "./userpresentation.less";

export function UserPresentation() {
  const data = useSelector<IDataState, IDataElement>(
    (state) => state.data.selectedUser
  );

  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        {data && data.avatar ? <img src={data.avatar} className={styles.imgUser} /> : "none"}
      </div>
      <div className={styles.information}>
        <div className={styles.name}>
          {data && data.first_name
            ? data.first_name + " " + data.last_name
            : "unknown"}
        </div>
        <div className={styles.jobTitle}>
          {data && data.first_name ? "Партнёр" : "unknown"}
        </div>
      </div>
    </div>
  );
}
