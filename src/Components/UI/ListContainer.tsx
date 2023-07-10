import { ReactNode } from "react";

interface ListContainerProps {
  children: ReactNode;
}
function ListContainer(props: ListContainerProps) {
  return <ul className="list list-movies">{props.children}</ul>;
}
export default ListContainer;
