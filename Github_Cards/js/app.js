var React = require('react');
var ReactDOM = require('react-dom');

const Card = (props) => {
    return (
        <div style={{margin:'1em'}}>
            <img width='75' src={props.avatar_url} />
            <div style={{display:'inline-block', marginLeft:10}}>
                <div style={{fontSize:'1.25em', fontWeight:'bold'}}>
                    {props.name}
                </div>
                <div>
                    {props.company}
                </div>
            </div>
        </div>
    );
};

const CardList = (props) => {
    return (
        <div>
            <Card name='Paul O’Shannessy'
                avatar_url='https://avatars1.githubusercontent.com/u/8445?v=4'
                company='Facebook'
            />
        </div>
    );
}

ReactDOM.render(<CardList />,  document.getElementById('app'));