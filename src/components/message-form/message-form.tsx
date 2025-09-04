import "./message-form.css";

import { useState, type ChangeEvent, type FormEvent } from "react";
import Button from "../button/button";
import { useDispatch } from "react-redux";
import { createMessage } from "../../data/message-reducer";

export default function MessageForm() {
  const [currentMessage, setCurrentMessage] = useState("");
  const dispatch = useDispatch();

  function handleFormSubmit(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();

    const form = evt.target as HTMLFormElement;
    const formData = new FormData(form);

    dispatch(createMessage({
      text: formData.get("message-text") as string,
    }));

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
