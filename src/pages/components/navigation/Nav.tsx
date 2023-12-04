import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Menu from "./Menu";

const Nav = () => {
  return (
    <nav className="flex justify-between py-8 px-4 bg-transparent fixed w-full">
      <a className="relative z-100" href="/">
        logo
      </a>
      <Menu desktop={true} />
      <Sheet>
        <SheetTrigger className="md:hidden relative group">
          <div className="relative flex items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all  ring-0 ring-gray-300 focus:ring-8 hover:ring-8  ring-opacity-30 duration-200">
            <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center">
              <div className="bg-black h-[2px] w-1/2 rounded transform transition-all duration-300  origin-right"></div>
              <div className="bg-black h-[1px] rounded"></div>
              <div className="bg-black h-[2px] w-1/2 rounded self-end transform transition-all duration-300  origin-left"></div>
            </div>
          </div>
        </SheetTrigger>
        <SheetContent
          className="h-full flex justify-center items-center"
          side="top"
        >
          <Menu desktop={false} />
        </SheetContent>
      </Sheet>
    </nav>
  );
};
export default Nav;
