// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

contract Zorkitron  {

    // deposit liquidity into Uniswap
    // take liquidity tokens and deposit as collateral into MakerDAO for DAI
    // go back to Uniswap and swap DAI for ETH
    // take ETH and state into a validator (do you need 32 ETH?)
    // this process should be tokenized

    // now when you go to withdraw your token...it should get you back the rewards
    // rewards in the form of what?

    function depositLiquidity(address tokenA, address tokenB) external returns(uint liquidity) {

        // step 1 - uint liquidity = IUniswapV3Router03(routerAddr).addLiquidity();
        // step 2 - uint daiTokens = IMakerDAO(makerDAOAddr).depositCollateral(liquidity);

    
        // step 3 - uint ethTokens = IUniswapV3Router03(routerAddr).swap(daiTokens);

        // Staking URLS:
        // https://www.staking.directory/
        // https://docs.rocketpool.net/guides/staking/overview
        // https://help.lido.fi/en/collections/2947324-staking-with-lido
        // https://solidity-by-example.org/defi/staking-rewards/
    }


}