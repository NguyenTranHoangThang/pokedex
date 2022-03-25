import classNames from "classnames";
import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "remix";
import { generatePath, useLocation } from "react-router";
import Type from "~/components/Type";
import { pokemonDetail, pokemonDetailTab } from "~/model/pokemon";
import { fetchPokemonDetail } from "~/services/pokemon-service";
import { normalizePokemonName } from "~/helpers/helper";
import useLocalStorage from "~/hooks/useLocalStorage";

export default function PokemonDetail() {
  const [pokemon, setPokemon] = useLocalStorage<pokemonDetail>("pokemon", {} as pokemonDetail);
  const [isDataFetching, setIsDataFetching] = useState(false);
  const { id } = useParams();
  const locationHash = useLocation().pathname.split('/').pop();

  const detailTabs: pokemonDetailTab[] = [
    { name: "stats", path: generatePath("/pokemon/:id/stats", { id }) },
    { name: "moves", path: generatePath("/pokemon/:id/moves", { id }) },
  ];

  const defaultTabClassName =
    "tab tab-lg tab-lifted text-2xl w-40 font-black bg-secondary text-white";

  useEffect(() => {
    setIsDataFetching(true);
    fetchPokemonDetail(id!).then((res) => {
      setPokemon(res.data);
      setIsDataFetching(false);
    });
  }, []);

  const { name, weight, height, base_experience, sprites, types } = pokemon;

  return (
    <>
      {isDataFetching ? (
        <h1>loader</h1>
      ) : (
        <div className="pt-6">
          <div className="flex flex-wrap bg-base-content bg-opacity-50 text-white p-6 mx-20 mb-6">
            <div className="basis-full text-4xl pb-2">
              {normalizePokemonName(name)}
            </div>
            <div>
              <img
                src={sprites?.front_default}
                className="w-72 h-72 object-cover bg-white"
                alt="pokemon_image"
              />
            </div>
            <div className="text-base flex flex-wrap px-10">
              <div className="basis-full">
                types:
                {types?.map((item) => (
                  <Type
                    key={item.type.name.concat(id!)}
                    type={item.type.name}
                  />
                ))}
              </div>
              <div className="basis-full">
                Weight: <span className="font-bold">{+weight / 10}</span> Kg
              </div>
              <div className="basis-full">
                Height: <span className="font-bold">{+height / 10}</span> m
              </div>
              <div className="basis-full">
                Base experience:{" "}
                <span className="font-bold">{base_experience}</span> exp
              </div>
            </div>
          </div>
          <div className="tabs px-44">
            {detailTabs.map((tab) => {
              const match = locationHash?.localeCompare(tab.name);
              console.log(locationHash)
              return (
                <Link
                  className={classNames(defaultTabClassName, {
                    "tab-active text-neutral": !match,
                  })}
                  key={id}
                  to={tab.path}
                >
                  {tab.name}
                </Link>
              );
            })}
          </div>
          <Outlet />
        </div>
      )}
    </>
  );
}
