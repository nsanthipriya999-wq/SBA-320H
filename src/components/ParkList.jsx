import Park from "./Park.jsx";
export default function ParkList({parks,favorites=[],addFavorite,removeFavorite}) 
{
  if (!parks || parks.length === 0) {
     return (
      <p>
        No parks found.
      </p>
    );
  }
  return (
    <div className="display-container">
      {
        parks.map((park) => (
          <Park
            key={park.id}
            park={park}
            favorites={favorites}
            addFavorite={addFavorite}
            removeFavorite={removeFavorite}
          />
        ))
      }
    </div>
  );
}