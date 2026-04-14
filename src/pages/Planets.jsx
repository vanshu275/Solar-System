import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Planets = () => {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);

  const planetsData = [
    {
      name: "mercury",
      image: "/planets/mercury.jpg",
      description:
        "Mercury is the closest planet to the Sun and the smallest in our solar system. It has extreme temperatures and no atmosphere.",
    },
    {
      name: "Venus",
      image: "/planets/venus.jpg",
      description:
        "Venus is the hottest planet with a thick toxic atmosphere. It spins in the opposite direction of most planets.",
    },
    {
      name: "Earth",
      image: "/planets/earth.jpg",
      description:
        "Earth is the only known planet to support life. It has water, oxygen, and perfect conditions for living beings.",
    },
    {
      name: "Mars",
      image: "/planets/mars.webp",
      description:
        "Mars is known as the Red Planet. Scientists are exploring it for signs of past life.",
    },
    {
      name: "Jupiter",
      image: "/planets/jupiter.jpg",
      description:
        "Jupiter is the largest planet in the solar system. It has a giant storm called the Great Red Spot.",
    },
    {
      name: "Saturn",
      image: "/planets/saturn.jpg",
      description:
        "Saturn is famous for its beautiful rings made of ice and rock particles.",
    },
    {
      name: "Uranus",
      image: "/planets/uranus.jpg",
      description:
        "Uranus rotates on its side, making it unique among planets. It has a pale blue color.",
    },
    {
      name: "Neptune",
      image: "/planets/neptune.jpg",
      description:
        "Neptune is the farthest planet from the Sun. It has the strongest winds in the solar system.",
    },
  ];

  useGSAP(
    () => {
      const slides = gsap.utils.toArray(".slide");

      // 1. Horizontal Movement Timeline
      gsap.to(slides, {
        xPercent: -100 * (slides.length - 1), // Slides ko left shift karna
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true, // Page ko rok ke rakhna jab tak slides khatam na ho
          scrub: 1, // Scroll ke saath smooth movement (smoothness yahan se aati hai)
          snap: 1 / (slides.length - 1), // Har planet pe auto-snap karega
          end: "+=3000", // Kitna lamba scroll chalega
        },
      });

      // 2. Individual Slide Animations (Zoom effect)
      slides.forEach((slide) => {
        gsap.fromTo(
          slide.querySelector("img"),
          { scale: 0.6, opacity: 0.4 },
          {
            scale: 1,
            opacity: 1,
            scrollTrigger: {
              trigger: slide,
              containerAnimation: gsap.effects.horizontalScroll, // Reference for horizontal
              start: "left center", // Jab slide ka left part center mein aaye
              end: "right center", // Jab slide ka right part center se nikal jaye
              scrub: true,
            },
          },
        );
      });
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className="overflow-hidden bg-black">
      {/* Horizontal Wrapper */}
      <div ref={sliderRef} className="flex h-screen w-[800vw]">
        {planetsData.map((planet, index) => (
          <div
            key={index}
            className="slide w-full h-screen flex items-center justify-center"
          >
            <div className="relative w-full aspect-square">
              <img
                src={planet.image}
                alt={planet.name}
                className="w-full h-full object-contain shadow-[0_0_50px_rgba(255,255,255,0.2)]"
              />
            </div>
            <div className="planet-content z-10 relative text-white text-center max-w-2xl px-6">
              <h1 className="text-7xl font-black uppercase tracking-tighter mb-6 italic">
                {planet.name}
              </h1>
              <p className="text-xl text-gray-300 font-light leading-relaxed">
                {planet.description}
              </p>
              <div className="mt-8 h-[2px] w-24 bg-white/50 mx-auto"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Planets;
