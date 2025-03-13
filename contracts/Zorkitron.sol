// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import {PoolKey} from "v4-core/src/types/PoolKey.sol";
import {IPoolInitializer_v4} from "v4-core/src/interfaces/IPoolInitializer_v4.sol";

contract Zorkitron  {

    // Uniswap v4 NFT Position <--> ETH
    // Step 1 - figure out how to GET a Unisap v4 NFT position
    // Step 2 - figure out how to get the user to authorize transfer of it to you
    // Step 3 - figure out how to convert the Uniswap v4 NFT position into a G-UNI that AAVE/MakerDAO/INSTADAPP would accept as collatera
    // Step 4 - Lock your Uniswap v4 G-UNI as collateral into AAVE/MakerDAO/COMPOUND to get something you could trade for ETH
    // Step 5 - Bingo!  Now you got your ETH!

    // Does compound take G-UNI as collatera? 
    //https://www.comp.xyz/t/nextosi-contracts-that-enable-uniswap-lp-tokens-as-collateral-on-compound/6194


    // You have to make sure what collateral types MakerDAO and AAVE support - how do you find this?



    // Create and deploy a new token called "Uniswap v4 G-UNI" - deploy it to sepolia
    // (You need to deploy your own G-UNI ERC20 wrapper for a Uniswap v4 LP NFT (PositionManager))
    // It returns ERC20 tokens - basically your input is a Uniswap v4 LP NFT and output is ERC20
    // Then...you deposit the G-UNI into a lending protocol like either AAVE or MakerDAO
    // you take the DAI tokens and conver them to ETH...then you can stake that into PoS
    // deposit liquidity into Uniswap
    // take liquidity tokens and deposit as collateral into MakerDAO for DAI
    // go back to Uniswap and swap DAI for ETH
    // take ETH and state into a validator (do you need 32 ETH?)
    // this process should be tokenized

    // now when you go to withdraw your token...it should get you back the rewards
    // rewards in the form of what?

    function _addLiquidity(
        address tokenA,
        address tokenB,
        uint amountADesired,
        uint amountBDesired,
        uint amountAMin,
        uint amountBMin
    ) internal virtual returns (uint amountA, uint amountB) {
   
        bytes[] memory params = new bytes[](2);

        PoolKey memory pool = PoolKey({
            currency0: currency0,
            currency1: currency1,
            fee: lpFee,
            tickSpacing: tickSpacing,
            hooks: hookContract
        });
        
        bytes memory actions = abi.encodePacked(uint8(Actions.MINT_POSITION), uint8(Actions.SETTLE_PAIR));
   
    }

    function addLiquidity(address tokenA, address tokenB, uint amount) external returns(uint liquidity) {
        (amountA, amountB) = _addLiquidity(tokenA, tokenB, amountADesired, amountBDesired, amountAMin, amountBMin);



        //first check if pool for two tokens already exists
        //if it doesnt then create one

        //Mint position first : https://docs.uniswap.org/contracts/v4/quickstart/manage-liquidity/mint-position
    }


}