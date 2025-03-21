import constants from 'core/types'
import { takeEvery, select, put, call } from 'redux-saga/effects'
import { parseUnits, Contract, formatUnits } from 'ethers'
import { getContractAddressFromChainId } from 'core/libs/lib-rpc-helpers'
import ZorkitronABI from "../../../../artifacts/contracts/Zorkitron.sol/Zorkitron.json"

export function* addLiquidity() {
    const { metaMaskAccount } = yield select(state => state.provider)
    const { toAddress, amount } = action
  
    if(window.ethereum) {
      /* If user is logged into MetaMask, execute tx (transaction).
          Otherwise, prompt user to install MetaMask
      */
      if(metaMaskAccount && metaMaskAccount.length) {
        const { signer, chainId } =  yield select(state => state.provider)
        const contractAddress = getContractAddressFromChainId(chainId)
        
        // Connected to a Signer; can make state changing transactions,
        // which will cost the account ether.
        const contract = new Contract(
          contractAddress,
          ZorkitronABI.abi,
          signer
        )
        debugger
        yield put({
          type: constants.ADD_LIQUIDITY_MSG,
          payload: { 
            transactionProcessingMsg: `Depositing tokens in this amount: ${amount}`
          }
        })
  
        try {
          debugger
          // Send the transaction
          const tx= yield call([contract,'addLiquidity'], currency0, parseUnits(amount, 18))
          const txReceipt = yield call([tx,'wait'])
          console.log('---- deposit liquidity receipt is: ----', txReceipt)
          const transactionStatus = `${amount} tokens credited to ${toAddress}`
          const updatedTotalSupply = formatUnits(yield call([contract,'totalSupply']), 18)
  
          yield put({
            type: constants.MINT_TOKENS_TX,
            payload: { 
              transactionStatus,
              showLoader: false,
              txReceipt
            }
          })
  
          yield put({
            type: constants.UPDATE_TOKEN_INFO,
            payload: { totalSupply: updatedTotalSupply }
          })
        } catch(e) {
          const errorToStr = JSON.stringify(e)
          const errorObj = JSON.parse(errorToStr)
          const { shortMessage } = errorObj
          const transactionStatus = `Transaction Failed: ${shortMessage}`
  
          yield put({
            type: constants.MINT_TOKENS_TX,
            payload: { 
              transactionStatus,
              showLoader: false
            }
          })
        }
      } else {
        yield put({ type: constants.OPEN_RIGHT_DRAWER });
      }
    } else {
      yield put({
        type: constants.DISPLAY_METAMASK_INSTALL_PROMPT,
        payload: { modalKey: 'install-metamask-prompt' }
      });
    }
}

export function* watchTransactionActions() {
  yield takeEvery(constants.ADD_LIQUIDITY, addLiquidity);
}
