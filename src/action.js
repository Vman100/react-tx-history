import {ethers} from 'ethers'
const etherscanProvider = new ethers.providers.EtherscanProvider();

export function txHistoryHasErrored(bool) {
  return {
      type: 'TX_HISTORY_HAS_ERRORED',
      hasErrored: bool
  };
}

export function txHistoryIsLoading(bool) {
  return {
      type: 'TX_HISTORY_IS_LOADING',
      isLoading: bool
  };
}

export function getTxHistorySuccess(history) {
  return {
      type: 'GET_TX_HISTORY_SUCCESS',
      history
  };
}

export function getTxHistory(address) {
  return (dispatch) => {
    dispatch(txHistoryIsLoading(true));
    etherscanProvider.getHistory(address).then((history) => {
      dispatch(txHistoryIsLoading(false));
      return history;
    })
    .then((history) => dispatch(getTxHistorySuccess(history)))
    .catch(() => dispatch(txHistoryHasErrored(true)));
  };
}