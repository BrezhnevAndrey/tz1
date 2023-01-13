import { ErrorMessage, Form, Formik } from "formik";
import React, { useRef } from "react";
import styles from "./authorization.less";
import { Input } from "./Input/Input";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Authorization() {
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .required("Введите имя")
      .min(2, "Имя должно состоять минимум из 2 симвовлов")
      .max(30, "Имя не должно превышать 30 символов"),
    email: Yup.string()
      .email("Неверный формат e-mail")
      .required("Введите e-mail"),
    password: Yup.string()
      .required("Введите пароль")
      .min(5, "Имя должно состоять минимум из 5 симвовлов"),
    confirmPassword: Yup.string()
      .required("Подтвердите пароль")
      .oneOf([Yup.ref("password"), null], "Пароль отличается")
      .min(5, "Имя должно состоять минимум из 5 симвовлов"),
  });

  return (
    <div className={styles.section}>
      <div ref={ref} className={styles.container}>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          initialTouched={{
            name: false,
            email: false,
            password: false,
            confirmPassword: false,
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            axios
              .post("https://reqres.in/api/register", {
                email: "eve.holt@reqres.in",
                password: "pistol",
              })
              .then((resp) => {
                localStorage.setItem("token", resp.data.token);
              });
            navigate("/page");
          }}
        >
          {({ errors, touched }) => {
            return (
              <Form className={styles.form}>
                <h3 className={styles.title}>Регистрация</h3>

                <div className={styles.wrapper}>
                  <Input
                    type={"text"}
                    name={"name"}
                    labelText={"Имя"}
                    invalid={errors.name && touched.name ? true : false}
                  />
                  <ErrorMessage
                    name="name"
                    component={"div"}
                    className={styles.errorMessage}
                  />
                </div>

                <div className={styles.wrapper}>
                  <Input
                    type={"email"}
                    name={"email"}
                    labelText={"Электронная почта"}
                    invalid={errors.email && touched.email ? true : false}
                  />
                  <ErrorMessage
                    name="email"
                    component={"div"}
                    className={styles.errorMessage}
                  />
                </div>

                <div className={styles.wrapper}>
                  <Input
                    type={"password"}
                    name={"password"}
                    labelText={"Пароль"}
                    invalid={errors.password && touched.password ? true : false}
                  />
                  <ErrorMessage
                    name="password"
                    component={"div"}
                    className={styles.errorMessage}
                  />
                </div>

                <div className={styles.wrapper}>
                  <Input
                    type={"password"}
                    name={"confirmPassword"}
                    labelText={"Подтвердите пароль"}
                    invalid={
                      errors.confirmPassword && touched.confirmPassword
                        ? true
                        : false
                    }
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component={"div"}
                    className={styles.errorMessage}
                  />
                </div>

                <input
                  type="submit"
                  value="Зарегистрироваться"
                  className={styles.button}
                />
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}
