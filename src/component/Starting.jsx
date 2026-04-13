import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);
const Starting = () => {
  const text = useRef();
  useGSAP(() => {
    const tl = gsap.timeline();

    Array.from(text.current.children).forEach((el) => {
      tl.fromTo(
        el,
        { opacity: 0, y: -100 },
        { opacity: 1, y: 0, duration: 0.9, ease: "bounce" },
      ).to(
        el,
        { opacity: 0, y: 100, duration: 0.8 },
        "+=0.2", // 👈 thoda delay
      );
    });

    // end me pura container upar
    tl.to(text.current, {
      y: "-100vh",
      duration: 1,
      opacity: 0,
    });
  });

  return (
    <div>
      <div ref={text} className="StartingContainer border-b ">
        <span>Solar System</span>
        <span>and </span>
        <span>its Planet</span>
      </div>
    </div>
  );
};

export default Starting;
