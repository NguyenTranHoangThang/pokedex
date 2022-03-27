import { ReactElement, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { getPokemonDetailLink, normalizeString } from "~/helpers/helper";
import useDebounce from "~/hooks/UseDebounce";
import useLocalStorage from "~/hooks/useLocalStorage";
import { ResourceObject } from "~/model/pokemon";
import { fetchPokemonList } from "~/services/pokemon-service";

const SearchBarComponent = (): ReactElement => {
  const [searchQuery, setSearchQuery] = useState("");
  const [pokemonList, setPokemonList] = useLocalStorage<ResourceObject[]>(
    "pokemonList",
    []
  );
  const [sugguestPokemonList, setSugguestPokemonList] = useState<
    ResourceObject[]
  >([]);
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
    if (!pokemonList.length) {
      fetchPokemonList().then(function (response) {
        setPokemonList(response.data.results);
      });
    }
  }, []);

  return (
    <div className="basis-1/2">
      <input
        type="text"
        placeholder="Search for Pokemon"
        className="w-full input input-bordered input-md"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      ></input>
      <ul className="absolute z-10 w-2/4 bg-white">
        {sugguestPokemonList.map((pokemon) => {
          return (
            <li key={uuid()} className="m-6 bg-white">
              <a href={getPokemonDetailLink(pokemon.url)}>
                {normalizeString(pokemon.name)}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SearchBarComponent;
