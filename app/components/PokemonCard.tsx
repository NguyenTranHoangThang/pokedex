import { FC } from "react";

interface PokemonCardProps {
    id: string;
    name: string;
}
const PokemonCard: FC<PokemonCardProps> = (props) => {
    const { id, name } = props;
  return (
    <div className="card card-compact lg:card-side bg-base-100 shadow-xl rounded-none">
      <figure>
        <img
          className="h-44 w-44 border-2 object-cover"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          alt="Album"
        />
      </figure>
      <div className="card-body border-2">
        <h2 className="card-title">{name}</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
