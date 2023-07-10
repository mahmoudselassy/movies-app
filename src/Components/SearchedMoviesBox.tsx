import { ReactNode, useState } from "react";
import BoxContainer from "./UI/BoxContainer";
import ToggleButton from "./UI/ToggleButton";
interface SearchedMoviesBoxProps {
  children: ReactNode;
}
function SearchedMoviesBox(props: SearchedMoviesBoxProps) {
  const [isOpen, setIsOpen] = useState(true);
  const handleIsOpen1 = (isOpen: boolean) => setIsOpen(isOpen);

  return (
    <BoxContainer>
      <ToggleButton isOpen={isOpen} handleIsOpen={handleIsOpen1} />
      {isOpen && props.children}
    </BoxContainer>
  );
}
export default SearchedMoviesBox;
