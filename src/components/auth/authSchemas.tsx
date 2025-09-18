import * as Yup from 'yup'

export const loginSchema = Yup.object({
  username: Yup.string()
    .trim()
    .required("Введите логин"),
  password: Yup.string()
    .required("Введите пароль"),
});

export const registerSchema = Yup.object({
  username: Yup.string()
    .trim()
    .min(3, "Минимум 3 символа")
    .max(24, "Максимум 24 символа")
    .matches(/^[a-zA-Z0-9_]+$/, "Только латиница, цифры и _")
    .required("Введите логин"),
  email: Yup.string()
    .email("Некорректный email")
    .required("Введите email"),
  password: Yup.string()
    .min(6, "Минимум 6 символов")
    .matches(/[0-9]/, "Пароль должен содержать цифру")
    .matches(/[a-z]/, "Нужна строчная буква")
    .matches(/[A-Z]/, "Нужна заглавная буква")
    .required("Введите пароль"),
  confirm: Yup.string()
    .oneOf([Yup.ref("password")], "Пароли не совпадают")
    .required("Подтвердите пароль"),
  accept: Yup.boolean()
    .oneOf([true], "Необходимо согласие с условиями"),
});
