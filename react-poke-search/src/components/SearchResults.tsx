import "./SearchResults.css";

/**
 * SearchResults component for displaying the search results.
 * @param {Object} results - The search results.
 * @returns {React.JSX.Element} The rendered SearchResults component.
 */
function SearchResults({ results }: { results: any }): React.JSX.Element {
  if (results === "Not found") {
    return <div className="not-found">Pokémon no encontrado</div>;
  } else {
    return (
      results && (
        <div className="search-results">
          <h2>
            {results.name} #{results.id}
          </h2>
          <img src={results.sprites.front_default} alt={results.name} />
          <p>Height: {results.height}</p>
          <p>Weight: {results.weight}</p>
          <div className="pokemon-types">
            Tipo(s):
            {results.types.map((result: any) => {
              return <p key={result.type.url}>{result.type.name}</p>;
            })}
          </div>
        </div>
      )
    );
  }
}

export default SearchResults;
