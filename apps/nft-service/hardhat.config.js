/** @type import('hardhat/config').HardhatUserConfig */
require("dotenv").config();
require("@nomicfoundation/hardhat-verify");
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    hardhat: {},
    polygonAmoy: {
      url: process.env.ALCHEMY_POLYGON_AMOY_RPC, //polygon RPC URL
      accounts: [process.env.DEPLOYER_PRIVATE_KEY], //your private key
      chainId: 80002,
    },
  },
  etherscan: {
    apiKey: {
      polygonAmoy: process.env.POLYGONSCAN_API_KEY,
    },
  },
  sourcify: {
    // Disabled by default
    // Doesn't need an API key
    enabled: true,
  },
};
