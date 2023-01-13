import React from "react";
import { Header } from "../Header";
import { Main } from "../Main";
import { TextField } from "../TextField/TextField";
import styles from "./content.less";

export function Content() {
  return (
    <div>
      <Header children={<TextField />} />
      <Main />
    </div>
  );
}
