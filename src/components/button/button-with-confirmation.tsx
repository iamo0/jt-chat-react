import withConfirmation from "../../hocs/with-confirmation";
import Button, { type ButtonProps } from "./button";

const ButtonWithConfirmation = withConfirmation<ButtonProps>(Button);
export default ButtonWithConfirmation;
