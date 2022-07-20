
const initialState = {
    sum: null,
};

const reducer = (state = initialState, action) => {
    if (action.type === 'NUMBER') {
        console.log(action.payload);
        if (state.sum === null) {
            return {...state, sum: action.payload};
        }
        return {...state, sum: state.sum + action.payload};
    }

    if (action.type === 'SUM') {
        console.log(state.sum);
        return {...state, sum: eval(state.sum)};
    }

    return state;
};

export default reducer;