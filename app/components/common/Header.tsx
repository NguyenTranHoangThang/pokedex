import { ReactElement } from "react";
import { Link } from "react-router-dom";
import SearchBarComponent from "./SeachBarComponent";

const Header = (): ReactElement => {
  return (
    <div className="z-20 top-0 h-20 border-b-8 border-black sticky flex flex-row items-center   bg-secondary">
      <div className="basis-1/4 p-2 sm:px-10 lg:px-16">
        <Link to={"/"}>
          <img
            className="xl:w-1/2 object-cover"
            src="/images/pokedex-logo.png"
            alt="logo"
          />
        </Link>
      </div>
      <SearchBarComponent />
    </div>
  );
};

export default Header;
