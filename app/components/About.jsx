var React = require('react');

// var About = React.createClass({
//   render: function () {
//     return (
//       <h3>About Component</h3>
//     );
//   }
// });

// use stateless functional component
// ***********************************************
// var About = function(props) {
//   return (
//     <h3>About Component</h3>
//   );
// };

// simplify further... use arrow function
var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>This is a simple weather applicaton built on React</p>
      <p>Here are some of the tools I used:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the JavaScript framework used.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - I used Open Weather Map to search for weather data by city name.
        </li>
      </ul>
    </div>    
  );
};

module.exports = About;