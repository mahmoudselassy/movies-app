interface ToggleButtonProps {
  handleIsOpen: Function;
  isOpen: boolean;
}
function ToggleButton(props: ToggleButtonProps) {
  return (
    <button className="btn-toggle" onClick={() => props.handleIsOpen(!props.isOpen)}>
      {props.isOpen ? "–" : "+"}
    </button>
  );
}
export default ToggleButton;
