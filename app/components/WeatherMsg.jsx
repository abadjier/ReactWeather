var React = require('react');


//var WeatherMsg = (props) => {
 //var {temp, location} = props;
var WeatherMsg = ({temp, location}) => {
    return (
      <div>
        <p>It is {temp}&deg;C in {location}.</p>
      </div>
    );
};

module.exports = WeatherMsg;