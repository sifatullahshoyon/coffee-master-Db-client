import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./components/CoffeeCard";

const App = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <section className="container mx-auto px-10 py-32">
      <p className="text-white text-center">--- Sip & Savor ---</p>
      <p className="text-white text-center mt-2 text-6xl tracking-wide font-bold mb-10">
        Our Popular Products
      </p>
      <div className="grid md:grid-cols-2 gap-4">
        {coffees?.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          />
        ))}
      </div>
    </section>
  );
};

export default App;
