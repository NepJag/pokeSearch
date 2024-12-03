import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import "./SearchBar.css";

function SearchBar() {
    const [input, setInput] = useState<string>("");
    
    const fetchPokemon = async (pokemon: string) => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then((response) => response.json())
        .then((data) => console.log(data));
    }

    const handleChange = (value: string) => {
        setInput(value);
        fetchPokemon(value);
    }

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input placeholder="Search for Pokémon" 
      value={input} 
      onChange={(e) => handleChange(e.target.value)}/>
    </div>
  );
}

export default SearchBar;
