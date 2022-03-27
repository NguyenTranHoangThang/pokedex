const StatComponenet = ({ name, value }: { name: String, value: string }) => {
  return (
    <div className="h-6 w-full basis-full flex items-center">
      <span className="basis-3/6 sm:basis-2/6 lg:basis-1/4 font-black text-base lg:text-lg">{name}</span>
      <progress className="basis-3/6 sm:basis-4/6 lg:basis-3/4 progress progress-accent " value={value} max="100"></progress>
    </div>
  );
};

export default StatComponenet;
