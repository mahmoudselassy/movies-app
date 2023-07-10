import { ReactNode } from "react";

interface BoxContainerProps {
  children: ReactNode;
}
function BoxContainer(props: BoxContainerProps) {
  return <div className="box">{props.children}</div>;
}
export default BoxContainer;
