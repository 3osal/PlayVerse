"use client";
import { fetchGiveaways } from "@/app/utils/fetch";
import { useEffect, useState } from "react";
import Card from "@/components/card/Card";
import Loading from "@/components/loading/loading";

const Apple = () => {
  const [appleGames, setappleGames] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const data = await fetchGiveaways();

        // FILTER APPLE GAMES
        const filterAppleGames = data
          .filter(
            (game) =>
              game.platforms.toLowerCase().includes("ios") 
          )
          .map((item) => ({
            ...item,
            worth:
              item.worth && item.worth.toLowerCase() !== "n/a"
                ? item.worth
                : "Free",
          }));
          setappleGames(filterAppleGames);
      } catch (err) {
        console.log("error fetching data", err);
      }
    }
    getData();
  }, []);

  return (
    <section className="mt-5 flex flex-col gap-[40px]">
      {/* APPLE GAMES */}
      <div className="container">
        <div className="grid grid-cols-4 items-center justify-center gap-6">
          {appleGames.length > 0 ? (
            appleGames.map((item) => (
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

export default Apple;
