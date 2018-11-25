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

    static possibleCombinationSum(arr, n) {
        if (arr.indexOf(n) >= 0) {
            return true;
        }

        if (arr[0] > n) {
            return false;
        }

        if (arr[arr.length - 1] > n) {
            arr.pop();
            return possibleCombinationSum(arr, n);
        }

        var listSize = arr.length, combinationsCount = (1 << listSize)

        for (var i = 1; i < combinationsCount; i++) {
            var combinationSum = 0;

            for (var j = 0; j < listSize; j++) {
                if (i & (1 << j)) {
                    combinationSum += arr[j];
                }
            }

            if (n === combinationSum) {
                return true;
            }
        }

        return false;
    };

    constructor(props) {
        super(props);

        this.selectNumber = this.selectNumber.bind(this);
        this.unselectNumber = this.unselectNumber.bind(this);
        this.checkAnswer = this.checkAnswer.bind(this);
        this.acceptAnswer = this.acceptAnswer.bind(this);
        this.redraw = this.redraw.bind(this);
        this.updateDoneStatus = this.updateDoneStatus.bind(this);

        this.state = {
            selectedNumbers: [],
            randomNumberOfStars: Game.randomNumber(),
            usedNumbers: [],
            answerIsCorrect: null,
            redraws: 5,
            doneStatus: null
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
        }), this.updateDoneStatus // Since setState function is asynchronous, 
            // we cannot call updateDoneStatus function after setState function 
            // but need to pass it as an additional argument
        );
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
        }), this.updateDoneStatus // Since setState function is asynchronous, 
            // we cannot call updateDoneStatus function after setState function 
            // but need to pass it as an additional argument
        );
    }

    possibleSolutions = ({ randomNumberOfStars, usedNumbers }) => {
        const possibleNumbers = _.range(1, 10).filter(number =>
            usedNumbers.indexOf(number) === -1
        );

        return Game.possibleCombinationSum(possibleNumbers, randomNumberOfStars);
    }

    updateDoneStatus() {
        this.setState(prevState => {
            if (prevState.usedNumbers.length === 9) {
                return {
                    doneStatus: 'Done. Nice!'
                };
            }

            if (prevState.redraws === 0 && !this.possibleSolutions(prevState)) {
                return {
                    doneStatus: 'Game Over!'
                };
            }
        });
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
