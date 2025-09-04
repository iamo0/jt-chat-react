import "./messages.css";
import Message from "../message/message";
import Counter from "../counter/counter";
import { useSelector } from "react-redux";
import type { StoreState } from "../../data/messages-store";

interface MessagesProps {
  className: string,
}

export default function Messages({ className }: MessagesProps) {
  const messages = useSelector((state: StoreState) => state.messages);

  return <>
    <Counter />
    <section className={`${className} messages`}>
      {messages.map((m, i) => <Message message={m} key={`message-${i}`} />)}
    </section>
  </>;
}
