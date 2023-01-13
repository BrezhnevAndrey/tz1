import classNames from "classnames";
import React from "react";
import styles from "./exitbutton.less";


interface IExitButton {
  text: string | JSX.Element;
  click: () => void;
  classes?: string;
}

export function ExitButton({ text, click, classes }: IExitButton) {
  const btnClasses = classNames(styles.button, classes ? classes : "");

  return (
    <button type="button" className={btnClasses} onClick={click}>
      {text}
    </button>
  );
}
