import React from "react";

interface Props {
  heading: string;
  message: string;
  image_url?: string;
}

const Hero = ({ heading, message, image_url }: Props) => {
  return (
    <div className="flex items-center justify-center h-screen bg-fixed bg-center bg-cover"
      style={{backgroundImage: "url(" + image_url + ")"}}
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
      <div className="p-5 text-white z-[2]">
        <h2 className="text-5xl font-semibold">{heading}</h2>
        <p className="py-5 text-xl sm:text-lg">{message}</p>
      </div>
    </div>
  );
};

export default Hero;
