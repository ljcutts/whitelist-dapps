const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello, world!");
    await greeter.deployed();

    expect(await greeter.greet()).to.equal("Hello, world!");

    const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});

describe('Whitelist', () => {
  it('Should Whitelist Users correctly and keep track of amount of whitelisted addresses', async () => {
     const [owner, addr1, addr2, addr3] = await ethers.getSigners();
     const Whitelist = await ethers.getContractFactory("Whitelist");
    const whitelist = await Whitelist.deploy(10);
    await whitelist.deployed();

    expect(await whitelist.maxWhitelistedAddresses()).to.equal(10);

    const addAddressTx = await whitelist.addAddressToWhitelist();
    await addAddressTx.wait();

    expect(await whitelist.whitelistedAddresses(owner.address)).to.equal(true)

    expect(await whitelist.numAddressesWhiteListed()).to.equal(1);

  })
})
