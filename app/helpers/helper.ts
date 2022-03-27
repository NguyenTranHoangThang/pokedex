import { generatePath } from "react-router";

export const normalizeString = (name: string) => {
  return name?.replace(/-/g, ' ').toLowerCase();;
}

export const getPokemonDetailLink = (url: string) => {
  const pokemonId = url.split('/')[6];
  return generatePath("/pokemon/:id/stats", { id: pokemonId });
}
export const getPagination = function <T>(data: Array<T>, page: number): [Array<T>, number] {
  const PER_PAGE = 3;
  const offset = page * PER_PAGE;
  const currentPageData = data?.slice(offset, offset + PER_PAGE)
  const pageCount = Math.ceil(data?.length / PER_PAGE)
  return [currentPageData, pageCount]
};
