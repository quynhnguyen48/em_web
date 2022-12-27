import React, { useEffect, useState } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface Props {
  heading: string;
  message: string;
  image_url?: string;
  image_placeholder_url?: string;
  sub_message?: Array<string>;
}

const useProgressiveImage = (src: any) => {  
  const [sourceLoaded, setSourceLoaded] = useState(null)

  useEffect(() => {
    const img = new Image()
    img.src = src
    img.onload = () => setSourceLoaded(src)
  }, [src])

  return sourceLoaded 
}

const Hero = ({ heading, message, image_url, sub_message, image_placeholder_url }: Props) => {
  const loaded = useProgressiveImage(image_url)

  return (
    <div className="flex items-center justify-center h-screen bg-fixed bg-center bg-cover"
      // style={{backgroundImage: "url(" + image_url + ")"}}
      style={{backgroundImage: `url(${loaded || image_placeholder_url})`, opacity: 0.9}}
    >
      {/* <LazyLoadImage
        wrapperClassName="absolute w-full"
        className="w-full"
              src={image_url} // use normal <img> attributes as props
              placeholderSrc={image_url}
               /> */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
      <div className="p-5 text-white z-[2] max-w-[1048px]">
        <h2 className="text-5xl font-medium">{heading}</h2>
        <p className="py-5 text-xl sm:text-lg">{message}</p>
        {sub_message && sub_message.map((s => <p>- {s}</p>))}
      </div>
    </div>
  );
};

export default Hero;
