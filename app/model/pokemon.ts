export interface pokemonDetail {
  id: string | undefined;
  name: string;
  sprites: Sprites;
  weight: string;
  height: string;
  base_experience: number;
  types: Array<Type>;
  stats: Array<Stat>;
  moves: Array<Move>
}

export interface pokemonOwned {
  id: string | undefined;
  name: string;
  types: Type[];
}

interface Sprites {
  front_default: string;
}

export interface Move {
  move: ResourceObject
}

export interface MoveDetail {
  effect_entries: [
    { short_effect: string }
  ]
}
export interface Stat {
  base_stat: string;
  stat: {
    name: string;
  }
}

export interface Type {
  type: {
    name: string;
  };
}

export interface pokemonDetailTab {
  name: string;
  path: string;
}

export interface ResourceObject {
  name: string;
  url: string;
}