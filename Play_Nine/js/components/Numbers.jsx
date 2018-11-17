const _ = require('lodash');
const React = require('react');

// array of numbers from 1 to 9
const NumbersList = _.range(1, 10);

export class Numbers extends React.Component {
    constructor(props) {
        super(props);

        this.numberClassName = this.numberClassName.bind(this);
    }

    numberClassName(number) {
        if (this.props.selectedNumbers.indexOf(number) >= 0) {
            return 'selected';
        }
    }

    render() {
        return (
            <div className="card text-center">
                <div>
                    {NumbersList.map((number, i) =>
                        <span key={i} className={this.numberClassName(number)}
                            onClick={() => this.props.selectNumber(number)}>
                            {number}
                        </span>
                    )}
                </div>
            </div>
        );
    }
}
