import classNames from "classnames";
import { Field } from "formik";
import React, { useState } from "react";
import styles from "./input.less";

interface IInput {
  type: string;
  name: string;
  labelText: string;
  invalid: boolean;
}

export function Input({ type, name, labelText, invalid }: IInput) {
  const [inputType, setInputType] = useState(type);
  const btnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    inputType === "text" ? setInputType("password") : setInputType("text");
  };

  const inputClasses = classNames(styles["input"], {
    [styles["input_invalid"]]: invalid,
  });

  return (
    <div className={styles.container}>
      <label htmlFor={name} className={styles.label}>
        {labelText}
      </label>
      <div className={styles.wrapper}>
        <Field
          type={inputType}
          name={name}
          id={name}
          className={inputClasses}
          autoComplete={"on"}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={btnClick}
            className={styles.button}
          ></button>
        )}
      </div>
    </div>
  );
}
