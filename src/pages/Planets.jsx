import {useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Planets = () => {
  const containerRef = useRef(null);
  const slidesRef = useRef([]);
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
      const slides = slidesRef.current;

      // Timeline for scroll-linked animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${planetsData.length * 30}%`, // Scroll length depends on item count
          pin: true,
          scrub: 1.5, // Thoda higher scrub value for extra smoothness
        },
      });

      slides.forEach((slide, i) => {
        if (i === 0) return; // First slide stays visible initially

        // Har slide ke liye entrance animation
        tl.fromTo(
          slide,
          { clipPath: "inset(100% 0% 0% 0%)", opacity: 0 }, // Neeche se upar aayega
          {
            clipPath: "inset(0% 0% 0% 0%)",
            opacity: 1,
            ease: "none",
          },
        )
          .from(
            slide.querySelector(".planet-content"),
            { y: 100, opacity: 0, duration: 0.5 },
            "<", // Pichli animation ke saath start hoga
          )
          .from(
            slide.querySelector(".planet-bg"),
            { scale: 1.5, duration: 1 },
            "<",
          );
      });
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-black"
    >
      {planetsData.map((planet, index) => (
        <div
          key={index}
          ref={(el) => (slidesRef.current[index] = el)}
          className="absolute inset-0 w-full h-screen flex items-center justify-center overflow-hidden"
          style={{ zIndex: index }}
        >
          {/* Background Image with Parallax Class */}
          <img
            src={planet.image}
            alt={planet.name}
            className="planet-bg absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/40 to-black/80"></div>

          {/* Content Wrapper */}
          <div className="planet-content relative text-white text-center max-w-2xl px-6">
            <h1 className="text-7xl font-black uppercase tracking-tighter mb-6 italic">
              {planet.name}
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed">
              {planet.description}
            </p>
            <div className="mt-8 h-0.5 w-24 bg-white/50 mx-auto"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Planets;
