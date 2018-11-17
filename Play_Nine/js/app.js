var React = require('react');
var ReactDOM = require('react-dom');

const Stars = (props) => {
    return (
        <div>
            stars...
        </div>
    );
}

const Button = (props) => {
    return (
        <div>
            butt...
        </div>
    );
}

const Answer = (props) => {
    return (
        <div>
            answer...
        </div>
    )
}

class Game extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h3>Play Nine!</h3>
                <Stars />
                <Button />
                <Answer />
            </div>
        );
    }
}


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Game />
            </div>
        );
    }
}

ReactDOM.render(<App />,  document.getElementById('app'));
