import React, { useContext } from "react";
import { GlobalContext } from "../context";
import RecipeItem from "../recipe-list";

const Favourite = () => {
  const { favouritesList, loading } = useContext(GlobalContext);

  if (loading) {
    return <div>Loading data, please wait.</div>;
  }
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favouritesList?.length ? (
        favouritesList.map((item) => <RecipeItem item={item} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing to show, please Add tp favourites
          </p>
        </div>
      )}
    </div>
  );
};

export default Favourite;
