import {combineReducers} from 'redux';
import color from './color';
import counter from './counter';


export default combineReducers({
    color: color,
    counter: counter
});