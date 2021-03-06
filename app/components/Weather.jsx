var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMsg = require('WeatherMsg');
var ErrorModal = require('ErrorModal');
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
        
    // set errorMessage to undefined to clear old error when a new serch starts
    this.setState({ 
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined
   });

    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });

    }, function (e) {      
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });
  
  },
  componentDidMount: function () {
    // pull location off the query in the URL string
    var location = this.props.location.query.location;

    if (location && location.length > 0) {
      this.handleSearch(location);
      //remove location from search link
      window.location.hash = '#/';
    }
  },
  componentWillReceiveProps: function (newProps) {
    // gets called everytime thecomponent's props are updated

    // pull location off the query in the URL string
    var location = newProps.location.query.location;

    if (location && location.length > 0) {
      this.handleSearch(location);
      //remove location from search link
      window.location.hash = '#/';
    }
  },
  render: function () {
    var {isLoading, temp, location, errorMessage} = this.state;

    function renderMessage () {
        if (isLoading) {
          return <h3 className="text-center">Fetching weather...</h3>;
        } else if(temp && location) {
          return <WeatherMsg location={location} temp={temp} />;
        }
    }

    function renderError () {
      if(typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        )
      }
    }    

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
        {renderError()}
      </div>

    );
  }
});

module.exports = Weather;