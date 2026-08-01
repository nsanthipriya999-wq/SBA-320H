import { useEffect, useState, useContext } from "react";
import { FavoriteContext } from "../context/FavoriteContext.jsx"
import { getNationalParks } from "../services/api.js";
import ParkList from "../components/ParkList.jsx";
export default function Explore() {

    const [parks, setParks] = useState([]);
    const [search,setSearch]=useState("");
    const [stateCode, setStateCode] = useState("NJ");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

   

    //----------------------------Context for saving Favorites-------------------
     const {
         favorites,
         addFavorite,
         removeFavorite
    } = useContext(FavoriteContext);

console.log(favorites);

//------UseEffect for state changes-------------------------------------------
    useEffect(() => {
        loadParks();
    }, [stateCode]);

    //----------------------------------LoadParks()---------------------------------------------

    async function loadParks() {
        try {
            setLoading(true);
            setError("");

 //-----------------------Fetching data using api.js----------------------------------------------------
            const data = await getNationalParks(stateCode);
            setParks(data);
          } catch (error) {
             console.error(error);
            setError("Unable to load national parks.." );
        } finally {
            setLoading(false);
        }
    }
    {/*Fetches national parks when selected state changes using useEffect */}
    const selectParks = parks.filter((park) =>
        park?.fullName
            .toLowerCase()
            .includes(search.toLowerCase()));
    

   //--------------------------------Displays parks according to state selected--------------------------------

    return (
        <div className="explore-container">
            <h1>
                Explore National Parks
            </h1>
            <p>
                Discover beautiful national parks across America.
            </p>
            <div className="states">
                <select
                    value={stateCode}
                    onChange={(e) => setStateCode(e.target.value)
                    }>
                    <option value="NJ">
                       New Jersey
                     </option>
                     <option value="NY">
                        New York
                    </option>
                    <option value="CA">
                        California
                    </option>
                    <option value="AZ">
                        Arizona
                    </option>
                    <option value="UT">
                        Utah
                    </option>
                    <option value="CO">
                        Colorado
                    </option>
                    <option value="FL">
                        Florida
                    </option>
                    <option value="TX">
                        Texas
                    </option>
                    
                    <option value="WY">
                        Wyoming
                    </option>
                    
                </select>

                <input
                    type="text"
                    placeholder="🔎Search park..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <h3>
                ❤️ Favorites: {favorites.length}
            </h3>

            {loading && (
                <h2>
                    Loading parks...
                </h2>
            )}
            {error && (
                <h2>
                    {error}
                </h2>
            )}

     <ParkList
        parks={selectParks}
        favorites={favorites}
        addFavorite={addFavorite}
        removeFavorite={removeFavorite}
      />

    </div>
    )

}