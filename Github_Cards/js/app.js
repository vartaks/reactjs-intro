var React = require('react');
var ReactDOM = require('react-dom');

const Card = (props) => {
    return (
        <h1>Value is awesome!</h1>
    );
};

ReactDOM.render(<Card />,  document.getElementById('app'));