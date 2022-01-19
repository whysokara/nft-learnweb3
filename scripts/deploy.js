const { ethers } = require("hardhat"); // import ether from hardhat package

async function main() {
  const nftContract = await ethers.getContractFactory("GameItem");

  // deploy nft contract
  const deployedNFTContract = await nftContract.deploy();
  console.log("Address NFT Contract", deployedNFTContract.address);
}

// call main function with try catch block
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });

//public address 0x6257Df3557759158ffCbC3326cF3AeC05430aF2C
//Address NFT Contract 0x835E4E923e601fC569395c6A5b6c7DE3FE65F23A
