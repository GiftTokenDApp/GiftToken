const { BN, expectRevert, expectEvent } = require('@openzeppelin/test-helpers');
import { ethers } from "hardhat";
import { BigNumber } from "ethers";
import { expect } from 'chai';
import { GiftFactory as GiftFactoryContract, GiftFactoryInterface, NetworkCreatedEvent, NetworkCreatedEventFilter} from '../src/typechain-types/contracts/GiftFactory';

const NULLADDRESS: string = '0x0000000000000000000000000000000000000000';

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
            expect(linksCount).to.be.equal(BigNumber.from(0));
        });

        it("Should GiftNetwork has an address", async () => {
            const address: string = await giftFactory.getGiftNetwork();
            console.log(address)
            expect(address).to.be.not.equal(NULLADDRESS);
        });
        
        it("Should emit NetworkCreated", async () => {
            const eventFilter: NetworkCreatedEventFilter = giftFactory.filters.NetworkCreated();
            const events: NetworkCreatedEvent[] = await giftFactory.queryFilter(eventFilter);
            const event: NetworkCreatedEvent | null = events.length ? events[0] : null;
            const arg = event?.args?.length ? event.args[0] : null;
            
            expect(arg).to.be.not.null;
            expect(arg).to.be.not.equal(NULLADDRESS);
        });
    });

    describe("... test createCard", () => {

    });
});