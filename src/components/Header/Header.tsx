import classNames from "classnames";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearData } from "../../store/dataSlice";
import { ExitButton } from "../ExitButton";
import styles from "./header.less";
import ExitSVG from "../../images/exit.svg?svgr";
import BackSVG from "../../images/back.svg?svgr";

interface IHeader {
  children: React.ReactElement;
}

export function Header({ children }: IHeader) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const url = window.location.href;
  const btnMobileClasses = classNames(styles.mobile, styles.exitBtn);

  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.rightBtnWrapper}>
          <div className={btnMobileClasses}>
            <ExitButton
              text={<ExitSVG />}
              click={() => {
                dispatch(clearData());
                localStorage.removeItem("token");
                navigate("/auth");
              }}
            />
          </div>

          <div className={styles.desktop}>
            <ExitButton
              text={"Выход"}
              click={() => {
                dispatch(clearData());
                localStorage.removeItem("token");
                navigate("/auth");
              }}
            />
          </div>
        </div>
        <div className={styles.leftBtnWrapper}>
          {url.includes("/user/") && (
            <div className={btnMobileClasses}>
              <ExitButton
                text={<BackSVG />}
                click={() => {
                  navigate(-1);
                }}
              />
            </div>
          )}

          {url.includes("/user/") && (
            <div className={styles.desktop}>
              <ExitButton
                text={"Назад"}
                click={() => {
                  navigate(-1);
                }}
              />
            </div>
          )}
        </div>

        <div className={styles.textWrapper}>{children}</div>
      </div>
    </div>
  );
}
