import "./button.css";
import type { PropsWithChildren } from "react";

interface ButtonProps extends PropsWithChildren {
  className?: string,
  disabled?: boolean,
  type?: "button" | "submit" | "reset",
}

export default function Button({
  children,
  className = "",
  disabled = false,
  type = "button"
}: ButtonProps) {
  return <button
    className={`my-button ${className}`}
    disabled={disabled}
    type={type}
  >{children}</button>
};
