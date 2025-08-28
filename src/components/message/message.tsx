import "./message.css";
import ButtonWithConfirmation from "../button/button-with-confirmation";

interface MessageProps {
  message: {
    text: string,
    author: string,
    date: number,
  }
}

export default function Message({ message }: MessageProps) {
  return <article className="message">
    <p className="message-text">{message.text}</p>
    <p className="message-details">{message.author}, {new Date(message.date).toLocaleString("ru-RU")}</p>
    <ButtonWithConfirmation
      className="message-delete"
      confirmationMessage="Вы действительно хотите удалить это сообщение?"
      onClick={() => { alert("Cообщение удалено") }}
    >Удалить</ButtonWithConfirmation>
  </article>;
}
