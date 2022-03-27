import { ReactElement } from 'react';
import { v4 as uuid } from 'uuid';

const TypeComponent = ({ type }: { type: String }): ReactElement => {
  return (
    <div key={uuid()} className={`p-4 mx-1 bg-${type} badge text-lg text-white `} >{type}</div>
  );
};

export default TypeComponent;
