import classNames from "classnames";
import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "remix";
import { generatePath, useLocation } from "react-router";
import { pokemonDetail, pokemonDetailTab } from "~/model/pokemon";
import { fetchPokemonDetail } from "~/services/pokemon-service";
import useLocalStorage from "~/hooks/useLocalStorage";
import Loader from "~/components/common/Loader";
import PokemonDetailComponent from "~/components/pokemon-detail/PokemonDetailComponent";

export default function PokemonDetail() {
  const [pokemon, setPokemon] = useLocalStorage<pokemonDetail>(
    "pokemon",
    {} as pokemonDetail
  );
  const [isDataFetching, setIsDataFetching] = useState(false);
  const { id } = useParams();
  const locationHash = useLocation().pathname.split("/").pop();

  const detailTabs: pokemonDetailTab[] = [
    { name: "stats", path: generatePath("/pokemon/:id/stats", { id }) },
    { name: "moves", path: generatePath("/pokemon/:id/moves", { id }) },
  ];

  const defaultTabClassName =
    "w-32 sm:w-40 tab sm:tab-lg tab-lifted text-xl sm:text-2xl bg-secondary text-white font-black";

  useEffect(() => {
    setIsDataFetching(true);
    fetchPokemonDetail(id!).then((res) => {
      setPokemon(res.data);
      setIsDataFetching(false);
    });
  }, []);

  const { name, weight, height, base_experience, sprites, types, stats, moves } = pokemon;
  const PokemonDetailComponentProps = {
    id, name, weight, height, base_experience, sprites, types, stats, moves
  }

  return (
    <>
      {isDataFetching ? (
        <Loader />
      ) : (
        <div className="pt-6">
          <PokemonDetailComponent {...PokemonDetailComponentProps} />
          <div className="px-4 sm:px-10 lg:px-20 tabs">
            {detailTabs.map((tab) => {
              const match = locationHash?.localeCompare(tab.name);
              return (
                <Link
                  className={classNames(defaultTabClassName, {
                    "tab-active text-neutral": !match,
                  })}
                  key={tab.name}
                  to={tab.path}
                >
                  {tab.name}
                </Link>
              );
            })}
          </div>
          <div className="h-96 p-10 sm:px-20 lg:px-40 xl:px-64 flex flex-wrap bg-white ">
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
}
