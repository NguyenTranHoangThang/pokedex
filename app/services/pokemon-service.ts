import axios from "axios"
import { ResourceObject } from "~/model/pokemon";

const BASE_URL = "https://pokeapi.co/api/v2/";

export const fetchPokemonList = (): Promise<{ data: { results: ResourceObject[] } }> => {
    return axios.get(`${BASE_URL}pokemon?limit=1126`);
}

export const fetchPokemonDetail = (id: string) => {
    return axios.get(`${BASE_URL}pokemon/${id}`);
}