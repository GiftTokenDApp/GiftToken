const { BN, expectRevert } = require('@openzeppelin/test-helpers');
import { ethers } from "hardhat";
import { BigNumber, ContractTransaction } from "ethers";
import { expect } from 'chai';
import { GiftFactory as GiftFactoryContract, GiftFactoryInterface, CardCreatedEvent, CardCreatedEventFilter, NetworkCreatedEvent, NetworkCreatedEventFilter} from '../src/typechain-types/contracts/GiftFactory';

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

describe("Test GiftFactory contract", async () => {

    beforeEach(reinitAll);

    describe("... test constructor", () => {

        it("Should have 0 link", async () => {
            const linksCount = await giftFactory.getLinksCount(ownerAddress);
            expect(linksCount).to.be.equal(DEFAULT_BIGNUMBER);
        });

        it("Should GiftNetwork has an address", async () => {
            const address: string = await giftFactory.getGiftNetwork();
            console.log(address)
            expect(address).to.be.not.equal(NULL_ADDRESS);
        });
        
        it("Should emit NetworkCreated", async () => {
            const event: NetworkCreatedEvent = await getFirstOrDefaultEvent(giftFactory.filters.NetworkCreated()) as NetworkCreatedEvent
            const arg = event?.args?.length ? event.args[0] : null;
            
            expect(arg).to.be.not.null;
            expect(arg).to.be.not.equal(NULL_ADDRESS);
        });
    });

    describe("... test createCard", () => {

        const title: string = "MyTitle";
        const title2: string = "Lorem";
        const description: string = "42";
        const fundingToBeReleased: BigNumber = DEFAULT_BIGNUMBER;
        const dateToBeReleased: BigNumber = DEFAULT_BIGNUMBER;
        const beneficiary: string = NULL_ADDRESS;
        let cardCreatedAddress: string | null;
        let cardCreatedEvent: CardCreatedEvent | null;

        it("Should'nt have less than 1 Finney to create", async () => {
            const trx = {
                value: BigNumber.from(DEFAULT_FINNEY.slice(0, -1)),
            };
            const createCardPromise = giftFactory.createCard(title, description, fundingToBeReleased, dateToBeReleased, beneficiary, trx);
            await expectRevert(createCardPromise, foundingError)
        });

        it("Should have at least one 1 Finney to create", async () => {
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

        it("Should have an CardCreated event", async () => {

            let address: string | null = null;
            let value: BigNumber | null = null;

            if (cardCreatedEvent?.args?.length) {
                address = cardCreatedEvent.args[0];
                value = cardCreatedEvent.args[1];
            }

            expect(address).to.be.not.null;
            expect(address).to.be.equal(cardCreatedAddress);
            expect(value).to.be.not.null;
            expect(value).to.be.equal(DEFAULT_FINNEY);
        });
    });
});