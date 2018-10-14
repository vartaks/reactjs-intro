var React = require('react');
var ReactDOM = require('react-dom');

class Button extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);

        this.state = { 
            counter: 0 
        };
    }

    handleClick() {
        this.setState((prevState) => ({
            counter: prevState.counter + 1
        }));
    };

    render() {
        return (
            <button onClick={this.handleClick}>
            {this.props.label} {this.state.counter}
            </button>
        );
    }
}

ReactDOM.render(<Button label='Value = '/>,  document.getElementById('app'));