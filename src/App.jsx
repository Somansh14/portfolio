import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Get_in_Touch";
// import Particle_bg from "./components/Particle_bg";

const App = () => {
  return (
    <div className=" overflow-x-hidden text-neutral-300 antialiased selection:bg-pink-400">
      {/* <Particle_bg/> */}
      <div className=" fixed top-0 -z-10 h-full w-full">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_150%_at_50%_5%,#000_50%,#63e_100%)]"></div>
      </div>

      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Projects/>
        <Contact/>
      </div>
    </div>
  );
};

export default App;
