const React = require('react');

export const Button = (props) => {
    return (
        <div className="col-2">
            <button className="btn" 
                disabled={props.selectedNumbers.length === 0}>
                Check
            </button>
        </div>
    );
}