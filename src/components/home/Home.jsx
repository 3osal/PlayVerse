"use client";
import Card from "../card/Card";
import { fetchGiveaways } from "@/app/utils/fetch";
import { useState, useEffect } from "react";
import Loading from "@/components/loading/loading";
import Aos from "aos";
import 'aos/dist/aos.css'


const GiveawayPage = () => {
  useEffect(()=> {
    Aos.init({duration : 1000})
  },[])

  
  const [epicGames, setEpicGames] = useState([]);
  const [steamGames, setSteamGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const data = await fetchGiveaways();

        // FETCH EPIC GAMES
        const filterEpicGames = data
          .filter((game) => game.platforms.toLowerCase().includes("epic"))
          .map((item) => ({
            ...item,
            worth:
              item.worth && item.worth.toLowerCase() !== "n/a"
                ? item.worth
                : "Free",
          }));

        setEpicGames(filterEpicGames);

        // FETCH STEAM GAMES
        const filterSteamGames = data
          .filter((game) => game.platforms.toLowerCase().includes("steam"))
          .map((item) => ({
            ...item,
            worth:
              item.worth && item.worth.toLowerCase() !== "n/a"
                ? item.worth
                : "Free",
          }));

        setSteamGames(filterSteamGames);
      } catch (err) {
        setError("Failed to fetch giveaways");
        console.log("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="mt-12" >
      <div className="container">
        {/* EPIC GAMES */}
        <div data-aos="fade-right">
          <h1 className="text-Text_Colors capitalize text-[25px] mb-5">
            epic games
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 items-center justify-center gap-6">
            {epicGames.map((item) => (
              <Card
                key={item.id}
                title={item.title}
                description={item.description}
                imageUrl={item.image}
                platforms={item.platforms}
                active={item.status}
                worth={item.worth}
                id={item.id}
              />
            ))}
          </div>
        </div>
        {/* STEAM GAMES */}
        <div>
          <h1 className="text-Text_Colors capitalize text-[25px] mb-5">
            steam games
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 items-center justify-center gap-6">
            {steamGames.map((item) => (
              <Card
                key={item.id}
                title={item.title}
                description={item.description}
                imageUrl={item.image}
                platforms={item.platforms}
                active={item.status}
                worth={item.worth}
                id={item.id}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiveawayPage;
