# Fee Contract

Fee Contract is a Solidity smart contract that allows users to buy and sell tokens while applying a fee on each transaction. The contract extends the ERC20 standard, making it compatible with existing token standards and wallets.

## Features

- Token purchases: Users can buy tokens by sending Ether (ETH) to the contract. The contract calculates the corresponding amount of tokens based on a predefined conversion rate. A fee is applied to each purchase, which is transferred to a designated fee wallet.

- Token sales: Users can sell their tokens back to the contract and receive Ether in return. The contract calculates the amount of Ether based on the token amount and the conversion rate. A fee is applied to each sale, and the fee is transferred to the fee wallet.

- Flexible fee configuration: The contract allows for customization of the fee parameters, including the tax rate, additional charge, and conversion rate. This flexibility enables the contract owner to adjust the fee structure according to their specific requirements.

- Contract balance tracking: The contract keeps track of the accumulated Ether balance, providing visibility into the contract's financial state.

## Usage

### Contract Deployment

1. Compile the contract using Solidity version ^0.8.4.
2. Deploy the contract to a compatible blockchain network (e.g., Ethereum).
3. Provide the following parameters during deployment:
   - `feeWallet`: The address of the fee wallet where the collected fees will be sent.
   - `taxRate`: The percentage of the fee to be charged on each transaction (excluding additional charge).
   - `additionalCharge`: An additional fixed fee to be charged on each transaction (in ETH).
   - `conversionRate`: The conversion rate between Ether and tokens. This determines the number of tokens to be received per Ether sent.

### Buying Tokens

To buy tokens, call the `buyTokens` function, providing the desired Ether amount as a parameter. Ensure that the transaction includes enough Ether to cover the purchase.

```solidity
function buyTokens(uint256 ethAmount) external payable
```

The contract will calculate the corresponding token amount based on the provided Ether amount and the conversion rate. The tokens will be minted and assigned to the sender's address. A fee will be deducted from the provided Ether amount and transferred to the fee wallet.

### Selling Tokens

To sell tokens, call the `sellTokens` function, providing the desired token amount as a parameter. Ensure that you have enough tokens in your balance to perform the sale.

```solidity
function sellTokens(uint256 tokenAmount) external
```

The contract will calculate the corresponding Ether amount based on the provided token amount and the conversion rate. The tokens will be burned from the sender's address, and the corresponding Ether amount will be transferred back to the sender. A fee will be deducted from the token amount and transferred to the fee wallet.

### Events

The contract emits the following events:

- `TokensPurchased`: Triggered when tokens are successfully purchased. Includes the buyer's address, the Ether amount sent, and the corresponding token amount received.
- `TokensSold`: Triggered when tokens are successfully sold. Includes the seller's address, the token amount sold, and the corresponding Ether amount received.

## License

This contract is released under the MIT License. See the [LICENSE](./LICENSE) file for more information.

**Note:** This script assumes that the contract is deployed using the OpenZeppelin ERC20 implementation provided in the "@openzeppelin/contracts/token/ERC20/ERC20.sol" library. Ensure that the library is correctly imported and accessible during deployment.
