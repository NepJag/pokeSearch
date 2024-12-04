import "./App.css";
import SearchBar from "./components/SearchBar";
import { useState } from "react";
import SearchResults from "./components/SearchResults";

/**
 * App component for the Pokémon search app.
 * @returns {React.JSX.Element} The rendered App component.
 */
function App(): React.JSX.Element {
  const [results, setResults] = useState<any>(null);

  return (
    <div className="App">
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        <SearchResults results={results} />
      </div>
    </div>
  );
}

export default App;
