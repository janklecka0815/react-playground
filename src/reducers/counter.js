const counter = (state = 1, action) => {
    switch (action.type) {
        case 'CHANGE_COUNTER':
            return action.operation === 'add' ? state + 1 : state - 1;
        default:
            return state;
    }
};

export default counter;