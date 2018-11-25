const React = require('react');

export const DoneFrame = (props) => {
    return (
        <div className="text-center">
            <h2>{props.doneStatus}</h2>
            <button className="btn btn-secondary"
                onClick={props.resetGame}>
                Play Again
            </button>
        </div>
    );
}