import { Button } from "@/components/ui/button";
import Gradient from "./global/Gradient";
export interface ContactProps {
  contactText: string;
  background: string;
  gradient: string;
  gradientWidth: string;
}
const Contact = ({
  contactText,
  background,
  gradient,
  gradientWidth,
}: ContactProps) => {
  return (
    <section
      className={`my-20 py-0 relative z-10  bg-${background} text-${
        background === "white" ? "black" : "white"
      }`}
    >
      <div className="container py-20 text-center relative h-full">
        <div
          className={` md:w-[400px] h-[400px]  rounded-full  bg-gradient_blue  opacity-40  blur-gradient lg:blur-gradient_desktop absolute top-0 absolute-inline-center z-[-1]`}
        ></div>
        <p className="my-5 text-lg uppercase tracking-widest ">{contactText}</p>
        <Button
          className="text-lg"
          variant={background === "white" ? "secondary" : "default"}
          asChild
        >
          <a href="./kontakt">Kontakt</a>
        </Button>
      </div>
    </section>
  );
};
export default Contact;
