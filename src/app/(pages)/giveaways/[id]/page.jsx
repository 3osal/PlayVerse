"use client";
import { fetchGiveaway } from "@/app/utils/fetch";
import { useState, useEffect } from "react";
import Loading from "@/components/loading/loading";
import Image from "next/image";
import Link from "next/link";

const GiveawayDetails = ({ params }) => {
  const [giveaway, setGiveaway] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const data = await fetchGiveaway(params.id);
        setGiveaway(data);
      } catch (err) {
        console.log("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [params.id]);

  if (loading) {
    return <Loading />;
  }

  if (!giveaway) {
    return <div>Error: Giveaway data not found</div>; // في حال عدم وجود بيانات
  }

  return <section className="flex flex-col items-center mt-10 h-screen p-[15px]">
      <div className="relative bg-Background flex flex-col items-start rounded-md w-auto overflow-hidden md:w-[500px]">
        <span className="absolute left-2 top-2 z-40 bg-Background/90 p-1 rounded-md">{giveaway.published_date}</span>
      <div>
        <Image className="hover:scale-110 transition-all" src={giveaway.image} alt={giveaway.title} width={600} height={500} quality={100} />
      </div>
      <div className="p-4 w-full">
        <h1 className="text-[25px] font-bold text-Text_Colors">{giveaway.title}</h1>
        <div className="flex justify-between items-center mt-2">
          <span className="text-Text_Secondary text-[14px]">
            {giveaway.type}
          </span>
          <span className="text-Primary_Color font-bold">
            {giveaway.worth}
          </span>
        </div>
        <Link target="_blank" className="bg-Primary_Color text-Text_Colors font-bold mt-5 py-[10px] rounded-[5px] block text-center capitalize hover:bg-Secondary_Color" href={giveaway.open_giveaway_url}>
          get giveaway
          </Link>
          <div className="flex justify-between items-center mt-2">
          <span className="text-Text_Secondary text-[14px] capitalize">
            status
          </span>
          <span className="text-Text_Colors font-bold">
            {giveaway.status}
          </span>
        </div>
          <div className="flex justify-between items-center mt-2">
          <span className="text-Text_Secondary text-[14px] capitalize">
            platforms
          </span>
          <span className="text-Text_Colors font-bold">
            {giveaway.platforms}
          </span>
        </div>
      </div>
      {/* DESCRIPTION */}
      <div className="bg-neutral-800 p-4">
        <h3 className="text-Text_Colors capitalize font-bold mb-2">description</h3>
        <p className="text-Text_Secondary">{giveaway.description}</p>
      </div>
      </div>
  </section>;
};

export default GiveawayDetails;
