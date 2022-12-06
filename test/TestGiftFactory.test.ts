const { BN, expectRevert, expectEvent } = require('@openzeppelin/test-helpers');
import { ethers } from "hardhat";
import { BigNumber } from "ethers";
import { expect } from 'chai';
import { GiftFactory as GiftFactoryContract} from '../src/typechain-types/contracts/GiftFactory';

let giftFactory: GiftFactoryContract;
let ownerAddress: string;
let otherAddress1: string;
let otherAddress2: string;

async function reinitAll(): Promise<void> {

    const GiftFactory = await ethers.getContractFactory("GiftFactory");
    giftFactory = await GiftFactory.deploy() as GiftFactoryContract;
    await giftFactory.deployed();

    const [ownerAccount, otherAccount1, otherAcount2] = await ethers.getSigners();
    ownerAddress = ownerAccount.address;
    otherAddress1 = otherAccount1.address;
    otherAddress2 = otherAcount2.address;
}

describe("Test GiftFactory contract", async () => {

    describe("... test constructor", () => {
        beforeEach(reinitAll);

        it("Should have 0 link", async () => {
            const linksCount = await giftFactory.getLinksCount(ownerAddress);
            console.log(linksCount);
            expect(linksCount).to.be.equal(BigNumber.from(0));
        });
    });
});