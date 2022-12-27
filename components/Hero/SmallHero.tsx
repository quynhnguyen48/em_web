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

const SmallHero = ({ heading, message, image_url, sub_message, image_placeholder_url }: Props) => {
  const loaded = useProgressiveImage(image_url)

  return (
    <div className=""
      // style={{backgroundImage: "url(" + image_url + ")"}}
      // style={{backgroundImage: `url(${loaded ||  image_placeholder_url})`}}
    >
      <img 
                  style={{
                    height: "200px",
                    width: "100%",
                    // marginTop: "100px",
                    objectFit: "cover",
                    objectPosition: "top"
                  }}
                src={image_url}
                />
      <div className="p-5 text-black z-[2] max-w-[1048px] text-center m-auto">
        <h2 className="text-5xl ">{heading}</h2>
        <p className="py-5 text-xl sm:text-lg">{message}</p>
        {sub_message && sub_message.map((s => <p>- {s}</p>))}
      </div>
    </div>
  );
};

export default SmallHero;
