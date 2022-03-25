import { Link } from "react-router-dom";
import SearchBarComponent from "./SeachBarComponent";

const Header = () => {
  return (
    <div className="bg-secondary flex flex-row4 border-b-8 border-black sticky z-20 top-0">
      <div className="p-0.5 basis-1/4">
        <Link to={"/"}>
          <img
            className="object-cover p-2 w-48"
            src="/images/Pokédex_logo.png"
            alt="logo"
          />
        </Link>
      </div>
      <SearchBarComponent />
    </div>
  );
};

export default Header;
