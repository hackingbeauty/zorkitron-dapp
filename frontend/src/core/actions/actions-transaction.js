import constants from 'core/types'

export function addLiquidity(
  currency0,
  currency1,
  currency0Desired,
  currency1Desired,
  currency0Min,
  currency1Min,
  tickSpacing,
  liquidityProviderFee,
  showLoader
) {
  return {
    type: constants.ADD_LIQUIDITY,
    currency0,
    currency1,
    currency0Desired,
    currency1Desired,
    currency0Min,
    currency1Min,
    tickSpacing,
    liquidityProviderFee,
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
