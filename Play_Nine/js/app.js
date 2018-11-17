const React = require('react'),
    ReactDOM = require('react-dom');

import { Game } from './components/Game.jsx';

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
