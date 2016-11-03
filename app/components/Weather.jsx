var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMsg = require('WeatherMsg');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    }
  },  
  handleSearch: function(location){
    // to preserve access to this inside the 2nd function
    var that = this;
        
    this.setState({ isLoading: true });

    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });

    }, function (errorMessage) {
      alert(errorMessage);
      that.setState({isLoading: false});
    });
  
  },
  render: function () {
    var {isLoading, temp, location} = this.state;

    function renderMessage () {
        if (isLoading) {
          return <h3 className="text-center">Fetching weather...</h3>;
        } else if(temp && location) {
          return <WeatherMsg location={location} temp={temp} />;
        }
    }

    

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
      </div>

    );
  }
});

module.exports = Weather;