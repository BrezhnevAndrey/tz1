import React from "react";
import { BlockInformation } from "../BlockInformation/BlockInformation";
import { Header } from "../Header";
import { UserPresentation } from "../UserPresentation/UserPresentation";
import styles from "./userpage.less";

export function UserPage() {
  return (
    <div className={styles.container}>
      <Header children={<UserPresentation />} />
      <BlockInformation />
    </div>
  );
}
