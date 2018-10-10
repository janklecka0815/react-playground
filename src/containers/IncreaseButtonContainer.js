import { connect } from 'react-redux';
import Button from '../components/Button';
import changeCounter from '../actions/changeCounter'

const mapStateToProps = () => {
        return {
            operation: '+'
        };
    },
    mapDispatchToProps = (dispatch) => {
        return {
            clickListener: () => {
                dispatch(changeCounter('add'));
            }
        };
    },
    IncreaseButtonContainer = connect(
        mapStateToProps,
        mapDispatchToProps
    )(Button);

export default IncreaseButtonContainer;