import { v4 as uuid } from 'uuid';
import StatComponenet from '~/components/pokemon-detail/StatComponenet';
import useLocalStorage from '~/hooks/useLocalStorage';
import { pokemonDetail, Stat } from '~/model/pokemon';


const Stats = () => {
  const [pokemon] = useLocalStorage<pokemonDetail>(
    "pokemon",
    {} as pokemonDetail
  );
  const { stats } = pokemon;

  return (
    <>
      {stats?.length > 0 &&
        stats?.map((s: Stat) => (
          <StatComponenet
            key={uuid()}
            name={s.stat.name}
            value={s.base_stat}
          />
        ))}
    </>
  );
};

export default Stats;
