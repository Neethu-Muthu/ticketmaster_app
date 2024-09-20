# 🎟️ TicketMaster App

![TicketMaster App Image](Frontend/src/assets/images/Screenshot%20from%202024-09-21%2001-47-35%20(1).png)


Welcome to the **TicketMaster App** – your ultimate ticketing experience for unforgettable events! With our app, you can easily browse upcoming concerts, purchase tickets, and receive instant confirmations.

## 🚀 Key Features

- **Browse Events**: Discover exciting events with comprehensive details including date, venue, and ticket availability.
- **Seamless Purchase**: Effortlessly buy tickets and receive real-time confirmations.
- **MetaMask Integration**: Securely purchase tickets using Ethereum through MetaMask.
- **Responsive Design**: Enjoy a beautiful interface on any device.

## 🛠️ Technologies Used

- **React**: Dynamic UI for an engaging user experience.
- **Vite**: Fast development and optimal performance.
- **Tailwind CSS**: Stylish and responsive design.
- **Ethers.js**: Smooth interaction with the Ethereum blockchain.

## 📦 Getting Started

### Prerequisites

Ensure you have the following installed:

- 🖥 [Node.js](https://nodejs.org/)
- 📦 [npm](https://www.npmjs.com/) (comes with Node.js)
- 🔐 [MetaMask](https://metamask.io/)
- 💰 Testnet Ethereum wallet with ETH

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/neethu-muthu/ticketmaster_app.git
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
  defaultNetwork:"alchemy",
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
npx hardhat ignition deploy ignition/modules/Ticket.js
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
- issue ticket
- enter details
- make payment in metamask
- after metamask confirm get you ticket 
---

## 🎨 Customization
Feel free to customize the events data in App.jsx to include your favorite events. Modify styles in tailwind.config.js to match your brand's theme.

## 📜 License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)

## 🙌 Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your proposed changes.

📣 Stay Connected
- GitHub: github.com/neethu-muthu/ticketmaster-app
- LinkedIn: www.linkedin.com/in/neethumuthu

Thank you for checking out the TicketMaster App. We hope you enjoy exploring and purchasing tickets for amazing events! 🎉

Happy Browsing! 🥳

Feel free to adjust any details like links, usernames, or specific instructions to match your project setup.

