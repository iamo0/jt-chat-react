import "./message-form.css";

import { useContext, type FormEvent } from "react";
import MessagesContext from "../../data/messages-context";
import Button from "../button/button";

export default function MessageForm() {
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
  }

  return <form className="message-form-container" onSubmit={handleFormSubmit}>
    <textarea name="message-text" id=""></textarea>
    <Button className="message-form-submit" type="submit">Отправить сообщение</Button>
  </form>;
};
