import "./message.css";
import ButtonWithConfirmation from "../button/button-with-confirmation";
import { useDispatch } from "react-redux";
import { deleteMessage } from "../../data/message-reducer";

interface MessageProps {
  message: {
    text: string,
    author: string,
    date: number,
  },
  i: number,
}

export default function Message({ message, i }: MessageProps) {
  const dispatch = useDispatch();

  return <article className="message">
    <p className="message-text">{message.text}</p>
    <p className="message-details">{message.author}, {new Date(message.date).toLocaleString("ru-RU")}</p>
    <ButtonWithConfirmation
      className="message-delete"
      confirmationMessage="Вы действительно хотите удалить это сообщение?"
      onClick={() => { dispatch(deleteMessage({
        id: i,
      })) }}
    >Удалить</ButtonWithConfirmation>
  </article>;
}
