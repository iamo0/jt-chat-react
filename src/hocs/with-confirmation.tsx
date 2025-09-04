import {
  type ComponentType,
  type MouseEvent,
  type MouseEventHandler,
  type PropsWithChildren
} from "react";

type ConfirmationProps = {
  confirmationMessage?: string,
  onClick?: MouseEventHandler,
};

export default function withConfirmation<P>(Component: ComponentType<P>) {
  return function WrappedComponent(props: P & ConfirmationProps & PropsWithChildren) {
    const { children, confirmationMessage, onClick, ...rest } = props;
    const propsToPass = rest as P;

    function handleClick(evt: MouseEvent) {
      if (confirmationMessage && !confirm(confirmationMessage)) {
        evt.preventDefault();
        return;
      }

      if (onClick !== undefined) {
        onClick(evt);
      }
    }

    return <Component onClick={handleClick} {...propsToPass}>{children}</Component>
  }
}
