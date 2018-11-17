const React = require('react');

import { Stars } from './Stars.jsx';
import { Button } from './Button.jsx';
import { Answer } from './Answer.jsx';
import { Numbers } from './Numbers.jsx';
import { DoneFrame } from './DoneFrame.jsx';

export class Game extends React.Component {
    static randomNumber() {
        return 1 + Math.floor(Math.random() * 9);
    }

    constructor(props) {
        super(props);

        this.selectNumber = this.selectNumber.bind(this);
        this.unselectNumber = this.unselectNumber.bind(this);
        this.checkAnswer = this.checkAnswer.bind(this);
        this.acceptAnswer = this.acceptAnswer.bind(this);
        this.redraw = this.redraw.bind(this);

        this.state = {
            selectedNumbers: [],
            randomNumberOfStars: Game.randomNumber(),
            usedNumbers: [],
            answerIsCorrect: null,
            redraws: 5,
            doneStatus: 'Game Over!'
        };
    }

    selectNumber(clickedNumber) {
        if (this.state.selectedNumbers.indexOf(clickedNumber) >= 0) {
            return;
        }

        this.setState(prevState => ({
            answerIsCorrect: null,
            selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
        }));
    }

    unselectNumber(clickedNumber) {
        this.setState(prevState => ({
            answerIsCorrect: null,
            selectedNumbers: prevState.selectedNumbers
                .filter(number => number !== clickedNumber)
        }));
    }

    checkAnswer() {
        this.setState(prevState => ({
            answerIsCorrect: prevState.randomNumberOfStars ===
                prevState.selectedNumbers.reduce((acc, n) => acc + n, 0)
        }));
    }

    acceptAnswer() {
        this.setState(prevState => ({
            usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
            selectedNumbers: [],
            answerIsCorrect: null,
            randomNumberOfStars: Game.randomNumber()
        }));
    }

    redraw() {
        if (this.state.redraws === 0) {
            return;
        }

        this.setState(prevState => ({
            randomNumberOfStars: Game.randomNumber(),
            answerIsCorrect: null,
            selectedNumbers: [],
            redraws: prevState.redraws - 1
        }));
    }

    render() {
        // Destructured the state object
        const {
            selectedNumbers,
            randomNumberOfStars,
            answerIsCorrect,
            usedNumbers,
            redraws,
            doneStatus
        } = this.state;

        return (
            <div className="container">
                <hr />
                <h3>Play Nine!</h3>
                <hr />
                <div className="row">
                    <Stars numberOfStars={randomNumberOfStars} />

                    <Button selectedNumbers={selectedNumbers}
                        redraws={redraws}
                        checkAnswer={this.checkAnswer}
                        acceptAnswer={this.acceptAnswer}
                        redraw={this.redraw}
                        answerIsCorrect={answerIsCorrect} />

                    <Answer selectedNumbers={selectedNumbers}
                        unselectNumber={this.unselectNumber} />
                </div>
                <br />
                {doneStatus ?
                    <DoneFrame doneStatus={doneStatus} /> :
                    <Numbers selectedNumbers={selectedNumbers}
                        selectNumber={this.selectNumber}
                        usedNumbers={usedNumbers} />
                }
            </div>
        );
    }
}
