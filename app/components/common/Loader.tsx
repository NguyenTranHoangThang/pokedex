import { ReactElement } from "react";

const Loader = (): ReactElement => {
  return (
    <div className="p-10 w-full text-center">
      <div className="mx-auto radial-progress animate-spin" />
    </div>
  );
};

export default Loader;
