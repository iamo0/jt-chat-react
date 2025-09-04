import LoginForm, { type LoginValues } from "../components/auth/LoginForm";
import RegisterForm, { type RegisterValues } from "../components/auth/RegisterForm";

export default function AuthPage() {
    async function handleLogin(values: LoginValues) {
        // вызов API
        console.log("login", values);
        alert("Логин отправлен (см. консоль)");
    }
    async function handleRegister(values: RegisterValues) {
        // вызов API
        console.log("register", values);
        alert("Регистрация отправлена (см. консоль)");
    }

    return (
        <div style={{ display: "grid", gap: 24, gridTemplateColumns: "1fr", maxWidth: 1024, margin: "0 auto", padding: 16 }}>
            <LoginForm onSubmit={handleLogin} />
            <RegisterForm onSubmit={handleRegister} />
        </div>
    );
}
