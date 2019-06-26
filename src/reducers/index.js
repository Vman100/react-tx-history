import {combineReducers} from 'redux'
import txHistoryReducer from './TxHistoryReducer'

export default combineReducers({
    txHistory: txHistoryReducer
})

