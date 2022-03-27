import { FC, ReactElement } from "react";
import { v4 as uuid } from 'uuid';
import { pokemonOwned } from "~/model/pokemon";
import TypeComponent from "../common/TypeComponent";

const PokemonCard: FC<pokemonOwned> = (props): ReactElement => {
  const { id, name, types } = props;
  return (
    <div className="card card-compact flex-row items-stretch bg-base-100 shadow-xl rounded-none flex flex-wrap border">
      <div className="basis-2/6 border-r-2">
        <figure>
          <img
            className="w-full h-full sm:w-40 sm:h-40 object-cover"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
            alt="Album"
          />
        </figure>
      </div>
      <div className="basis-4/6 scard-body p-2 sm:p-4">
        <h2 className="card-title text-3xl">{name}</h2>
        <div className="mt-12 sm:mt-12">
          {types?.map((item) => (
            <TypeComponent
              key={uuid()}
              type={item.type.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
