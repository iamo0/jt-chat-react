import { useState } from "react";
import { useSelector } from "react-redux";
import type { StoreState } from "../../data/store";

export default function Counter () {
  const messages = useSelector((state: StoreState) => state.messageLayer.messages);
  const [isCollapsed, setIsCollapsed] = useState(false);

  function handleClick() {
    setIsCollapsed(!isCollapsed);
  }

  return <div onClick={handleClick} style={{
    background: "rgba(0, 0, 0, 0.4)",
    borderRadius: "10px",
    color: "#fff",
    cursor: "pointer",
    left: "50%",
    transform: "translateX(-50%)",
    marginTop: "1em",
    padding: "0.5em 1em",
    position: "fixed",
    textAlign: "center",
    zIndex: "1",
  }}>{
    isCollapsed
      ? `...`
      : `Всего сообщений: ${messages.length}`
  }</div>;
};
