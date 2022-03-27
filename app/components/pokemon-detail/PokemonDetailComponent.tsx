import { FC } from "react";
import { v4 as uuid } from 'uuid';
import { normalizeString } from "~/helpers/helper";
import { pokemonDetail } from "~/model/pokemon";
import TypeComponent from "../common/TypeComponent";
import AddToCollectionBtn from "./AddToCollectionBtn";

const PokemonDetailComponent: FC<pokemonDetail> = (props) => {
  const { id, name, weight, height, base_experience, sprites, types } = props;
  const addToCollectionBtnProps = {
    id,
    name,
    types,
  };
  return (
    <div className="p-6 sm:mx-10 lg:mx-20 my-6 flex flex-wrap bg-base-content bg-opacity-50 text-white">
      <div className="basis-full flex flex-wrap">
        <div className="basis-3/6 sm:basis-4/6 lg:basis-5/6 pb-6 text-4xl">
          {normalizeString(name)}
        </div>
        <div className="basis-3/6 sm:basis-2/6 lg:basis-1/6">
          <AddToCollectionBtn {...addToCollectionBtnProps} />
        </div>
      </div>
      <div className="basis-full flex flex-wrap">
        <div className="basis-full sm:basis-2/6">
          <img
            src={sprites?.front_default}
            className="w-48 h-48 mx-auto sm:mx-0 sm:w-full sm:h-full lg:w-72 lg:h-72 object-cover bg-white"
            alt="pokemon_image"
          />
        </div>
        <div className="basis-full mt-8 sm:basis-4/6 text-lg flex flex-wrap px-10">
          <div className="basis-full">
            types:
            {types?.map((item) => (
              <TypeComponent
                key={uuid()}
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
    </div>
  );
};

export default PokemonDetailComponent;
