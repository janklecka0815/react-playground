import React from 'react';
import CounterDivContainer from '../containers/CounterDivContainer';
import DecreaseButtonContainer from '../containers/DecreaseButtonContainer';
import IncreaseButtonContainer from '../containers/IncreaseButtonContainer';

export default () => {
    return (
        <div>
            <CounterDivContainer/>
            <IncreaseButtonContainer/>
            <DecreaseButtonContainer/>
        </div>
    );
};