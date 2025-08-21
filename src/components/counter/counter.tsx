import { useContext, useState } from "react";
import MessagesContext from "../../data/messages-context";

export default function Counter () {
  const messagesContextVal = useContext(MessagesContext);
  const [isCollapsed, setIsCollapsed] = useState(false);

  if (messagesContextVal === null) {
    return <></>;
  }

  const [messages] = messagesContextVal;

  function handleClick() {
    setIsCollapsed(!isCollapsed);
  }

  return <div onClick={handleClick} style={{
    background: "rgba(0, 0, 0, 0.3)",
    borderRadius: "10px",
    cursor: "pointer",
    left: "50%",
    transform: "translateX(-50%)",
    marginTop: "1em",
    padding: "0.5em 1em",
    position: "fixed",
    textAlign: "center",
  }}>{
    isCollapsed
      ? `...`
      : `Всего сообщений: ${messages.length}`
  }</div>;
};
