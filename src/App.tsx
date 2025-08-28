import "./App.css";
import { useReducer } from "react";
import MessageForm from "./components/message-form/message-form";
import Messages from "./components/messages/messages";
import MessagesContext, { initialMessages, messagesReducer } from "./data/messages-context";
import ButtonWithConfirmation from "./components/button/button-with-confirmation";

function App() {
  const [messages, dispatch] = useReducer(messagesReducer, initialMessages);

  return <>
    <header className="page-header">
      <h1 className="page-title">Online Chat</h1>
      <ButtonWithConfirmation
        className="page-header-logout"
        confirmationMessage="Вы действительно хотите выйти из чата?"
        onClick={() => { alert("Выйдено из чата"); }}
      >Log out</ButtonWithConfirmation>
    </header>
    <main className="page-main">
      <MessagesContext.Provider value={[messages, dispatch]}>
        <Messages className="page-messages" />
        <div className="page-form">
          <MessageForm />
        </div>
      </MessagesContext.Provider>
    </main>
  </>;
}

export default App
