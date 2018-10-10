import React from 'react';

export default (props) => {
    return <button onClick={props.clickListener}>{props.operation}</button>
};