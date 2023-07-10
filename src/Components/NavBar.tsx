import { ReactNode } from "react";
import Logo from "./UI/Logo";
interface NavBarProps {
  children: ReactNode;
}
function NavBar(props: NavBarProps) {
  return (
    <nav className="nav-bar">
      <Logo />
      {props.children}
    </nav>
  );
}
export { NavBar };
