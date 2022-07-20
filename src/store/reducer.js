const initialState = {
    sum: null,
};

const reducer = (state = initialState, action) => {
    if (action.type === 'NUMBER') {
        if (state.sum === null) {
            return {...state, sum: action.payload};
        }
        return {...state, sum: state.sum + action.payload};
    }

    if (action.type === 'SUM') {
        return {...state, sum: String(eval(state.sum))};
    }

    if (action.type === 'DELETE_LAST') {
        return {...state, sum: state.sum.slice(0, -1)}
    }

    if (action.type === 'DELETE_ALL') {
        return {...state, sum: null}
    }

    return state;
};

export default reducer;