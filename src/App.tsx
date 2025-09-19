import "./App.css";

import MessageForm from "./components/message-form/message-form";
import Messages from "./components/messages/messages";
import ButtonWithConfirmation from "./components/button/button-with-confirmation";
import AuthGate from "./components/auth/AuthGate";
import Button from "./components/button/button.tsx";
import { Provider } from "react-redux";
import messageStore from "./data/store.ts";

function App() {
  return (
    <AuthGate
      render={({ isAuth, login, logout, user }) => (
        <>
          <header className="page-header">
            <h1 className="page-title">Online Chat</h1>

            {isAuth ? (
              <ButtonWithConfirmation
                className="page-header-logout"
                confirmationMessage="Вы действительно хотите выйти из чата?"
                onClick={() => {
                  logout();
                  alert("Выйдено из чата");
                }}
              >
                Sign out ({user?.username})
              </ButtonWithConfirmation>
            ) : (
              <Button
                className="page-header-login"
                onClick={() => {
                  login();
                  alert("Успешная авторизация");
                }}
              >
                Sign in
              </Button>
            )}
          </header>

          <main className="page-main">
            {isAuth ? (
              <Provider store={messageStore}>
                <Messages className="page-messages" />
                <div className="page-form">
                  <MessageForm />
                </div>
              </Provider>
            ) : (
              <h2 style={{
                fontWeight: "normal",
                marginTop: "2em",
                textAlign: "center",
              }}>Авторизуйтесь, пожалуйста</h2>
            )}
          </main>
        </>
      )}
    />
  );
}

export default App;
