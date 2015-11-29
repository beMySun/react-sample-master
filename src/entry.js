



// 引入组件
require('./components/Hello');

var React = require('react');

 // example-1

var Hello = require('./components/Hello');
	React.render(
		<Hello name="KK"/>,
		document.getElementById('example')
	);

// ---------------------------------------------------

// example-2
// var HelloWorld = React.createClass({
//     render: function () {
//         return (
//             <div>Hello,{this.props.name} !
//             It is {this.props.date.toTimeString()}</div>
//         );
//     }
// });

// setInterval(function () {
//     React.render(
//         <HelloWorld date={new Date()} name="kk" />,
//         document.getElementById('example')
//     );
// }, 500);



