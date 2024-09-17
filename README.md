# TicketMaster App

Welcome to the **TicketMaster App** 🎫 – your gateway to unforgettable events! With our app, you can browse upcoming concerts, purchase tickets, and get instant confirmations. Built using React, Vite, and Tailwind CSS, it's designed to offer a seamless and visually appealing experience.

## 🚀 Features

- **Browse Events**: View a list of exciting events with details including date, venue, and availability.
- **Responsive Design**: A sleek and modern interface that looks great on any device.
- **MetaMask Integration**: Connect your MetaMask wallet to purchase tickets securely with Ethereum.
- **Real-Time Purchase**: Buy tickets instantly and receive a confirmation of your purchase.

## 🛠️ Technologies Used

- **React**: For building a dynamic user interface.
- **Vite**: For fast and efficient development.
- **Tailwind CSS**: For a beautiful and responsive design.
- **Ethers.js**: For interacting with the Ethereum blockchain.

## 📦 Getting Started

### Prerequisites

Before you get started, make sure you have the following:

- 🖥 [Node.js](https://nodejs.org/)
- 📦 [npm](https://www.npmjs.com/) (usually installed with Node.js)
- 🔐 [Metamask](https://metamask.io/)
- 💰 Ethereum wallet with testnet ETH

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/neethu-muthu/CertiLink-DApp.git
   cd UI
   
2. Install dependencies

```
npm install
```
```
npm i hardhat
```
```
npm hardhat compile
```
Add a main network to hardhat.config.
- here im using sepolia and infura 
- add your api key for your sepolia from infura
- add your metamask private key 
eg.
```
module.exports = {
  defaultNetwork:"infurasepolia",
  networks: {
    localhost: {
      url:"http://127.0.0.1:8545/"
    },
    infurasepolia: {
      url :"your api key of infura or any other accounts",
      accounts:["your metamask private key"]
    }
  },
  solidity: "0.8.20",
};
```
```
npx hardhat node
```
open another terminal in vscode(ctrl+shift+`)

```
npx hardhat ignition deploy ignition/modules/Cert.js
``` 
open another terminal in vscode(ctrl+shift+`)

```
cd ui
npm i 
```
Go to folder src/SCdata

- add Abi code to cert.json file
- add deployed address to deployedaddress.json(deployed address will get after deploying the contract)
  
```
npm run dev
```
- connect your metamask
- issue certificate
- enter details
- make payment in metamask
- after metamask confirm get you ticket 
---
