import Stat from "~/components/Stats";
import useLocalStorage from "~/hooks/useLocalStorage";
import { pokemonDetail, Statc } from "~/model/pokemon";

const Stats = () => {
  const [pokemon, setPokemon] = useLocalStorage<pokemonDetail>(
    "pokemon",
    {} as pokemonDetail
  );
  console.log(pokemon);
  const { stats } = pokemon;

  return (
    <div className="bg-white h-96 py-20 px-64 flex flex-wrap">
      {stats?.length > 0 &&
        stats?.map((s: Statc) => (
          <Stat
            key={Math.random().toString()}
            name={s.stat.name}
            value={s.base_stat}
          />
        ))}
    </div>
  );
};

export default Stats;
