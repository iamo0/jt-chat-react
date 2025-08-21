import "./messages.css";
import Message from "../message/message";
import Counter from "../counter/counter";
import { useContext } from "react";
import MessagesContext from "../../data/messages-context";

interface MessagesProps {
  className: string,
}

export default function Messages({ className }: MessagesProps) {
  const messagesData = useContext(MessagesContext);

  if (messagesData === null) {
    return <></>;
  }

  const [messages] = messagesData;

  return <>
    <Counter />
    <section className={`${className} messages`}>
      {messages.map((m, i) => <Message message={m} key={`message-${i}`} />)}
    </section>
  </>;
}
