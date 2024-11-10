import { useQuery } from "react-query";
import * as apiClient from "../api-client";
import LatestDestinationCard from "../components/LastestDestinationCard";
import Hero from "../components/Hero";

const Home = () => {
  const { data: hotels } = useQuery("fetchHotels", apiClient.fetchHotels);

  const topRowHotels = hotels?.slice(0, 2) || [];
  const bottomRowHotels = hotels?.slice(2) || [];

  return (
    <>
      <Hero />
      <section className="container mx-auto px-4 py-8 space-y-6">
        <h2 className="text-4xl font-bold text-gray-800 text-center">
          Latest Destinations
        </h2>
        <p className="text-lg text-gray-600 text-center">
          Discover our recently added destinations and plan your next stay
        </p>

        <div className="space-y-8">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
            {topRowHotels.map((hotel) => (
              <LatestDestinationCard key={hotel._id} hotel={hotel} />
            ))}
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
            {bottomRowHotels.map((hotel) => (
              <LatestDestinationCard key={hotel._id} hotel={hotel} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
