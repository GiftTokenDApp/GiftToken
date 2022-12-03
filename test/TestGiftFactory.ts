const { BN, expectRevert, expectEvent } = require('@openzeppelin/test-helpers');
import { ethers } from "hardhat";
import { BigNumber } from "ethers";
import { expect } from 'chai';
import { GiftFactory as GiftFactoryContract} from '../src/typechain-types/contracts/GiftFactory';
import { GiftFactory__factory as GiftFactoryFactory} from '../src/typechain-types/factories/contracts/GiftFactory__factory';

describe("Test GiftFactory contract", async () => {

    const [ownerAccount, otherAccount1, otherAcount2] = await ethers.getSigners();
    const ownerAddress: string = ownerAccount.address;
    const otherAddress1: string = otherAccount1.address;
    const otherAddress2: string = otherAcount2.address;

    console.log(1);
    const GiftFactory = await ethers.getContractFactory("GiftFactory"); // TODO <=== ça bloque ici
    console.log(2);
    const giftFactory: GiftFactoryContract = await GiftFactory.deploy() as GiftFactoryContract;
    console.log(3);
    await giftFactory.deployed();
    console.log(4);

    describe("... test constructor", () => {
        it("Should have 0 link", async () => {
            console.log(1);
            const linksCount = await giftFactory.getLinksCount(ownerAddress);
            console.log(linksCount);
            expect(linksCount).to.be.equal(BigNumber.from(0));
        });
    });
});