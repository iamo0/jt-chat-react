import "./messages.css";
import Message from "../message/message";
import Counter from "../counter/counter";
import { useSelector } from "react-redux";

interface MessagesProps {
  className: string,
}

export default function Messages({ className }: MessagesProps) {
  const messages = useSelector((state) => state.messages);
  console.log(messages);

  return <>
    <Counter />
    <section className={`${className} messages`}>
      {messages.map((m, i) => <Message message={m} key={`message-${i}`} />)}
    </section>
  </>;
}
