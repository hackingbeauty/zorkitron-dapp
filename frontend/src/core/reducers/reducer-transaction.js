import constants from 'core/types'

const initialState = {
  firstToken: '',
  secondToken: '',
  transactionStatus: null,
  transactionProcessingMsg: '',
  showLoader: false
}

export function transactionReducer(state = initialState, action) {
  switch (action.type) {

    case constants.ADD_LIQUIDITY_TX:
      return Object.assign({}, state, {
        transactionStatus: action.payload.transactionStatus,
        transactionProcessingMsg: action.payload.transactionProcessingMsg,
        showLoader: action.payload.showLoader
      })

    
    case constants.SET_TOKENS:
      return Object.assign({}, state, {
        firstToken: action.payload.firstToken,
        secondToken: action.payload.secondToken
      })

    default:
      return state
  }
}

export default transactionReducer

