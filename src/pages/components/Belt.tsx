interface BeltProps {
  textArray: Type[];
}
const Belt = ({ textArray }: BeltProps) => {
  return (
    <div className="w-full overflow-hidden flex whitespace-nowrap relative  bg-white">
      <div className="text-100 font-bold font-primary uppercase text-black an-belt_p">
        {textArray.map((text, index) => (
          <span
            key={index}
            className="px-[80px] relative before:w-[30px] before:h-[30px] before:absolute before:left-[-25px] before:top-[45px] before:bg-black before:rounded-full before:block"
          >
            {text}
          </span>
        ))}
      </div>

      <div className="text-100 font-bold font-primary uppercase text-black an-belt_p">
        {textArray.map((text, index) => (
          <span
            key={index}
            className="px-[80px] relative before:w-[30px] before:h-[30px] before:absolute before:left-[-25px] before:top-[45px] before:bg-black before:rounded-full before:block"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Belt;
