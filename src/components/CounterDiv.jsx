import React from 'React';

class CounterDiv extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const style = {
            color: this.props.color
        };

        return <div style={style}>{this.props.value}</div>
    }
}

export default CounterDiv;