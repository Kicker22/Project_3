import axios from "axios";
<<<<<<< HEAD
const BASEURL = "https://api.meetup.com/find/topics?query= ";
=======
const BASEURL = "https://cors-anywhere.herokuapp.com/https://api.meetup.com/find/topics?query=";
>>>>>>> 1d9f06683270c60789789b391d25ecb5f541a565


export default {
  search: function(query) {
<<<<<<< HEAD
    return axios.get(BASEURL + query);
  }
};
=======
    console.log("results", query);
    return axios.get(BASEURL + query); 
  }
};
>>>>>>> 1d9f06683270c60789789b391d25ecb5f541a565
