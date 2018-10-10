import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.render = this.render.bind(this);
    }

    render() {
        return <button onClick={this.props.clickListener}>{this.props.operation}</button>
    }
}

export default Button;