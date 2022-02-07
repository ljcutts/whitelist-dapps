const hre = require("hardhat");

async function main() {
  const whitelistContract = await hre.ethers.getContractFactory("Whitelist");
  const deployedWhitelistContract = await whitelistContract.deploy(10);

  await deployedWhitelistContract.deployed();

  console.log("Whitelist Contract Address deployed to:", deployedWhitelistContract.address);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

  //Contract Address 0xaC182E3dd6b5DeCD9ccC6eAF79c30a55E7B24690