import classNames from "classnames";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeIsListOpen,
  IData,
  IDataElement,
  IDataState,
} from "../../store/dataSlice";
import { randomString } from "../../utilits/randomString";
import { Card } from "../Card/Card";
import { ExitButton } from "../ExitButton/ExitButton";
import styles from "./cardslist.less";

export function CardsList() {
  const dispatch = useDispatch();
  const data = useSelector<IData, Array<IDataElement>>(
    (state) => state.data.data
  );
  const IsListOpen = useSelector<IDataState, boolean>(
    (state) => state.data.IsListOPen
  );
  const btnClasses = classNames(styles.button, {
    [styles[`button--open`]]: IsListOpen,
  });

  return (
    <div className={styles.container}>
      {data.length > 1 && (
        <ul className={styles.list}>
          {data.map(
            (element, index) =>
              (index <= 3 || IsListOpen) && (
                <Card data={element} key={randomString()} />
              )
          )}
        </ul>
      )}

      {data.length > 1 && (
        <ExitButton
          text={IsListOpen ? "Скрыть" : "Показать ещё"}
          click={() => {
            IsListOpen
              ? dispatch(changeIsListOpen(false))
              : dispatch(changeIsListOpen(true));
          }}
          classes={btnClasses}
        />
      )}
    </div>
  );
}
