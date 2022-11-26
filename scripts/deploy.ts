import { ethers } from "hardhat";

async function main() {
  const GiftToken = await ethers.getContractFactory("GiftToken");
  const giftToken = await GiftToken.deploy();

  await giftToken.deployed();

  console.log(`Deployed contract to ${giftToken.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});