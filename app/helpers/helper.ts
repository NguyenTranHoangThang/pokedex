import { generatePath } from "react-router";

export const normalizePokemonName = (name: string) => {
    return name?.replace(/-/g, ' ').toLowerCase();;
}

export const getPokemonDetailLink = (url: string) => {
    const pokemonId = url.split('/')[6];
    return generatePath("/pokemon/:id/stats", { id: pokemonId });
}