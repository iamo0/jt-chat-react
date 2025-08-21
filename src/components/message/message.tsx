import "./message.css";

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
  </article>;
}
