import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

const GlobalStateContext = ({ children }) => {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [favouritesList, setFavouritesList] = useState([]);
  const navigate = useNavigate();
  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );
      const data = await res.json();
      console.log("data", data);
      if (data?.data?.recipes) {
        setRecipeList(data.data.recipes);
        setLoading(false);
        setSearchParam("");
        navigate("/");
      }
    } catch (error) {
      console.log("error", error);
      setLoading(false);
      setSearchParam("");
    }
  }
  function handleAddtoFavourites(currentItem) {
    const copyFavouriteItems = [...favouritesList];
    const index = copyFavouriteItems.findIndex(
      (item) => item.id === currentItem.id
    );
    if (index === -1) {
      copyFavouriteItems.push(currentItem);
    } else {
      copyFavouriteItems.splice(index);
    }
    setFavouritesList(copyFavouriteItems);
    console.log("copyFavouriteItems", copyFavouriteItems);
  }

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        loading,
        recipeList,
        setSearchParam,
        handleSubmit,
        recipeDetails,
        setRecipeDetails,
        favouritesList,
        handleAddtoFavourites,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalStateContext;
