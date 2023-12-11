type GradientProps = {
  gradient: string;
  gradientWidth: string;
};
const color = "bg-red-400";
const Gradient = ({ gradient, gradientWidth }: GradientProps) => {
  return (
    <div
      className={` md:w-[${gradientWidth}px] h-[400px]  rounded-full  bg-gradient_${gradient} ${color}  opacity-40  blur-gradient lg:blur-gradient_desktop absolute top-0 absolute-inline-center z-[-1]`}
    ></div>
  );
};

export default Gradient;
