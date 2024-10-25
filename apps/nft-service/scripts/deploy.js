async function main(){
    const [deployer] = await ethers.getSigners();
    
    console.log("Deploying contracts with the account: ", deployer.address);

    const CosmicNFT = await ethers.getContractFactory("CosmicNFT");
    const nft = await CosmicNFT.deploy(deployer.address);
    await nft.waitForDeployment();

    console.log("CosmicNFT deployed to: ", nft.target);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });