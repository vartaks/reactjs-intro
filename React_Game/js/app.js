var React = require('react');
var ReactDOM = require('react-dom');

const Button = (props) => {
    return (
        <button>{props.label}</button>
    );
};

ReactDOM.render(<Button label='Click this!'/>,  document.getElementById('app'));