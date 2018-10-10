const changeCounter = (operation) => {
    return {
        type: "CHANGE_COUNTER",
        operation: operation
    }
};

export default changeCounter;