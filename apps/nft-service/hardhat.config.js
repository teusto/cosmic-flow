/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
  solidity: "0.8.0",
  networks: {
    polygon: {
      url: "https://polygon-rpc.com", //polygon RPC URL
      accounts: [process.env.DEPLOYER_PRIVATE_KEY] //your private key
    }
  }
};
