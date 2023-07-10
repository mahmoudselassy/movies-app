interface ResultsNumberProps {
  value: number;
}
function ResultsNumber(props: ResultsNumberProps) {
  return (
    <p className="num-results">
      Found <strong>{props.value}</strong> results
    </p>
  );
}
export default ResultsNumber;
