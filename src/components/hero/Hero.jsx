import React from "react";

const Hero = () => {
  return (
    <section className="hero flex items-center h-96 bg-no-repeat bg-cover">
      <div className="container py-3 px-4 max-w-screen-xl mx-auto">
        <div className="flex flex-col items-center gap-y-3 text-center  ">
          <h1 className="text-white text-3xl sm:text-4xl font-bold">
            Get Free Games & In-Game Loot!
          </h1>
          <p className="text-2xl font-medium">
            Find, Personalize, Track, Collect, Repeat.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
