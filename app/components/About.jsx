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
      <h3>About</h3>
      <p>Welcome to the About page</p>
    </div>
    
  );
};

module.exports = About;