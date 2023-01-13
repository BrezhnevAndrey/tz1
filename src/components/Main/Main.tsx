import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeLikes, IData, pushDataResucer } from "../../store/dataSlice";
import { CardsList } from "../CardsList/CardsList";
import styles from "./main.less";

export function Main() {
  const dispatch = useDispatch();
  const [IsLoading, setIsLoading] = useState(true);
  const likesStore = localStorage.getItem("likes");
  const likes = likesStore ? JSON.parse(likesStore) : undefined;

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((resp: IData) => {
        const data = resp.data.data;
        dispatch(pushDataResucer(data));
        likes && likes.length > 1 && dispatch(changeLikes(likes));
      })
      .catch((error) => error.log(error));
    setIsLoading(false);
  }, []);
  return (
    <div className={styles.container}>
      {IsLoading && "Загрузка"}
      {!IsLoading && <CardsList />}
    </div>
  );
}
