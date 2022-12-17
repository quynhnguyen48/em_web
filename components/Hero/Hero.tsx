import React from "react";
import ReactMarkdown from "react-markdown";

interface Props {
  heading: string;
  message: string;
  image_url?: string;
  sub_message?: Array<string>;
}

const Hero = ({ heading, message, image_url, sub_message }: Props) => {
  return (
    <div className="flex items-center justify-center h-screen bg-fixed bg-center bg-cover"
      style={{backgroundImage: "url(" + image_url + ")"}}
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
      <div className="p-5 text-white z-[2] max-w-[1048px]">
        <h2 className="text-5xl font-semibold">{heading}</h2>
        <p className="py-5 text-xl sm:text-lg">{message}</p>
        {sub_message && sub_message.map((s => <p>- {s}</p>))}
      </div>
    </div>
  );
};

export default Hero;
