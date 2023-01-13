import React, { useEffect, useState } from "react";
import {
  addLike,
  changeSelectedUserReducer,
  deleteLike,
  IDataElement,
  IDataState,
} from "../../store/dataSlice";
import styles from "./card.less";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import LikeSVG from "../../images/like.svg?svgr";

interface ICard {
  data: IDataElement;
}

export function Card({ data }: ICard) {
  const dispatch = useDispatch();
  const [IsSetLocal, setIsSetLocal] = useState(false);
  const likes = useSelector<IDataState, Array<number>>(
    (state) => state.data.likes
  );
  const IsLike = likes.includes(data.id);
  const likeClasses = classNames(styles.like, { [styles.selected]: IsLike });
  const click = () => {
    !IsLike && dispatch(addLike(data.id));
    IsLike && dispatch(deleteLike(data.id));
    setIsSetLocal(true);
  };
  useEffect(() => {
    IsSetLocal &&
      likes.length > 1 &&
      localStorage.setItem("likes", JSON.stringify(likes));
    setIsSetLocal(false);
  }, [likes]);
  return (
    <li>
      <article className={styles.container}>
        <Link
          className={styles.link}
          to={`/user/${data.id}`}
          onClick={() => {
            dispatch(changeSelectedUserReducer(data));
          }}
        >
          <div>
            <img
              width="124px"
              height="124px"
              className={styles.avatar}
              src={data.avatar}
            />
            <div className={styles.name}>
              {data.first_name} {data.last_name}
            </div>
          </div>
        </Link>
        <div className={styles.btnWrapper}>
          <button type="button" className={likeClasses} onClick={click}>
            <LikeSVG />
          </button>
        </div>
      </article>
    </li>
  );
}
