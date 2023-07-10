import { useState } from "react";
import BoxContainer from "./UI/BoxContainer";
import ToggleButton from "./UI/ToggleButton";

function WatchedMoviesBox(props: any) {
  const [isOpen, setIsOpen] = useState(true);
  const handleIsOpen = (isOpen: boolean) => setIsOpen(isOpen);
  return (
    <BoxContainer>
      <ToggleButton isOpen={isOpen} handleIsOpen={handleIsOpen} />
      {isOpen && props.children}
    </BoxContainer>
  );
}
export default WatchedMoviesBox;
