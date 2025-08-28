import "./button.css";
import type { PropsWithChildren } from "react";

interface ButtonProps extends PropsWithChildren {
  className?: string,
  type?: "button" | "submit" | "reset",
}

export default function Button({
  children,
  className = "",
  type = "button"
}: ButtonProps) {
  return <button className={`my-button ${className}`} type={type}>{children}</button>
};
