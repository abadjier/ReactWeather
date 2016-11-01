var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=a56e2b43d09fd85e5a259658b976ae97&units=metric';

// http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=a56e2b43d09fd85e5a259658b976ae97

// a56e2b43d09fd85e5a259658b976ae97

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    // use ES6 query string:
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    // use axios to fetch the results
    // axios takes a url, uses promises
    return axios.get(requestUrl).then(function (res) {

     // debugger;

      if (res.data.cod && res.data.message) {
        // something went wrong
        console.log(res);
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }

    }, function (res) {
      throw new Error(res.data.message);
    });
  }
};