import axios from "axios";
// const BASEURL = "https://www.omdbapi.com/?t=";
// const APIKEY = "&apikey=trilogy";
const APIURL = "https://randomuser.me/api/?results=100"

export default {
  search: function(query) {
    // return axios.get(BASEURL + query + APIKEY);
    return axios.get(APIURL);

  }
};