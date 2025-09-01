import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export type RegisterValues = {
    username: string;
    email: string;
    password: string;
    confirm: string;
    accept: boolean;
};

const registerSchema = Yup.object({
    username: Yup.string()
        .trim()
        .min(3, "Минимум 3 символа")
        .max(24, "Максимум 24 символа")
        .matches(/^[a-zA-Z0-9_]+$/, "Только латиница, цифры и _")
        .required("Введите логин"),
    email: Yup.string().email("Некорректный email").required("Введите email"),
    password: Yup.string()
        .min(6, "Минимум 6 символов")
        .matches(/[0-9]/, "Нужна цифра")
        .matches(/[a-z]/, "Нужна строчная буква")
        .matches(/[A-Z]/, "Нужна заглавная буква")
        .required("Введите пароль"),
    confirm: Yup.string()
        .oneOf([Yup.ref("password")], "Пароли не совпадают")
        .required("Подтвердите пароль"),
    accept: Yup.boolean().oneOf([true], "Необходимо согласие"),
});

type Props = {
    onSubmit: (values: RegisterValues) => Promise<void> | void;
};

export default function RegisterFormikBasic({ onSubmit }: Props) {
    return (
        <div className="fx-card">
            <h2 className="fx-title">Регистрация</h2>

            <Formik<RegisterValues>
                initialValues={{ username: "", email: "", password: "", confirm: "", accept: false }}
                validationSchema={registerSchema}
                onSubmit={onSubmit}
            >
                {({ isSubmitting, isValid, dirty }) => (
                    <Form className="fx-form" noValidate>
                        <label className="fx-label" htmlFor="reg-username">Логин</label>
                        <Field id="reg-username" name="username" className="fx-input" placeholder="username" />
                        <ErrorMessage name="username" component="div" className="fx-error" />

                        <label className="fx-label" htmlFor="reg-email">Email</label>
                        <Field id="reg-email" name="email" type="email" className="fx-input" placeholder="you@example.com" />
                        <ErrorMessage name="email" component="div" className="fx-error" />

                        <label className="fx-label" htmlFor="reg-password">Пароль</label>
                        <Field id="reg-password" name="password" type="password" className="fx-input" placeholder="Минимум 6 символов" />
                        <ErrorMessage name="password" component="div" className="fx-error" />

                        <label className="fx-label" htmlFor="reg-confirm">Повтор пароля</label>
                        <Field id="reg-confirm" name="confirm" type="password" className="fx-input" placeholder="Повторите пароль" />
                        <ErrorMessage name="confirm" component="div" className="fx-error" />

                        <label className="fx-checkbox">
                            <Field type="checkbox" name="accept" />
                            <span>Я принимаю условия использования</span>
                        </label>
                        <ErrorMessage name="accept" component="div" className="fx-error" />

                        <button
                            className="fx-btn"
                            type="submit"
                            disabled={isSubmitting || !isValid || !dirty}
                        >
                            Создать аккаунт
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
