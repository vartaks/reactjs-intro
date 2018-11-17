const React = require('react');

import { Stars } from './Stars.jsx';
import { Button } from './Button.jsx';
import { Answer } from './Answer.jsx';
import { Numbers } from './Numbers.jsx';

export class Game extends React.Component {
    constructor(props) {
        super(props);

        this.selectNumber = this.selectNumber.bind(this);
        this.unselectNumber = this.unselectNumber.bind(this);

        this.state = {
            selectedNumbers: [],
            randomNumberOfStars: 1 + Math.floor(Math.random() * 9)
        };
    }

    selectNumber(clickedNumber) {
        if (this.state.selectedNumbers.indexOf(clickedNumber) >= 0) {
            return;
        }

        this.setState(prevState => ({
            selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
        }));
    }

    unselectNumber(clickedNumber) {
        this.setState(prevState => ({
            selectedNumbers: prevState.selectedNumbers
                .filter(number => number !== clickedNumber)
        }));
    }

    render() {
        // Destructured the state object
        const { selectedNumbers, randomNumberOfStars } = this.state;

        return (
            <div className="container">
                <hr />
                <h3>Play Nine!</h3>
                <hr />
                <div className="row">
                    <Stars numberOfStars={randomNumberOfStars} />
                    <Button selectedNumbers={selectedNumbers}/>
                    <Answer selectedNumbers={selectedNumbers}
                        unselectNumber={this.unselectNumber}/>
                </div>
                <br />
                <Numbers selectedNumbers={selectedNumbers}
                    selectNumber={this.selectNumber}/>
            </div>
        );
    }
}
