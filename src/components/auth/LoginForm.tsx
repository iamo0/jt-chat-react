import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export type LoginValues = { username: string; password: string };

const loginSchema = Yup.object({
  username: Yup.string().trim().required("Введите логин"),
  password: Yup.string().required("Введите пароль"),
});

type Props = {
  onSubmit: (values: LoginValues) => Promise<void> | void;
  initialUsername?: string;
};

export default function LoginFormikBasic({ onSubmit, initialUsername = "" }: Props) {
  return (
    <div className="fx-card">
      <h2 className="fx-title">Вход</h2>

      <Formik<LoginValues>
        initialValues={{ username: initialUsername, password: "" }}
        validationSchema={loginSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, isValid, dirty }) => (
          <Form className="fx-form" noValidate>
            <label className="fx-label" htmlFor="username">Логин</label>
            <Field
              id="username"
              name="username"
              className="fx-input"
              placeholder="username"
              autoComplete="username"
            />
            <ErrorMessage name="username" component="div" className="fx-error" />

            <label className="fx-label" htmlFor="password">Пароль</label>
            <Field
              id="password"
              name="password"
              type="password"
              className="fx-input"
              placeholder="••••••"
              autoComplete="current-password"
            />
            <ErrorMessage name="password" component="div" className="fx-error" />

            <button
              className="fx-btn"
              type="submit"
              disabled={isSubmitting || !isValid || !dirty}
            >
              Войти
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
