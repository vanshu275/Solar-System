import React from "react";

const Footer = () => {
  return (
    <footer 
      className="fixed bottom-0 left-0 w-full h-[95vh] bg-zinc-950 text-white -z-10 flex flex-col justify-between p-10 md:p-20"
    >
      {/* Top Part: Philosophical Text */}
      <div className="max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-light leading-tight tracking-tight">
          In this vast cosmos, we are but a <span className="italic text-blue-400">speck of dust</span>, 
          often blinded by ego. Embrace the truth, let the ego dissolve, and 
          <span className="font-bold"> find your peace </span> among the stars.
        </h2>
      </div>

      {/* Bottom Part: Links & Credits */}
      <div className="flex flex-col md:flex-row justify-between items-end border-t border-white/10 pt-10">
        <div>
          <p className="text-gray-500 uppercase tracking-widest text-sm mb-2">Developed by</p>
          <h3 className="text-2xl font-bold">Vansh Upadhyay</h3>
        </div>

        <div className="text-right mt-6 md:mt-0">
          <p className="text-gray-400 text-lg italic">"We are made of star-stuff."</p>
          <p className="text-sm text-gray-600 mt-2">© 2026 Solar System. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;