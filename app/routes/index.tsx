import { Link } from "react-router-dom";
import { generatePath } from "react-router";
import PokemonCard from "~/components/PokemonCard";

export default function Index() {
  const test = [
    { id: "2", name: "asd" },
    { id: "3", name: "asd" },
    { id: "4", name: "asd" },
    { id: "252", name: "asd" },
    { id: "14", name: "asd" },
  ];
  return (
    <div className="h-5/6 px-40 py-10">
      <h1 className="text-center mb-10 text-2xl">Pokemon Owned</h1>

      <div className="pokemon-lists bg-base-100 overflow-scroll h-5/6">
        {test.map((item) => {
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
