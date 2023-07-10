interface SearchBarProps {
  query: string;
  onQueryChange: Function;
}
function SearchBar(props: SearchBarProps) {
  return <input className="search" type="text" placeholder="Search movies..." value={props.query} onChange={(e) => props.onQueryChange(e.target.value)} />;
}
export default SearchBar;
