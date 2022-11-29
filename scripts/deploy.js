const { ethers } = require("hardhat");

async function main() {
  /*
A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
so nftContract here is a factory for instances of our Needmoney contract.
*/
  const MyNft = await ethers.getContractFactory("SmileNft");

  // here we deploy the contract
  const deployedMyNft = await MyNft.deploy();

  // wait for the contract to deploy
  await deployedMyNft.deployed();

  // print the address of the deployed contract
  console.log("NFT Contract Address:", deployedMyNft.address);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });