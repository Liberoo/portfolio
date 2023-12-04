import Text from "@/pages/components/global/Text";
export interface SmartOffertLightProps {
  imageLeft: boolean;
  mockupImage: string;
  subHeading: string;
  title: string;
  text: string;
  btnText: string;
  btnUrl: string;
  btnType: string;
  gradientColor: string;
}

const SmartOffertLight = ({
  imageLeft,
  mockupImage,
  ...textProps
}: SmartOffertLightProps) => {
  return (
    <section className=" overflow-hidden">
      <div
        className={`container flex flex-col gap-12 items-center ${
          imageLeft ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
      >
        <Text {...textProps} />
        <img
          className={`${imageLeft ? "lg:ml-[-10%]" : "lg:mr-[-10%]"}`}
          src={mockupImage}
          alt=""
        />
      </div>
    </section>
  );
};

export default SmartOffertLight;
