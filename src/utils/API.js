import axios from "axios";
const APIURL = "https://randomuser.me/api/?results=100"

// TODO: change results back to 100 

export default {
  search: function(query) {
    return axios.get(APIURL);

  }
};