export interface pokemonDetail {
  name: string;
  sprites: Sprites;
  weight: string;
  height: string;
  base_experience: number;
  types: Array<Type>;
  stats: Array<Statc>;
}

interface Sprites {
  front_default: string;
}


export interface Statc {
  base_stat: string;
  stat: {
    name: string;
  }
}

interface Type {
  type: {
    name: string;
  };
}

export interface pokemonDetailTab {
  name: string;
  path: string;
}