import { ReactElement, useEffect, useState } from "react";
import useLocalStorage from "~/hooks/useLocalStorage";
import { pokemonOwned } from "~/model/pokemon";

const AddToCollectionBtn = (props: pokemonOwned): ReactElement => {
  const [pokemons, setPokemons] = useLocalStorage<pokemonOwned[]>("pokemonOwned", []);
  const [isOwned, setIsOwned] = useState(false);
  const alreadyOwned = pokemons.find(pokemon => pokemon.id == props.id?.toString());

  useEffect(() => {
    if (alreadyOwned) {
      setIsOwned(true)
    }
  }, [])

  const handleClick = () => {
    if (alreadyOwned) {
      const tempPokemonList = pokemons.filter(pokemon => pokemon.id !== props.id);
      setIsOwned(false);
      setPokemons(tempPokemonList);
    }
    else {
      setIsOwned(true);
      setPokemons([...pokemons, props]);
    }
  }
  return (
    <button className="btn btn-active btn-secondary" onClick={handleClick}>{`${!isOwned ? 'Add to' : 'Remove from'} collection`}</button>
  );
};

export default AddToCollectionBtn;
