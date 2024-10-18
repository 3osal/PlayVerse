"use client";
import { fetchGiveaways } from "@/app/utils/fetch";
import { useEffect, useState } from "react";
import Card from "@/components/card/Card";
import Loading from "@/components/loading/loading";

const Home = () => {
  const [epicGames, setEpicGames] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const data = await fetchGiveaways();

        // FILTER EPIC GAMES
        const filterEpicGames = data
          .filter(
            (game) =>
              game.platforms.toLowerCase().includes("epic") 
          )
          .map((item) => ({
            ...item,
            worth:
              item.worth && item.worth.toLowerCase() !== "n/a"
                ? item.worth
                : "Free",
          }));
        setEpicGames(filterEpicGames);
      } catch (err) {
        console.log("error fetching data", err);
      }
    }
    getData();
  }, []);

  return (
    <section className="mt-5 flex flex-col gap-[40px]">
      {/* EPIC GAMES */}
      <div className="container">
        <div className="grid grid-cols-4 items-center justify-center gap-6">
          {epicGames.length > 0 ? (
            epicGames.map((item) => (
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
            ))
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;
