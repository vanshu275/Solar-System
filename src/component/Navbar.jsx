import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const Navbar = () => {



  const handleScroll = (e, target) => {
    e.preventDefault();

    gsap.to(window, {
      duration: 1.5,
      scrollTo: target,
      ease: "expo",
    });
  };


  return (
    <div className="w-full h-[6vh] flex justify-between items-center p-4 border-b border-gray-100">
      <h2 className="select-none text-3xl font-bold">Solar System</h2>
      <div className=" flex gap-6 pr-4">
        <a
          href="#planets"
          onClick={(e) => handleScroll(e, "#planets")}
          className="flex items-center gap-1 justify-center text-2xl"
        >
          Planets
        </a>

        <a
          href="#fact"
          onClick={(e) => handleScroll(e, "#facts")}
          className="flex items-center gap-1 justify-center text-2xl"
        >
          Facts
        </a>
      </div>
    </div>
  );
};

export default Navbar;
