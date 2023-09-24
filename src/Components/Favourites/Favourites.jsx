import React, { useEffect, useState } from "react";
import FavoriteCard from "./FavoriteCard";

const Favourites = () => {
  const [favorites, setFavorite] = useState([]);
  const [error, setError] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const getLocalSData = JSON.parse(localStorage.getItem("favorite"));
    if (getLocalSData) {
      setFavorite(getLocalSData);
      const total = getLocalSData.reduce((prev, curr) => prev + curr.price, 0);
      setTotalPrice(total)
    } else {
      setError("No data");
    }

  }, []);

  const handleRemove = () => {
    localStorage.clear();
    setFavorite([]);
    setError('No data found');
  };

  const handleShowAll = () => {
    setShowAll(!showAll);
  };
 
  return (
    <div>
      {error ? (
        <div className="flex items-center justify-center h-[80vh]">
          <p className="text-2xl text-black">No data found</p>
        </div>
      ) : (
        <div className=" ">
          <div className="flex items-center h-[30vh] bg-cyan-100 justify-center">
            <h1 className="text-4xl font-normal text-black text-center">
              All favorites
            </h1>
            
          </div>
          <div className="px-10 ml-12 py-4 text-white">
          <p className="text-black font-medium">Total Price : {totalPrice}</p>
          </div>
          <div className="flex items-center justify-center py-6">
            <button
              onClick={handleRemove}
              className="block  select-none rounded-lg text-white bg-cyan-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Remove All
            </button>
          </div>
          <div
            className={`grid ${
              favorites.length > 1 ? "grid-cols-3" : "grid-cols-1 w-1/3 mx-auto"
            } items-center justify-center  gap-4 px-12 py-20 `}
          >
            {showAll
              ? favorites.map((phone) => (
                  <FavoriteCard key={phone.id} phone={phone}></FavoriteCard>
                ))
              : favorites
                  .slice(0, 2)
                  .map((phone) => (
                    <FavoriteCard key={phone.id} phone={phone}></FavoriteCard>
                  ))}
          </div>
          <div className={`flex items-center justify-center py-8 ${favorites.length <= 2 ? 'hidden' : ' ' }`}>
            
            <button
              onClick={handleShowAll}
              className="block  select-none rounded-lg text-white bg-cyan-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              {showAll ? "Show less" : "Show all"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Favourites;
