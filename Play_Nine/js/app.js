var React = require('react');
var ReactDOM = require('react-dom');

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h3>Hola y bienvenidos a "Play Nine"!</h3>
            </div>
        );
    }
}

ReactDOM.render(<App />,  document.getElementById('app'));
