import { ethers } from "hardhat";
import { BigNumber } from "ethers";
import { expect } from 'chai';
import { GiftCard as GiftCardContract, AmountTransferedEvent, AmountTransferedEventFilter, BeneficiaryChangedEvent, BeneficiaryChangedEventFilter, OwnershipTransferredEvent, OwnershipTransferredEventFilter, ParticipatedEvent, ParticipatedEventFilter, ProperlyCreatedEvent, ProperlyCreatedEventFilter, SendedMessageEvent, SendedMessageEventFilter, StatusChangedEvent, StatusChangedEventFilter} from '../src/typechain-types/contracts/GiftCard';

type Event = null | AmountTransferedEvent | BeneficiaryChangedEvent | OwnershipTransferredEvent | ParticipatedEvent | ProperlyCreatedEvent | SendedMessageEvent | StatusChangedEvent;
type EventFilter = null | AmountTransferedEventFilter | BeneficiaryChangedEventFilter | OwnershipTransferredEventFilter | ParticipatedEventFilter | ProperlyCreatedEventFilter | SendedMessageEventFilter | StatusChangedEventFilter;

const NULL_ADDRESS: string = '0x0000000000000000000000000000000000000000';
const DEFAULT_BIGNUMBER: BigNumber = BigNumber.from(0);
const DEFAULT_FINNEY: string = '1000000000000000';

const foundingError: string = "Insufficient found";

let giftCard: GiftCardContract;
let ownerAccount: any;
let ownerAddress: string;
let otherAccount1: any;
let otherAddress1: string;

async function reinitAll(): Promise<void> {

    const network: string = "0x815b1008f769e9CDD38e4A3fe2236FD56aD508D8";
    const title: string = "MyTitle";
    const description: string = "42";
    const fundingToBeReleased: BigNumber = DEFAULT_BIGNUMBER;
    const dateToBeReleased: BigNumber = DEFAULT_BIGNUMBER;
    const beneficiary: string = NULL_ADDRESS;
    // let cardCreatedAddress: string | null;
    // let cardCreatedEvent: CardCreatedEvent | null;
    const trx = {
        value: BigNumber.from(DEFAULT_FINNEY.slice(0, -1)),
    };

    const [newOwnerAccount, newOtherAccount1] = await ethers.getSigners();
    
    ownerAccount = newOwnerAccount;
    ownerAddress = newOwnerAccount.address;
    otherAccount1 = newOtherAccount1;
    otherAddress1 = newOtherAccount1.address;

    const GiftCard = await ethers.getContractFactory("GiftCard");
    giftCard = await GiftCard.deploy(network, ownerAddress, title, description, fundingToBeReleased, dateToBeReleased, beneficiary, trx) as GiftCardContract;
    await giftCard.deployed();    
}

async function getFirstOrDefaultEvent(eventFilter: EventFilter): Promise<Event> {
    if (eventFilter == null) {
        return null;
    }
    const events: Event[] = await giftCard.queryFilter(eventFilter);   
    return events.length ? events[0] : null;
}

async function getLastOrDefaultEvent(eventFilter: EventFilter): Promise<Event> {
    if (eventFilter == null) {
        return null;
    }
    const events: Event[] = await giftCard.queryFilter(eventFilter);
    return events.length ? events[events.length-1] : null;
}

describe("GiftCard testing", () => {

    beforeEach(reinitAll);

    describe("Constructor testing", () => {

        it("Should get the Participated event from the constructor when created", async () => {
            const event: ParticipatedEvent = await getFirstOrDefaultEvent(giftCard.filters.Participated()) as ParticipatedEvent
            const arg = event?.args?.length ? event.args[0] : null;
            expect(arg).to.be.not.null;
            expect(arg).to.be.equal(ownerAddress);            
        });

        it("Should get the Participated event from the receive function with the second account", async () => {     
            await otherAccount1.sendTransaction({
                to: giftCard.address,
                value: BigNumber.from(333),
            })
            const event: ParticipatedEvent = await getLastOrDefaultEvent(giftCard.filters.Participated()) as ParticipatedEvent
            const arg = event?.args?.length ? event.args[0] : null;
            expect(arg).to.be.not.null;
            expect(arg).to.be.equal(otherAddress1);            
        });
        
        it("Should get the Participated event from the fallback function with the owner's account", async () => {
            await ownerAccount.sendTransaction({
                data: '0x123456',
                to: giftCard.address,
                value: BigNumber.from(100),
            })
            const event: ParticipatedEvent = await getFirstOrDefaultEvent(giftCard.filters.Participated()) as ParticipatedEvent
            const arg = event?.args?.length ? event.args[0] : null;
            expect(arg).to.be.not.null;
            expect(arg).to.be.equal(ownerAddress);            
        });
    });

    describe("Card participation", () => {

        it("Should get the StatusChanged event from the constructor when created with value matching or exceeding the card's goal which is to be the case with the default card values.", async () => {
                        await otherAccount1.sendTransaction({
                to: giftCard.address,
                value: BigNumber.from(1000000000000000 * 2),
            })

            const participatedEvent: ParticipatedEvent = await getFirstOrDefaultEvent(giftCard.filters.Participated()) as ParticipatedEvent
            const arg = participatedEvent?.args?.length ? participatedEvent.args[0] : null;
            const statusChangedEvent: StatusChangedEvent = await getFirstOrDefaultEvent(giftCard.filters.StatusChanged()) as StatusChangedEvent;
            const arg2 = statusChangedEvent?.args?.length ? statusChangedEvent.args : null;
            
            expect(arg).to.be.equal(ownerAddress);
            expect(arg2).to.deep.equal([ BigNumber.from(1), BigNumber.from(2)]);       
        });
    });
});