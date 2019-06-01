/*
 * Concatenation process:
 * Url?apikey=Key&s=
 * 
 * Example result: https://www.omdbapi.com/?apikey=APIKEYVALUE&s=
 * 
 * Essentially, the app will add a query string (e.g `John+Wick`) to the above 
 * result and send a request to the API via axios.
 * 
 * Final result may look like: https://www.omdbapi.com/?apikey=APIKEYVALUE&s=John+Wick
 * 
 * Replace the Key below with your own to get the app working.
 */

const API = {
    Url: 'https://www.omdbapi.com/',
    Key: 'yourapikey'
};

const localhost = `http://localhost:5000/api`;

export { API, localhost };