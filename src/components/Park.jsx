export default function Park({park,favorites,addFavorite,removeFavorite}) 
{
  const isFavorite = favorites?.some((fav) => fav.id === park.id) || false;
  return (
    <div className="display-card">
      <img
        src={park.images?.length? park.images[0].url: "https://placehold.co/400x300?text=No+Image"}
        alt={park.fullName}
      />
      <div className="card-content">
        <h2>
          {park.fullName}
        </h2>
        <p>
           {park.states}
        </p>
        <p>{park.description? park.description.substring(0, 15) + "..": "No description available."}
        </p>
        <button
  onClick={() => {
    isFavorite
      ? removeFavorite(park.id)
      : addFavorite(park);
  }}
>
  {isFavorite ? "❤️ Saved" : "🤍 Add Favorite"}
</button>
      </div>
    </div>

  );
}