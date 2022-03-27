import { Link } from "react-router-dom";
import { generatePath } from "react-router";
import PokemonCard from "~/components/pokemon-list/PokemonCard";
import useLocalStorage from "~/hooks/useLocalStorage";
import { pokemonOwned } from "~/model/pokemon";

export default function Index() {
  const [pokemons] = useLocalStorage<pokemonOwned[]>("pokemonOwned", []);

  return (
    <div className="px-2 sm:px-20 lg:px-40 py-10 h-5/6">
      <h1 className="text-center mb-10 text-2xl">Pokemon Owned</h1>

      <div className="h-5/6 pokemon-lists bg-base-100 overflow-scroll">
        {pokemons
          .map((item) => {
            const { id } = item;
            return (
              <Link key={id} to={generatePath("/pokemon/:id/stats", { id })}>
                <PokemonCard {...item} />
              </Link>
            );
          })}
      </div>
    </div>
  );
}
