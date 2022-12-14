import { ethers } from "hardhat";

async function main() {
  const GiftFactory = await ethers.getContractFactory("GiftFactory");
  const giftFactory = await GiftFactory.deploy();

  await giftFactory.deployed();

  console.log(`Deployed contract to ${giftFactory.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});