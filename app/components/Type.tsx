const Type = ({ key, type }: { key: string; type: String }) => {
  return (
    <div key={key} className={`bg-${type} badge p-4 mx-1 text-lg text-white `} >{type}</div>
  );
};

export default Type;
