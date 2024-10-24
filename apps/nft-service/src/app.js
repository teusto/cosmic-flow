const express = require("express");
const bodyParser = require("body-parser");
const { ethers } = require("ethers");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());

// Load contract ABI and address
const contractABI = require("./cosmic.nft.json");
const contractAddress = process.env.CONTRACT_ADDRESS;
// Set up Polygon provider and wallet
const provider = new ethers.providers.JsonRpcProvider("https://polygon-rpc.com");
const wallet = new ethers.Wallet(process.env.DEPLOYER_PRIVATE_KEY, provider);
// Load the ZodiacNFT contract
const nftContract = new ethers.Contract(contractAddress, contractABI, wallet);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`[nft-service] is running on port ${PORT}`);
});