# 🎟️ TicketMaster App

![TicketMaster App Image](Frontend/src/assets/images/Screenshot%20from%202024-09-21%2001-47-35%20(1).png)


Welcome to the **TicketMaster App** – your ultimate ticketing experience for unforgettable events! With our app, you can easily browse upcoming concerts, purchase tickets, and receive instant confirmations.

## 🚀 Key Features

- **Browse Events**: Discover exciting events with comprehensive details including date, venue, and ticket availability.
- **Seamless Purchase**: Effortlessly buy tickets and receive real-time confirmations.
- **MetaMask Integration**: Securely purchase tickets using Ethereum through MetaMask.
- **Responsive Design**: Enjoy a beautiful interface on any device.

 ## 🎥 Demo Video

Check out the demo video of the **TicketMaster App** in action:  
[![Watch the video](Frontend/src/assets/images/DALL·E 2024-09-22 22.58.52 - A vibrant concert scene with a large crowd enjoying a live performance. The stage is lit with colorful spotlights, and the audience is cheering with h.webp)](https://drive.google.com/file/d/1hRI6GlXa_v1beCy8y_v2ttUa8GiVhepd/view?usp=sharing)

> _Click the image to watch the full demo on Google Drive._



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

To deploy the TicketMaster contract on the Ethereum Sepolia testnet using Alchemy and MetaMask, follow these steps:

1. **Add the Main Network to your Hardhat Configuration:**

   In your `hardhat.config.js` file, you'll need to add the Sepolia network and configure Alchemy as your provider. Don't forget to include your MetaMask private key for transaction signing.

2. **Configure Sepolia and Alchemy:**

   - **Alchemy API Key**: Get your API key by creating a project on [Alchemy](https://www.alchemy.com/).
   - **MetaMask Private Key**: Copy your MetaMask private key (never share this!).

3. **Example Configuration**: Update your `hardhat.config.js` file like this:
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

## 🚀 Future Directions

As the TicketMaster App continues to evolve, here are some exciting features and improvements planned for the future:

- **Mobile App Development**: Create a mobile version of the app for iOS and Android to enhance accessibility and user experience.
- **User Reviews and Ratings**: Implement a feature for users to leave reviews and ratings for events, providing valuable feedback for organizers and helping users make informed choices.
- **Advanced Analytics Dashboard**: Develop a dashboard for event organizers to analyze ticket sales, user engagement, and revenue metrics in real-time.
- **Multiple Payment Options**: Integrate additional payment methods beyond Ethereum, allowing users to pay using credit cards or other cryptocurrencies.
- **Event Reminders**: Add functionality for users to receive reminders about upcoming events they are interested in, ensuring they never miss out.
- **Social Media Integration**: Enable users to share their ticket purchases and experiences on social media platforms, promoting events and increasing visibility.

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

