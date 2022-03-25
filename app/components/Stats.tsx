const Stat = ({ key, name, value }: { key: string; name: String, value: string }) => {
  return (
    <div key={key} className="flex h-6 w-full basis-full items-center">
      <span className="basis-1/6 font-black text-xl">{name}</span>
      <progress className="progress progress-accent basis-5/6" value={value} max="100"></progress>
    </div>
  );
};

export default Stat;
