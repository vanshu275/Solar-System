import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Mouse() {
  const mouse = useRef();
  useGSAP(() => {
    gsap.set(mouse.current, {
      x: -15,
      y: -15,
    });

    window.addEventListener("mousemove", (e) => {
      gsap.to(mouse.current, {
        x: e.clientX ,
        y: e.clientY + 3,
        duration : 0.8
      });
    });
  });

  return (
    <div
      ref={mouse}
      className=" mouse w-5 h-5 rounded-[50%] fixed z-10"
    ></div>
  );
}
