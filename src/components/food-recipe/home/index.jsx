import React, { useContext } from "react";
import { GlobalContext } from "../context";
import RecipeItem from "../recipe-list";

const Home = () => {
  const { recipeList, loading } = useContext(GlobalContext);

  if (loading) {
    return <div>Loading data, please wait.</div>;
  }
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipeList?.length ? (
        recipeList.map((item) => <RecipeItem item={item} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing to show, please search something
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
