const API_KEY = import.meta.env.VITE_API_KEY
export async function getNationalParks(stateCode) {

    try {
        const response = await fetch(`https://developer.nps.gov/api/v1/parks?stateCode=${stateCode}&limit=12&api_key=${API_KEY}`
        );

        if (!response) {
            throw new Error("Failed to fetch Parks");
        }

        const data = await response.json();
        return data.data;
    } catch (err) {
        console.error(err);

    }
}