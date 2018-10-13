var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');

var App = createReactClass({
    render: function () {
        return (
            <div>
                <h2>Hello Sourabh! Welcome to the world of React!</h2>
            </div>
        );
    }
});

ReactDOM.render(<App/>,  document.getElementById("app"));