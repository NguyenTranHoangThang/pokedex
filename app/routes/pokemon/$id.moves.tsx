import { useState } from "react";
import { v4 as uuid } from 'uuid';
import ReactPaginate from "react-paginate";
import { getPagination } from "~/helpers/helper";
import useLocalStorage from "~/hooks/useLocalStorage";
import { Move, pokemonDetail } from "~/model/pokemon";
import MoveComponenet from "~/components/pokemon-detail/MoveComponent";

const Moves = () => {
  const [pokemon] = useLocalStorage<pokemonDetail>(
    "pokemon",
    {} as pokemonDetail
  );
  const [currentPage, setCurrentPage] = useState(0);
  const [currentPageData, pageCount] = getPagination(pokemon.moves, currentPage);

  function handlePageClick({ selected: selectedPage }: { selected: any }) {
    setCurrentPage(selectedPage);
  }

  const paginationDefaultClass = "btn btn-xs sm:btn-sm block px-0 sm:px-0";

  return (
    <>
      <div className="basic-full flex w-full flex-wrap sm:flex-nowrap gap-1 sm:gap-6">
        {currentPageData?.map((move: Move) => (
          <MoveComponenet
            key={uuid()}
            name={move.move.name}
            url={move.move.url}
          />
        ))}
      </div>
      <ReactPaginate
        breakLabel="..."
        breakClassName={`${paginationDefaultClass} sm:px-4 sm:py-2 btn-disabled`}
        previousClassName={`${paginationDefaultClass} sm:px-4 sm:py-2 btn-outline`}
        nextClassName={`${paginationDefaultClass} sm:px-4 sm:py-2 btn-outline`}
        nextLabel="»"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="«"
        className="btn-group mt-8 mx-auto"
        pageClassName={`px-0 ${paginationDefaultClass} bg-white`}
        pageLinkClassName="block p-2 w-6 sm:w-12"
        activeClassName="btn-active"
      />
    </>
  );
};

export default Moves;
