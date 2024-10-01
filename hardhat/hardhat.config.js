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
        "private_key",
      ],
    },
  },
  solidity: "0.8.23",
};
