import config from './config.js'
const axios = require('axios').default;
const URL_BASE = "https://ws.audioscrobbler.com/"

const apiKey = config.apiKey;
const URL_GEO = "2.0/?method=geo.gettopartists&country=spain&api_key="+apiKey+"&format=json";
const URL_TRACKS = "2.0/?method=geo.gettoptracks&country=spain&api_key="+apiKey+"&format=json";
const URL_TAGS = "2.0/?method=chart.gettoptags&api_key="+apiKey+"&format=json";

async function getArtist() {
try {
    const response = await axios.get(`${URL_BASE}${URL_GEO}`);
    return response
 }  catch (error) {
    console.error(error)
  }
}

async function getTopTracks() {
    try {
        const response = await axios.get(`${URL_BASE}${URL_TRACKS}`);
        return response
    } catch (error) {
        console.error(error)
    }
}

async function getTopTags() {
    try {
        const response = await axios.get(`${URL_BASE}${URL_TAGS}`);
        return response
   } catch (error) {
       console.error(error)
   }

}

export default {
    getArtist,
    getTopTracks,
    getTopTags
}