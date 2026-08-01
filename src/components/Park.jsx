export default function Park({ park, favorites, addFavorite, removeFavorite }) {
  const isFavorite = favorites?.some((fav) => fav.id === park.id) || false;
  return (
    <div className="display-card">
      <img
        src={park.images?.length ? park.images[0].url : "https://placehold.co/400x300?text=No+Image"}
        alt={park.fullName}
      />

      <div className="card-content">
        <h3>
          {park.fullName}
        </h3>
        <p>
          {park.states}
        </p>
        <p>{park.description ? park.description.substring(0, 120) + ".." : "No description available."}
        </p>

         <div className="card-button">
          {/* opens the website url in a new tab with security  */}
          <a
            href={park.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore More....
          </a>

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
    </div>

  );
}