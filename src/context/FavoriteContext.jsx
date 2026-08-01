// Provider component
import { createContext, useState, useEffect } from "react";
// stores favorites globally
export const FavoriteContext = createContext();
export function FavoriteProvider({ children }) {


  const [favorites, setFavorites] = useState(() => {

    const savedFavorites =
      localStorage.getItem("favorites");

    return savedFavorites
      ? JSON.parse(savedFavorites)
      : [];

  });



  // Save favorites whenever they change
  useEffect(() => {

    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites)
    );

  }, [favorites]);




  // Add park to favorites
  function addFavorite(park) {

    const exists = favorites.some(
      (item) => item.id === park.id
    );


    if (!exists) {

      setFavorites([
        ...favorites,
        park
      ]);

    }

  }




  // Remove park from favorites
  function removeFavorite(id) {

    setFavorites(
      favorites.filter(
        (park) => park.id !== id
      )
    );

  }




  return (

    <FavoriteContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite
      }}
    >

      {children}

    </FavoriteContext.Provider>

  );

}



