import axios from "axios"
import { PokemonUrl } from "~/components/SeachBarComponent";

export const fetchPokemonList = (): Promise<{ data : { results: PokemonUrl[]}}> => {
    return axios.get("https://pokeapi.co/api/v2/pokemon?limit=1126");
}

export const fetchPokemonDetail = (id: string) => {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
}