---
sidebar_position: 1
---

# Network Integration

## Creating a wallet

### Installing Neatio Javascript API 

Neatio Javascript API is available as npm package:

```bash
npm i neatioapi
```

Usage:

```bash
const Account = require("neatioapi").account;

const account = Account.create();

console.log(account)
```

Output:

`
{ 
 address: '0x27b2369A035723b94E5023284745b7Fb72dADB38',
 privateKey: '2225ab03e6ec51f2b178b2b596219ac40d2b15e7314d29ed236fb47416e66d9b' 
}
`

## Sending transactions

### Installing Web3 Javascript API 


```bash
npm install web3@1.2.6
```

Usage

```bash
const Account = require("neatioapi").account;
const Nat = require("neatioapi").nat;
const Utils = require("neatioapi").utils;
const URL = "https://rpc.neatio.net";
const Web3 = require("web3");
const web3 = new Web3("https://rpc.neatio.net");

async neatSend() {
      const privateKey = "0x" + "2225ab03e6ec51f2b178b2b596219ac40d2b15e7314d29ed236fb47416e66d9b";
      const account = web3.eth.accounts.privateKeyToAccount(privateKey);
      const addressFrom = account.address;
      const amountToSend = "50";
      const addressTo = "0x9d8A62f656a8d1615C1294fd71e9CFb3E4855A4F";

      const createTransaction = await web3.eth.accounts.signTransaction(
        {
          from: addressFrom,
          to: addressTo,
          value: web3.utils.toWei(`${amountToSend}`, "ether"),
          gas: "53000",
        },
        privateKey
      );

      const txHash = await web3.eth.sendSignedTransaction(
        createTransaction.rawTransaction
      );

      console.log(`Transaction confirmed with hash: ${txHash.transactionHash}`);
    }
```







