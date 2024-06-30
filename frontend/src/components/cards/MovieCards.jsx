import React from "react";

const MovieCards = () => {
  return (
    <div className="relative overflow-hidden rounded-lg group">
      <a className="absolute inset-0 z-10" href="#" rel="ugc">
        <span className="sr-only">View</span>
      </a>
      <img
        src="/placeholder.svg"
        alt="Product Image"
        width="400"
        height="500"
        className="object-cover w-full h-[300px] md:h-[400px] lg:h-[500px]"
        style={{aspectRatio: 4/5, objectFit: "cover"}}
      />
      <div className="absolute inset-x-0 bottom-0 px-6 py-4 text-center bg-black/70">
        <h3 className="text-lg font-semibold text-white drop-shadow">
          Stylish Sunglasses
        </h3>
      </div>
    </div>
  );
};

export default MovieCards;
