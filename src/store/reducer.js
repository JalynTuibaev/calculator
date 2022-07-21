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
        if (state.sum === null) {
            return {...state, sum: null};
        }
        try {
            const total = eval(state.sum);
            return {...state, sum: String(total)};
        } catch (e) {
            alert('Неправильная операция');
        }
    }

    if (action.type === 'DELETE_LAST') {
        if (state.sum === null) {
            return {...state, sum: null};
        }
        return {...state, sum: state.sum.slice(0, -1)}
    }

    if (action.type === 'DELETE_ALL') {
        return {...state, sum: null};
    }

    return state;
};

export default reducer;