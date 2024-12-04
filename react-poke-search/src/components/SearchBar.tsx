import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import "./SearchBar.css";

/**
 * SearchBar component for searching Pokémon.
 * @param {Function} setResults - Function to set the search results.
 * @returns {React.JSX.Element} The rendered SearchBar component.
 */
function SearchBar({ setResults }: { setResults: any }): React.JSX.Element {
  const [input, setInput] = useState<string>("");

  /**
   * Fetches a Pokémon from the PokeAPI.
   * @param {string} pokemon - The Pokémon to fetch.
   */
  const fetchPokemon = async (pokemon: string) => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error("Fetch error:", error);
      setResults("Not found");
    }
  };

  return (
    <div className="input-wrapper">
      <input
        placeholder="Buscar un Pokémon"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            fetchPokemon(input);
          }
        }}
      />
      <button onClick={() => fetchPokemon(input)}>
        <FaSearch id="search-icon" />
      </button>
    </div>
  );
}

export default SearchBar;
