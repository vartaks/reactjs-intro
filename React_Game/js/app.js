var React = require('react');
var ReactDOM = require('react-dom');

class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button>{this.props.label}</button>
        );
    }
}

ReactDOM.render(<Button label='Click this!'/>,  document.getElementById('app'));