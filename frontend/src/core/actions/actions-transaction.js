import constants from 'core/types'

export function depositLiquidity(toAddress, amount, showLoader) {
  return {
    type: constants.DEPOSIT_LIQUIDITY,
    toAddress,
    amount,
    showLoader
  }
}

export function changeContractOwner(newOwner, showLoader) {
  return {
    type: constants.CHANGE_CONTRACT_OWNER,
    newOwner,
    showLoader
  }
}
