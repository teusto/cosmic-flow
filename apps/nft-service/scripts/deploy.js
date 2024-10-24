async function main(){
    const [deployer] = await ethers.getSigners();
    
    console.log("Deploying contracts with the account: ", deployer.address);

    const CosmicNFT = await ethers.getContractFactory("CosmicNFT");
    const nft = await CosmicNFT.deploy(deployer.address);
    await nft.deployed();

    console.log("CosmicNFT deployed to: ", nft.address);
}

main.catch((error) => {
    console.error(error);
    process.exitCode = 1;
})