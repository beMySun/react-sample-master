



// var React = require('react');

// class App extends React.Component {

// }
// React.render(<App/>, document.getElementById("app"));



var React = require('react');
var styles = {
	color:"red",
	marginTop:"100px"
};
class Hello extends React.Component {
  render() {
    return (
      <h1 style={styles}>Hello {this.props.name}!</h1>
    );
  }
}


module.exports = Hello;