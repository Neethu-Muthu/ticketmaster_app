require("@nomicfoundation/hardhat-toolbox");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  // defaultNetwork: "localhost",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545/",
    },
    alchemy: {
      url: "https://eth-sepolia.g.alchemy.com/v2/UwdzyRq4IfUKuhJr0H6Zv-ZEaWkULdPd",
      accounts: [
        "b3324767a0712ab7158d4e1826c0d2e0a004d6b5c88c0a079f8d1d8893b0636e",
      ],
    },
  },
  solidity: "0.8.23",
};
