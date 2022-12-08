import { ethers } from "hardhat";
import { BigNumber, ContractTransaction } from "ethers";
import { expect } from 'chai';
import { GiftFactory as GiftFactoryContract, GiftFactoryInterface, CardCreatedEvent, CardCreatedEventFilter, NetworkCreatedEvent, NetworkCreatedEventFilter} from '../src/typechain-types/contracts/GiftFactory';
const { BN, expectRevert, expectEvent } = require('@openzeppelin/test-helpers');

type Event = null | CardCreatedEvent | NetworkCreatedEvent;
type EventFilter = null | CardCreatedEventFilter | NetworkCreatedEventFilter;

const NULL_ADDRESS: string = '0x0000000000000000000000000000000000000000';
const DEFAULT_BIGNUMBER: BigNumber = BigNumber.from(0);
const DEFAULT_FINNEY: string = '1000000000000000';

const foundingError: string = "Insufficient found";

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

async function getFirstOrDefaultEvent(eventFilter: EventFilter): Promise<Event> {
    if (eventFilter == null) {
        return null;
    }
    const events: Event[] = await giftFactory.queryFilter(eventFilter);   
    return events.length ? events[0] : null;
}

async function getLastOrDefaultEvent(eventFilter: EventFilter): Promise<Event> {
    if (eventFilter == null) {
        return null;
    }
    const events: Event[] = await giftFactory.queryFilter(eventFilter);
    return events.length ? events[events.length-1] : null;
}

describe("GiftFactory testing", () => {

    beforeEach(reinitAll);

    describe("Constructor testing", () => {

        it("Should have 0 link", async () => {
            const linksCount = await giftFactory.getLinksCount(ownerAddress);
            expect(linksCount).to.be.equal(DEFAULT_BIGNUMBER);
        });

        it("Should return the GiftNetwork's address", async () => {
            const address: string = await giftFactory.getGiftNetwork();
            expect(address).to.be.not.equal(NULL_ADDRESS);
        });
        
        it("Should emit the NetworkCreated event", async () => {
            const event: NetworkCreatedEvent = await getFirstOrDefaultEvent(giftFactory.filters.NetworkCreated()) as NetworkCreatedEvent
            const arg = event?.args?.length ? event.args[0] : null;
            expect(arg).to.be.not.null;
            expect(arg).to.be.not.equal(NULL_ADDRESS);            
        });
    });

    describe("Card creation testing", () => {
        const title: string = "MyTitle";
        const title2: string = "Lorem";
        const description: string = "42";
        const fundingToBeReleased: BigNumber = DEFAULT_BIGNUMBER;
        const dateToBeReleased: BigNumber = DEFAULT_BIGNUMBER;
        const beneficiary: string = NULL_ADDRESS;
        let cardCreatedAddress: string | null;
        let cardCreatedEvent: CardCreatedEvent | null;

        it("Shouldn't have less than 1 Finney to create", async () => {
            const trx = {
                value: BigNumber.from(DEFAULT_FINNEY.slice(0, -1)),
            };
            await expect(giftFactory.createCard(title, description, fundingToBeReleased, dateToBeReleased, beneficiary, trx)).revertedWith('Insufficient found');
        });

        it("Should have at least one 1 Finney to create ; using getLinksCount function to check", async () => {
            const trx = {
                value: BigNumber.from(DEFAULT_FINNEY),
            };
            await giftFactory.createCard(title, description, fundingToBeReleased, dateToBeReleased, beneficiary, trx);
            cardCreatedEvent = await getLastOrDefaultEvent(giftFactory.filters.CardCreated()) as CardCreatedEvent;
            const linksCount = await giftFactory.getLinksCount(ownerAddress);

            if (linksCount != DEFAULT_BIGNUMBER) {
                const links: string[] = await giftFactory["getLinks(address)"](ownerAddress);
                cardCreatedAddress = links.length ? links[0] : null;
            }

            expect(linksCount).to.be.equal(BigNumber.from(1));
        });

        it("Should return the 3 sender's created cards addresses list", async () => {
            const trx = {
                value: BigNumber.from(DEFAULT_FINNEY),
            };
            for (let i = 0; i < 3; i++) {    
                await giftFactory.createCard(title, description, fundingToBeReleased, dateToBeReleased, beneficiary, trx);      
            }
            const linksCount = await giftFactory.getLinksCount(ownerAddress);

            if (linksCount != DEFAULT_BIGNUMBER) {
                const links: string[] = await giftFactory["getLinks(address)"](ownerAddress);
                cardCreatedAddress = links.length ? links[0] : null;
            }

            expect(linksCount).to.be.equal(BigNumber.from(3));
        });

        it("Should create 5 cards and return the 2 last ones addresses as a list", async () => {
            const trx = {
                value: BigNumber.from(DEFAULT_FINNEY),
            };
            for (let i = 0; i < 5; i++) {    
                await giftFactory.createCard(title, description, fundingToBeReleased, dateToBeReleased, beneficiary, trx);      
            }
            cardCreatedEvent = await getLastOrDefaultEvent(giftFactory.filters.CardCreated()) as CardCreatedEvent;

            const linksCount = await giftFactory.getLinksCount(ownerAddress);
            if (linksCount != DEFAULT_BIGNUMBER) {
                const links: string[] = await giftFactory["getLinks(address,uint256)"](ownerAddress,6);               
                cardCreatedAddress = links.length ? links[0] : null;
            }
            expect(linksCount).to.be.equal(BigNumber.from(2));
        });

        // it("Should emit a CardCreated event", async () => {

        //     let address: string | null = null;
        //     let value: BigNumber | null = null;

        //     if (cardCreatedEvent?.args?.length) {
        //         address = cardCreatedEvent.args[0];
        //         value = cardCreatedEvent.args[1];
        //     }
            
        //     cardCreatedAddress = '0x23dB4a08f2272df049a4932a4Cc3A6Dc1002B33E';
        //     expect(address).to.be.not.null;
        //     expect(address).to.be.equal(cardCreatedAddress);
        //     expect(value).to.be.not.null;
        //     expect(value).to.be.equal(DEFAULT_FINNEY);
        // });
    });
});