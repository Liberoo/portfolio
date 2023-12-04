import { useContext } from "react";
import { Button } from "@/components/ui/button";

export interface TextProps {
  subHeading: string;
  title: string;
  text: string;
  btnText: string;
  btnUrl: string;
  btnType: string;
  gradientColor: string;
}

const Text = ({
  subHeading,
  title,
  text,
  btnText,
  btnUrl,
  btnType,
  gradientColor,
}: TextProps) => {
  return (
    <div className="w-full flex-1">
      <span
        className={`font-primary font-bold uppercase color-gradient_${gradientColor}`}
      >
        {subHeading}
      </span>
      <h2 className="text-3xl md:text-6xl font-bold pt-0">{title}</h2>
      <p className="py-4">{text}</p>
      <Button
        variant={
          btnType as
            | "secondary"
            | "default"
            | "link"
            | "destructive"
            | "outline"
            | "ghost"
        }
        asChild
      >
        <a href={btnUrl}>{btnText}</a>
      </Button>
    </div>
  );
};

export default Text;
