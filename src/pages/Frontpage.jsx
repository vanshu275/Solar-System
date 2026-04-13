import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../component/Navbar";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Frontpage = () => {
  const textLeft = useRef();
  const textRight = useRef();
  const frontpage = useRef();

  useGSAP(() => {
    // parallax effect
    gsap.to(textLeft.current, {
      y: 15,
      scrollTrigger: {
        trigger: frontpage.current,
        start: "top top",
        end: "top+=40 top",
        scrub: true, // smooth follow scroll
      },
    });

    gsap.to(textRight.current, {
      y: 15,
      scrollTrigger: {
        trigger: frontpage.current,
        start: "top top",
        end: "top+=50 top",
        scrub: true,

      },
    });
  });

  return (
    <div ref={frontpage} className="page1 h-[105vh]">
      <Navbar />
      <div className="h-[93vh] w-full flex justify-between items-center">
        <div
          ref={textLeft}
          className="flex flex-col text-8xl leading-18 relative bottom-40"
        >
          <span>Beyond Earth</span>
          <span>Lies A World</span>
          <span>Unknown</span>
        </div>

        <div
          ref={textRight}
          className="flex flex-col text-8xl items-end leading-18 relative top-40"
        >
          <span>Every Planet Tells</span>
          <span>A Story !!!</span>
        </div>
      </div>
    </div>
  );
};

export default Frontpage;
