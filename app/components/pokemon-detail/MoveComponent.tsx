import axios from "axios";
import { useState, useEffect } from "react";
import { normalizeString } from "~/helpers/helper";
import { MoveDetail } from "~/model/pokemon";
import Loader from "../common/Loader";

const MoveComponenet = ({ name, url }: { name: string; url: string }) => {
  const [move, setMove] = useState<MoveDetail>({} as MoveDetail);
  useEffect(() => {
    axios.get(url).then((res) => {
      setMove(res.data);
    });
    return () => {
      setMove({} as MoveDetail);
    };
  }, []);

  return (
    <div className="basis-full sm:basis-1/3">
      {move?.effect_entries?.length ? (
        <div className="sm:h-48 border card card-compact bg-white text-primary">
          <div className="p-2 card-body">
            <h2 className="card-title">{normalizeString(name)}</h2>
            <p>{move?.effect_entries[0].short_effect}</p>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default MoveComponenet;
