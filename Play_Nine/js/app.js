var React = require('react');
var ReactDOM = require('react-dom');

const Stars = (props) => {

    // Random number of stars between 1 and 9
    const numberOfStars = 1 + Math.floor(Math.random() * 9);

    let stars = [];

    for (let i=0; i<numberOfStars; i++) {
        stars.push(<i key={i} className="fa fa-star"></i>);
    }

    return (
        <div className="col-5">
            {stars}
        </div>
    );
}

const Button = (props) => {
    return (
        <div className="col-2">
            <button>=</button>
        </div>
    );
}

const Answer = (props) => {
    return (
        <div className="col-5">
            answer...
        </div>
    )
}

const Numbers = (props) => {
    return (
        <div className="card text-center">
            <div>
                <span>1</span>
                <span className="selected">2</span>
                <span className="used">3</span>
            </div>
        </div>
    );
}

class Game extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <h3>Play Nine!</h3>
                <hr />
                <div className="row">
                    <Stars />
                    <Button />
                    <Answer />
                </div>
                <br />
                <Numbers />
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
