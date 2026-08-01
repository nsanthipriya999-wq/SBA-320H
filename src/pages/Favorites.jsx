

import { useContext } from "react";
import { FavoriteContext } from "../context/FavoriteContext.jsx";
import ParkList from "../components/ParkList.jsx";

export default function Favorites()
{
  const {favorites,removeFavorite} = useContext(FavoriteContext);

  return (
    <div className="explore-container">
      <h1>
        My Favorite Parks ❤️
      </h1>
      <ParkList
        parks={favorites}
        favorites={favorites}
        removeFavorite={removeFavorite}
      />
    </div>
  );


}