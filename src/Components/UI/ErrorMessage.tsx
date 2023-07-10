interface ErrorMessageProps {
  message: string;
}
function ErrorMessage(props: ErrorMessageProps) {
  return <p className="error">{props.message}</p>;
}
export default ErrorMessage;
