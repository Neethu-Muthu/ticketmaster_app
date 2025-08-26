# 🎟️ **TicketMaster App**

Welcome to the **TicketMaster App** – your ultimate ticketing experience for unforgettable events! With our app, you can easily browse upcoming concerts, purchase tickets, and receive instant confirmations.

---

## 🚀 Key Features

- ✨ **Browse Events**: Discover exciting events with comprehensive details like date, venue, and ticket availability.
- 💳 **Seamless Purchase**: Effortlessly buy tickets and receive real-time confirmations.
- 🔐 **MetaMask Integration**: Securely purchase tickets using Ethereum through MetaMask.
- 📱 **Responsive Design**: Enjoy a beautiful interface on any device.

### 🎟️ Upcoming Features
- **🎨 NFT Ticketing**: Currently working on creating tickets as NFTs to enhance ownership verification and transferability for users.

---

## 🎥 Demo Video

Check out the demo video of the **TicketMaster App** in action:  
<a href="https://drive.google.com/file/d/1hRI6GlXa_v1beCy8y_v2ttUa8GiVhepd/view?usp=sharing">
    <img src="Frontend/src/assets/images/concert-thumbnail.webp" alt="Watch the video" width="600" />
</a>


> _Click the image to watch the full demo on Google Drive._

---

## 🛠️ **Technologies Used**

### 🌐 Core Technologies

| Technology        | Description                                      |
|-------------------|--------------------------------------------------|
| **Solidity**      | Smart contract development for Ethereum.         |
| **React**         | Build dynamic user interfaces.                    |
| **Vite**          | Modern build tool for faster development.        |
| **Tailwind CSS**  | Utility-first CSS framework for styling.         |
| **Ethers.js**     | Interact with the Ethereum blockchain easily.   |
| **Hardhat**       | Development environment for Ethereum.            |
| **MetaMask**      | Secure Ethereum wallet for transactions.         |
| **Node.js & npm** | Backend tools for managing dependencies.         |

### 🛠️ **Additional Tools**
- **Git**: Version control for tracking changes.
- **Postman**: API testing and development tool.


---

## 📦 Getting Started

### **Prerequisites**

Make sure you have the following installed:

- 🖥️ [Node.js](https://nodejs.org/)
- 📦 [npm](https://www.npmjs.com/) (comes with Node.js)
- 🔐 [MetaMask](https://metamask.io/)
- 💰 [Hardhat](https://hardhat.org/)

### **Installation**

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
    alchemy: {
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
cd Frontend
npm i 
```
Go to folder src/SCdata

- add Abi code to ticket.json file
- add deployed address to deployedaddress.json(deployed address will get after deploying the contract)
  
```
npm run dev
```
- connect your metamask
- buy ticket
- enter details
- make payment in metamask
- after metamask confirm get you ticket 
---

## 🎨 Customization
Feel free to customize the events data in App.jsx to include your favorite events. Modify styles in tailwind.config.js to match your brand's theme.

## 🚀 Future Directions

- 📱 **Mobile App Development**: Create a mobile version of the app for iOS and Android to enhance accessibility.
- 🌟 **User Reviews and Ratings**: Allow users to leave reviews and ratings for events, helping others make informed decisions.
- 📊 **Analytics Dashboard**: Provide event organizers with real-time insights into ticket sales and user engagement.
- 💳 **Multiple Payment Options**: Integrate additional payment methods like credit cards and other cryptocurrencies.
- 🔔 **Event Reminders**: Notify users about upcoming events they’ve shown interest in, ensuring they don’t miss out.
- 🌐 **Social Media Integration**: Allow users to share their ticket purchases and event experiences on social media platforms.


## 📜 License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)

## 🙌 Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your proposed changes.

📣 Stay Connected
- GitHub: https://github.com/Neethu-Muthu
- LinkedIn: www.linkedin.com/in/neethumuthu

Thank you for checking out the TicketMaster App. We hope you enjoy exploring and purchasing tickets for amazing events! 🎉

Happy Browsing! 🥳

Feel free to adjust any details like links, usernames, or specific instructions to match your project setup.

