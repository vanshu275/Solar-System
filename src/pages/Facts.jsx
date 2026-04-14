import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Facts = () => {
  const containerRef = useRef(null);

  const factsData = [
    { title: "Diamond Rain", desc: "Neptune aur Saturn par diamonds ki baarish hoti hai!", color: "from-blue-900" },
    { title: "Long Days", desc: "Venus ka ek din uske ek saal se bhi zyada lamba hota hai.", color: "from-orange-900" },
    { title: "Floating Saturn", desc: "Agar Saturn ko paani mein daala jaye, toh wo dubega nahi.", color: "from-yellow-900" },
    { title: "Silence of Space", desc: "Space mein koi hawa nahi hai, isliye wahan ekdam sannata hota hai.", color: "from-purple-900" },
  ];

  useGSAP(() => {
    const cards = gsap.utils.toArray(".fact-card");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${factsData.length * 28}%`, 
        pin: true,   
        scrub: 1,    
        snap: 1 / (factsData.length - 1), 
      },
    });

    // Pehle card ko chhod kar baaki sabko sequence mein animate karenge
    cards.forEach((card, i) => {
      if (i === 0) return;

      tl.fromTo(
        card,
        { y: "100%" }, 
        { y: "0%", ease: "circ" }, 
        
      );
    });
  },);

  return (
    <div id="facts" ref={containerRef} className="relative h-screen w-full bg-black overflow-hidden">
      {factsData.map((fact, index) => (
        <div
          key={index}
          className={`fact-card absolute inset-0 h-screen w-full flex items-center justify-center bg-linear-to-b ${fact.color} to-black`}
          style={{ zIndex: index }} 
        >
          <div className="px-10 max-w-4xl text-center">
            <span className="text-blue-400 font-mono text-xl">Fact #0{index + 1}</span>
            <h2 className="text-white text-6xl md:text-8xl font-black mt-4 mb-8 uppercase tracking-tighter italic">
              {fact.title}
            </h2>
            <p className="text-gray-300 text-2xl md:text-3xl font-light leading-relaxed">
              {fact.desc}
            </p>
          </div>

          <div className="absolute opacity-10 text-[20vw] font-bold text-white -bottom-10 -right-10 pointer-events-none select-none">
            {index + 1}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Facts;