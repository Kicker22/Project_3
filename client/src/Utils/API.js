import axios from "axios";
const BASEURL = "https://cors-anywhere.herokuapp.com/https://api.meetup.com/find/topics?query=";


export default {
  search: function(query) {
    console.log("results", query);
    return axios.get(BASEURL + query); 
  }
};