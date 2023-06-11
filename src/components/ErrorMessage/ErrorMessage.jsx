import { Message,  } from "./ErrorMessage.styled";

const ErrorMessage = ({children}) => {
    return <Message>{children}</Message>;
} 

export default ErrorMessage;