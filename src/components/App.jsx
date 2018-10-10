import React from 'react';
import CounterDivContainer from '../containers/CounterDivContainer';
import DecreaseButtonContainer from '../containers/DecreaseButtonContainer';
import IncreaseButtonContainer from '../containers/IncreaseButtonContainer';

class App extends React.Component {
    render() {
        return (
            <div>
                <CounterDivContainer/>
                <IncreaseButtonContainer/>
                <DecreaseButtonContainer/>
            </div>
        );
    }
}

export default App;