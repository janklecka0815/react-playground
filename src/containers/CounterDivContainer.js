import { connect } from 'react-redux';
import CounterDiv from '../components/CounterDiv';

const mapStateToProps = (state) => {
        return {
            value: state.counter,
            color: state.color
        };
    },
    mapDispatchToProps = () => {
        return {};
    },
    CounterDivContainer = connect(
        mapStateToProps,
        mapDispatchToProps
    )(CounterDiv);

export default CounterDivContainer;
