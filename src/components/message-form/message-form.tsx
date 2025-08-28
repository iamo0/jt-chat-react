import "./message-form.css";

import { useContext, useState, type ChangeEvent, type FormEvent } from "react";
import MessagesContext from "../../data/messages-context";
import Button from "../button/button";

export default function MessageForm() {
  const [currentMessage, setCurrentMessage] = useState("");
  const messagesContextData = useContext(MessagesContext);

  if (messagesContextData === null) {
    return <></>;
  }

  const [, dispatch] = messagesContextData;

  function handleFormSubmit(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();

    const form = evt.target as HTMLFormElement;
    const formData = new FormData(form);

    dispatch({
      type: "CREATE",
      payload: {
        author: "me",
        text: formData.get("message-text") as string,
      },
    });

    form.reset();
    setCurrentMessage("");
  }

  function handleMessageChange(evt: ChangeEvent<HTMLTextAreaElement>) {
    setCurrentMessage(evt.target.value);
  }

  return <form className="message-form-container" onSubmit={handleFormSubmit}>
    <textarea
      value={currentMessage}
      id=""
      name="message-text"
      onChange={handleMessageChange}
    ></textarea>
    <Button
      className="message-form-submit"
      disabled={currentMessage.trim() === ""}
      type="submit"
    >Отправить сообщение</Button>
  </form>;
};
