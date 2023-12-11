import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FaqItem = {
  trigger: string;
  content: string;
};

type FaqItems = {
  items: FaqItem[];
};

const Faq = ({ items }: FaqItems) => {
  return (
    <section className="bg-black text-white font-bold font-secondary z-10 relative py-24">
      <div className="container">
        <Accordion
          className="bg-black py-12  lg:py-20 px-4 md:px-16  rounded-t-[80px]  max-w-[800px] mx-auto "
          type="single"
          collapsible
        >
          <div
            className={`w-full md:w-[1200px] h-[400px]  rounded-full  bg-gradient_orange  opacity-40  blur-gradient lg:blur-gradient_desktop absolute top-0 absolute-inline-center z-[-1]`}
          ></div>
          <h2 className="text-6xl text-center mb-10">FAQ</h2>
          {items.map((item, index) => (
            <AccordionItem
              key={index}
              className="font-secondary mb-5"
              value={`item-${index + 1}`}
            >
              <AccordionTrigger className=" font-bold ">
                {item.trigger}
              </AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
