const color = (state = 'black', action) => {
    switch (action.type) {
        case 'CHANGE_COUNTER':
            return action.operation === 'add' ? 'green' : 'red';

        default:
            return state;
    }
};

export default color;