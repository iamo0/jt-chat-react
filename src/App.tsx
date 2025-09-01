// import "./App.css";
// import { useReducer } from "react";
// import MessageForm from "./components/message-form/message-form";
// import Messages from "./components/messages/messages";
// import MessagesContext, { initialMessages, messagesReducer } from "./data/messages-context";
// import ButtonWithConfirmation from "./components/button/button-with-confirmation";
// import AuthGate from "./components/auth/AuthGate";
// import Button from "./components/button/button.tsx";
//
// function App() {
//     const [messages, dispatch] = useReducer(messagesReducer, initialMessages);
//
//     return (
//         <AuthGate
//             render={({ isAuth, login, logout, user }) => (
//                 <>
//                     <header className="page-header">
//                         <h1 className="page-title">Online Chat</h1>
//
//                         {isAuth ? (
//                             <ButtonWithConfirmation
//                                 className="page-header-logout"
//                                 confirmationMessage="Вы действительно хотите выйти из чата?"
//                                 onClick={() => {
//                                     logout();
//                                     alert("Выйдено из чата");
//                                 }}
//                             >
//                                 Sign out ({user?.username})
//                             </ButtonWithConfirmation>
//                         ) : (
//                             <Button
//                                 className="page-header-login"
//                                 onClick={() => {
//                                     login();
//                                     alert("Успешная авторизация");
//                                 }}
//                             >
//                                 Sign in
//                             </Button>
//                         )}
//                     </header>
//
//                     <main className="page-main">
//                         {isAuth ? (
//                             <MessagesContext.Provider value={[messages, dispatch]}>
//                                 <Messages className="page-messages" />
//                                 <div className="page-form">
//                                     <MessageForm />
//                                 </div>
//                             </MessagesContext.Provider>
//                         ) : (
//                             <h2>Авторизуйтесь, пожалуйста</h2>
//                         )}
//                     </main>
//                 </>
//             )}
//         />
//     );
// }
//
// export default App;

// С хуком
// import "./App.css";
// import { useReducer } from "react";
// import MessageForm from "./components/message-form/message-form";
// import Messages from "./components/messages/messages";
// import MessagesContext, { initialMessages, messagesReducer } from "./data/messages-context";
// import ButtonWithConfirmation from "./components/button/button-with-confirmation";
// import {useAuth} from "./hooks/useAuth.ts";
// import Button from "./components/button/button.tsx";
//
// function App() {
//     const [messages, dispatch] = useReducer(messagesReducer, initialMessages);
//     const { isAuth, user, logout, login } = useAuth()
//
//     return <>
//         <header className="page-header">
//             <h1 className="page-title">Online Chat</h1>
//             {
//                 isAuth ? (
//                     <ButtonWithConfirmation
//                         className="page-header-logout"
//                         confirmationMessage="Вы действительно хотите выйти из чата?"
//                         onClick={() => {
//                             logout();
//                             alert("Выйдено из чата");
//                         }}
//                     >
//                         Sign out ({user?.username})
//                     </ButtonWithConfirmation>
//                 ) : (
//                     <Button
//                         className="page-header-login"
//                         onClick={() => {
//                             login();
//                             alert("Успешная авторизация");
//                         }}
//                     >
//                         Sign in
//                     </Button>
//                 )
//             }
//         </header>
//         <main className="page-main">
//             {
//                 isAuth && (
//                     <MessagesContext.Provider value={[messages, dispatch]}>
//                         <Messages className="page-messages" />
//                         <div className="page-form">
//                             <MessageForm />
//                         </div>
//                     </MessagesContext.Provider>
//                 )
//             }
//         </main>
//     </>;
// }
//
// export default App


// АВТОРЗАЦИЯ
import "./App.css";
import './form.css'
import AuthPage from "./pages/AuthPage.tsx";

function App() {
    return <AuthPage />
}

export default App
