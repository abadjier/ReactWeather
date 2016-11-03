var React = require('react');


//var WeatherMsg = (props) => {
 //var {temp, location} = props;
var WeatherMsg = ({temp, location}) => {
    return (
      <div>
        <h3 className="text-center">It is {temp}&deg;C in {location}.</h3>
      </div>
    );
};

module.exports = WeatherMsg;