/** @type import('hardhat/config').HardhatUserConfig */
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.0",
  networks: {
    hardhat: {},
    polygon: {
      url: "https://polygon-rpc.com", //polygon RPC URL
      accounts: [process.env.DEPLOYER_PRIVATE_KEY] //your private key
    }
  }
};
