import "./button.css";
import type { MouseEventHandler, PropsWithChildren } from "react";

export interface ButtonProps extends PropsWithChildren {
  className?: string,
  disabled?: boolean,
  onClick?: MouseEventHandler,
  type?: "button" | "submit" | "reset",
}

export default function Button({
  children,
  className = "",
  disabled = false,
  onClick = () => {},
  type = "button",
}: ButtonProps) {
  return <button
    className={`my-button ${className}`}
    disabled={disabled}
    onClick={onClick}
    type={type}
  >{children}</button>
};
