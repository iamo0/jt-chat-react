import { useReducer } from "react";
import MessageForm from "./components/message-form/message-form";
import Messages from "./components/messages/messages";
import MessagesContext, { initialMessages, messagesReducer } from "./data/messages-context";

import "./App.css";

function App() {
  const [messages, dispatch] = useReducer(messagesReducer, initialMessages);

  return <>
    <header className="page-header">
      <h1 className="page-title">Online Chat</h1>
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
