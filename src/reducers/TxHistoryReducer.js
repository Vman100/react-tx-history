const initialState = {address: '0x9334f0aa74d2744B97b0B1bE6896788eE46F4aAA', isLoading: false, hasErrored: false, history: []}

export function txHistoryReducer(state = initialState, action) {
    switch (action.type) {
        case 'TX_HISTORY_HAS_ERRORED':
            return {...state, ...action};
        case 'TX_HISTORY_IS_LOADING':
            return {...state, ...action};
        case 'GET_TX_HISTORY_SUCCESS':
            return {...state, ...action};
        default:
            return state;
    }
}

export default txHistoryReducer