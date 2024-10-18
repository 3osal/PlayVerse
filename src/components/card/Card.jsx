"use client"
import Image from "next/image";
import { PiMonitorFill } from "react-icons/pi";
import { FaSteam } from "react-icons/fa";
import { SiEpicgames } from "react-icons/si";
import { SiGogdotcom } from "react-icons/si";
import { FaXbox } from "react-icons/fa";
import { FaPlaystation } from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";
import { FaAndroid } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { AiFillMinusCircle } from "react-icons/ai";
import Link from "next/link";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Card = ({ id, title, description, imageUrl, platforms, active, worth}) => {
  useEffect(()=> {
    Aos.init({duration : 1000})
  },[])

  const getPlatform = () => {
    if (platforms.includes("Steam")) return <FaSteam />;
    if (platforms.includes("Epic")) return <SiEpicgames />;
    if (platforms.includes("Xbox")) return <FaXbox />;
    if (platforms.includes("Ps4")) return <FaPlaystation />;
    if (platforms.includes("Nintendo")) return <BsNintendoSwitch />;
    if (platforms.includes("Android")) return <FaAndroid />;
    if (platforms.includes("Apple")) return <FaApple />;
    if (platforms.includes("Pc")) return <PiMonitorFill />;
    if (platforms.includes("GOG")) return <SiGogdotcom />;
    return <AiFillMinusCircle />;
  };
  // GET PRICE
  const getWorth = () => {
    return worth ? worth : "Free";
  };

  const platform = getPlatform();
  const worthDisplay = getWorth();
  return (
    <Link href= {`giveaways/${id}`} className=" relative shadow-md rounded-lg overflow-hidden w-full h-full" data-aos="flip-right">
      <span className = "bg-Background/90 rounded-md p-1 absolute top-1 right-1 z-40 hover:bg-Primary_Color">
        {active}
      </span>
      <Image
        className="h-[200px] w-[400px] mx-auto hover:scale-105 transition-all"
        src={imageUrl}
        alt={title}
        width={200}
        height={400}
        quality={100}
      />
      <div className="py-4">
        <h2 className="text-xl font-bold mb-2">{title.slice(0, 20)}...</h2>
        <p className="text-gray-600">{description.slice(0, 80)}...</p>
        <div className="flex gap-4 justify-between items-center mt-5">
            <span className="inline-block text-[20px]">{platform}</span>
            <span className="inline-block text-[20px] text-Primary_Color">
            {worthDisplay}
            </span>
          </div>
      </div>
    </Link>
    
  );
};

export default Card;
