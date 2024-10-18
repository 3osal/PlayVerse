"use client";
import Card from "../../../components/card/Card";
import { fetchGiveaways } from "@/app/utils/fetch";
import { useState, useEffect } from "react";
import Loading from "@/components/loading/loading";

const GiveawayPage = () => {
  const [giveaways, setGiveaways] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const data = await fetchGiveaways();

        const updatedData = data.map((item) => {
          return {
            ...item,
            worth:
              item.worth && item.worth.toLowerCase() !== "n/a"
                ? item.worth
                : "Free",
          };
        });

        setGiveaways(updatedData);
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
    <section className="mt-12">
      <div className="container grid grid-cols-4 items-center justify-center gap-6">
        {giveaways.map((item) => (
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
    </section>
  );
};

export default GiveawayPage;
