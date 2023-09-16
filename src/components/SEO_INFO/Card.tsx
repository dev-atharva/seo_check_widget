interface Cardsprops {
  value: number;
  title: string;
  info: string;
}

const Card: React.FC<Cardsprops> = ({ value, title, info }) => {
  return (
    <div className=" max-w-[70vw] sm:max-w-[30vw] min-h-[30vh] rounded-lg p-2 flex flex-col gap-2 border border-1">
      <div className="w-full h-[20%] text-center  font-bold text-3xl text-zinc-800">
        {value}
      </div>
      <div className="font-semibold text-lg text-zinc-700 w-[100%]">
        {title}
      </div>
      <div className="font-normal text-base text-zinc-500 p-1 w-[100%]">
        {info}
      </div>
    </div>
  );
};

export default Card;
