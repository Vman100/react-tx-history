import React, {Component} from 'react'
import {ethers} from 'ethers'
import {connect} from 'react-redux'
import {getTxHistory} from './action.js'
import './txHistoryComp.css'

class TxHistoryComponent extends Component {
	componentDidMount(){
		const {address, getTxHistory} = this.props
		getTxHistory(address)
	}

	render() {
		const {address, history, isLoading} = this.props
		let result
		if(isLoading){
			result = <h1>...Loading</h1> 
		} else {
			result = <ul>{history.map((tx, index) => (
				<li key={index}>to: {tx.to}, from: {tx.from}, value: {ethers.utils.formatUnits(tx.value,"ether")} Ether</li>
			))}</ul>
		}
		return(
			<div>
			<p>Transaction History from {address}</p>
			{result}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
  return {
		address: state.txHistory.address,
		history: state.txHistory.history,
		isLoading: state.txHistory.isLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTxHistory: (address) => {
      dispatch(getTxHistory(address))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(TxHistoryComponent)