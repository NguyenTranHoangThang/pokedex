import { useEffect, useState } from "react";
import { getPokemonDetailLink, normalizePokemonName } from "~/helpers/helper";
import useLocalStorage from "~/hooks/useLocalStorage";
import { fetchPokemonList } from "~/services/pokemon-service";
import useDebounce from "../hooks/UseDebounce";

export interface PokemonUrl {
  name: string;
  url: string;
}
const SearchBarComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [pokemonList, setPokemonList] = useLocalStorage<PokemonUrl[]>("pokemonList", []);
  const [sugguestPokemonList, setSugguestPokemonList] = useState<PokemonUrl[]>(
    []
  );
  const debouncedSearchTerm = useDebounce(searchQuery, 1000);

  useEffect(() => {
    const handleSearch = (query: string) => {
      const tempSugguestList = query
        ? pokemonList
            .filter((pokemon) => pokemon.name.includes(query))
            .slice(0, 5)
        : [];
      setSugguestPokemonList(tempSugguestList);
    };
    debouncedSearchTerm ? handleSearch(debouncedSearchTerm) : handleSearch("");
  }, [debouncedSearchTerm]);
  useEffect(() => {
    if(!pokemonList.length) {
      fetchPokemonList().then(function (response) {
        setPokemonList(response.data.results);
      });
    }
    
  }, []);


  return (
    <div className="basis-1/2">
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered input-md w-full p-6 m-4 mb-0"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      ></input>
      <ul className="absolute w-2/4 mx-12 bg-white z-10">
        {sugguestPokemonList.map((pokemon) => {
          return (
            <li key={pokemon.name} className="m-6 bg-white">
              <a href={getPokemonDetailLink(pokemon.url)}>{normalizePokemonName(pokemon.name)}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SearchBarComponent;
