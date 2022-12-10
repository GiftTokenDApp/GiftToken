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
            // userBalance = await provider.getBalance(otherAccount1.address);
            // factoryBalance = await provider.getBalance(giftCard.address);
            // console.log(userBalance, factoryBalance);            
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

        // it("Should have 0 link", async () => {
        //     const linksCount = await giftFactory.getLinksCount(ownerAddress);
        //     expect(linksCount).to.be.equal(DEFAULT_BIGNUMBER);
        // });

        // it("Should return the GiftNetwork's address", async () => {
        //     const address: string = await giftFactory.getGiftNetwork();
        //     expect(address).to.be.not.equal(NULL_ADDRESS);
        // });
        
        // it("Should emit the NetworkCreated event", async () => {
        //     const event: NetworkCreatedEvent = await getFirstOrDefaultEvent(giftFactory.filters.NetworkCreated()) as NetworkCreatedEvent
        //     const arg = event?.args?.length ? event.args[0] : null;
        //     expect(arg).to.be.not.null;
        //     expect(arg).to.be.not.equal(NULL_ADDRESS);            
        // });

        // it("Should get the Funding event from the receive function", async () => {
        //     const [ownerAccount] = await ethers.getSigners();
        //     // let userBalance = await provider.getBalance(otherAccount1.address);
        //     // let factoryBalance = await provider.getBalance(giftFactory.address);
        //     // console.log(userBalance, factoryBalance);
        //     await ownerAccount.sendTransaction({
        //         to: giftFactory.address,
        //         value: 100,
        //     })
        //     // userBalance = await provider.getBalance(otherAccount1.address);
        //     // factoryBalance = await provider.getBalance(giftFactory.address);
        //     // console.log(userBalance, factoryBalance);

        //     const event: FundingEvent = await getFirstOrDefaultEvent(giftFactory.filters.Funding()) as FundingEvent
        //     const arg = event?.args?.length ? event.args[0] : null;
            
        //     expect(arg).to.be.not.null;
        //     expect(arg).to.be.not.equal(NULL_ADDRESS);            
        // });
        
        // it("Should get the Funding event from the fallback function", async () => {
        //     const [ownerAccount] = await ethers.getSigners();
        //     // let userBalance = await provider.getBalance(otherAccount1.address);
        //     // let factoryBalance = await provider.getBalance(giftFactory.address);
        //     // console.log(userBalance, factoryBalance);
        //     await ownerAccount.sendTransaction({
        //         data: '0x123456',
        //         to: giftFactory.address,
        //         value: 100,
        //     })
        //     // userBalance = await provider.getBalance(otherAccount1.address);
        //     // factoryBalance = await provider.getBalance(giftFactory.address);
        //     // console.log(userBalance, factoryBalance);

        //     const event: FundingEvent = await getFirstOrDefaultEvent(giftFactory.filters.Funding()) as FundingEvent
        //     const arg = event?.args?.length ? event.args[0] : null;
            
        //     expect(arg).to.be.not.null;
        //     expect(arg).to.be.not.equal(NULL_ADDRESS);            
        // });
    });

    describe("Card participation", () => {

        it("Should get the StatusChanged event from the constructor when created with value matching or exceeding the card's goal which is to be the case with the default card values.", async () => {
            // let userBalance = await giftCard.provider.getBalance(otherAccount1.address);
            // let cardBalance = await giftCard.provider.getBalance(giftCard.address);
            // console.log(userBalance, cardBalance);
            await otherAccount1.sendTransaction({
                to: giftCard.address,
                value: BigNumber.from(1000000000000000 * 2),
            })
            // userBalance = await giftCard.provider.getBalance(otherAccount1.address);
            // cardBalance = await giftCard.provider.getBalance(giftCard.address);
            // console.log(userBalance, cardBalance);

            const goal = await giftCard.requierementToBeReleased();
            const status = await giftCard.getStatus();
            // console.log(goal, cardBalance, status);

            const participatedEvent: ParticipatedEvent = await getFirstOrDefaultEvent(giftCard.filters.Participated()) as ParticipatedEvent
            const arg = participatedEvent?.args?.length ? participatedEvent.args[0] : null;
            const statusChangedEvent: StatusChangedEvent = await getFirstOrDefaultEvent(giftCard.filters.StatusChanged()) as StatusChangedEvent;
            const arg2 = statusChangedEvent?.args?.length ? statusChangedEvent.args : null;
            // console.log(statusChangedEvent);
            expect(arg).to.be.equal(ownerAddress);
            expect(arg2).to.deep.equal([ BigNumber.from(1), BigNumber.from(2)]);       
        });

        // it("Shouldn't have less than 1 Finney to create", async () => {
        //     const trx = {
        //         value: BigNumber.from(DEFAULT_FINNEY.slice(0, -1)),
        //     };
        //     await expect(giftFactory.createCard(title, description, fundingToBeReleased, dateToBeReleased, beneficiary, trx)).revertedWith('Insufficient found');
        // });

        // it("Should have at least one 1 Finney to create ; using getLinksCount function to check", async () => {
        //     const trx = {
        //         value: BigNumber.from(DEFAULT_FINNEY),
        //     };
        //     await giftFactory.createCard(title, description, fundingToBeReleased, dateToBeReleased, beneficiary, trx);
        //     const linksCount = await giftFactory.getLinksCount(ownerAddress);
        //     expect(linksCount).to.be.equal(BigNumber.from(1));
        // });

        // it("Should create 3 cards then return 3 when the getLinksCount function is called from the same account", async () => {
        //     const trx = {
        //         value: BigNumber.from(DEFAULT_FINNEY),
        //     };
        //     for (let i = 0; i < 3; i++) {    
        //         await giftFactory.createCard(title, description, fundingToBeReleased, dateToBeReleased, beneficiary, trx);      
        //     }
        //     const linksCount = await giftFactory.getLinksCount(ownerAddress);
        //     expect(linksCount).to.be.equal(BigNumber.from(3));
        // });

        // it("Should create 3 cards then return 0 when the getLinksCount function is called from another account", async () => {
        //     const trx = {
        //         value: BigNumber.from(DEFAULT_FINNEY),
        //     };
        //     for (let i = 0; i < 3; i++) {    
        //         await giftFactory.createCard(title, description, fundingToBeReleased, dateToBeReleased, beneficiary, trx);      
        //     }
        //     const linksCount = await giftFactory.getLinksCount(otherAddress1);
        //     expect(linksCount).to.be.equal(BigNumber.from(0));
        // });

        // it("Should create 5 cards and revert when trying to write out of array's bounds when calling the getLinks function with 1 arg", async () => {
        //     const trx = {
        //         value: BigNumber.from(DEFAULT_FINNEY),
        //     };
        //     for (let i = 0; i < 5; i++) {    
        //         await giftFactory.createCard(title, description, fundingToBeReleased, dateToBeReleased, beneficiary, trx);      
        //     }
        //     await expect(giftFactory["getLinks(address,uint256)"](ownerAddress,BigNumber.from(6))).revertedWith('Read index out of bounds');               
        // });

        // it("Should create 5 cards and revert when trying to write out of array's bounds when calling the getLinks function with 2 args", async () => {
        //     const trx = {
        //         value: BigNumber.from(DEFAULT_FINNEY),
        //     };
        //     for (let i = 0; i < 5; i++) {    
        //         await giftFactory.createCard(title, description, fundingToBeReleased, dateToBeReleased, beneficiary, trx);      
        //     }
        //     cardCreatedEvent = await getLastOrDefaultEvent(giftFactory.filters.CardCreated()) as CardCreatedEvent;

        //     const linksCount = await giftFactory.getLinksCount(ownerAddress);
        //     await expect(giftFactory["getLinks(address,uint256,uint256)"](ownerAddress,BigNumber.from(6),BigNumber.from(2))).revertedWith('Read index out of bounds');               
        // });

        // it("Should return the 3 sender's created cards addresses list when calling the getLinks function with 1 arg from the same account", async () => {
        //     const trx = {
        //         value: BigNumber.from(DEFAULT_FINNEY),
        //     };
        //     for (let i = 0; i < 3; i++) {    
        //         await giftFactory.createCard(title, description, fundingToBeReleased, dateToBeReleased, beneficiary, trx);      
        //     }
        //     const links: string[] = await giftFactory["getLinks(address)"](ownerAddress);            
        //     const expectedLinksList= [
        //         '0xe3ADd897e69010709498738e5116C06B4D81e672',
        //         '0x08957fd2346e89192C452c47a5f6631c63c91Eac',
        //         '0xDA0783B7eb9c9d3cD179B1c425908a21086117E6'
        //     ]
        //     expect(links).to.deep.equal(expectedLinksList);
        // });

        // it("Should return an empty array when calling the getLinks function with 1 arg from a non-creator account", async () => {
        //     const trx = {
        //         value: BigNumber.from(DEFAULT_FINNEY),
        //     };
        //     for (let i = 0; i < 3; i++) {    
        //         await giftFactory.createCard(title, description, fundingToBeReleased, dateToBeReleased, beneficiary, trx);      
        //     }

        //     const links: string[] = await giftFactory["getLinks(address)"](otherAddress1);
        //     const expectedLinksList: string[] = []
        //     expect(links).to.deep.equal(expectedLinksList);
        // });

        // it("Should return the last 3 of the 5 sender's created cards addresses list when calling the getLinks function with 2 args from the same account", async () => {
        //     const trx = {
        //         value: BigNumber.from(DEFAULT_FINNEY),
        //     };
        //     for (let i = 0; i < 5; i++) {    
        //         await giftFactory.createCard(title, description, fundingToBeReleased, dateToBeReleased, beneficiary, trx);      
        //     }
        //     const links: string[] = await giftFactory["getLinks(address,uint256)"](ownerAddress, BigNumber.from(2));
        //     const expectedLinksList= [
        //         '0x874305DB059EF37C48536F32Dd109b4C7aB60a6d',
        //         '0x9F99f4f06Fc3B3FB9170b48c00207431982D7f3f',
        //         '0x157C59446c677ff70B32bEF30324A8B6e7238F53'
        //     ]
        //     expect(links).to.deep.equal(expectedLinksList);
        // });

        // it("Should return an emtpy array when calling the getLinks function with 2 args from a non-creator account", async () => {
        //     const trx = {
        //         value: BigNumber.from(DEFAULT_FINNEY),
        //     };
        //     for (let i = 0; i < 5; i++) {    
        //         await giftFactory.createCard(title, description, fundingToBeReleased, dateToBeReleased, beneficiary, trx);      
        //     }
        //     const links: string[] = await giftFactory["getLinks(address,uint256)"](otherAddress1, BigNumber.from(0));
        //     const expectedLinksList: string[] = []
        //     expect(links).to.deep.equal(expectedLinksList);
        // });

        // it("Should revert when calling the getLinks function with 2 args and index out of array's bounds from any account", async () => {
        //     const trx = {
        //         value: BigNumber.from(DEFAULT_FINNEY),
        //     };
        //     for (let i = 0; i < 5; i++) {    
        //         await giftFactory.createCard(title, description, fundingToBeReleased, dateToBeReleased, beneficiary, trx);      
        //     }
        //     await expect(giftFactory["getLinks(address,uint256)"](otherAddress1, BigNumber.from(2))).revertedWith('Read index out of bounds');
        // });

        // it("Should return the 2nd and 3rd of the 5 sender's created cards addresses list when calling the getLinks function with 2 args from the same account", async () => {
        //     const trx = {
        //         value: BigNumber.from(DEFAULT_FINNEY),
        //     };
        //     for (let i = 0; i < 5; i++) {    
        //         await giftFactory.createCard(title, description, fundingToBeReleased, dateToBeReleased, beneficiary, trx);      
        //     }
        //     const links: string[] = await giftFactory["getLinks(address,uint256,uint256)"](ownerAddress, BigNumber.from(0), BigNumber.from(2));
        //     const expectedLinksList= [
        //         '0x0a26c41eB1D42981aD15d7D593789cC455B7Ae71',
        //         '0x3056A5f9c067A69622fc301a0b8A279eFa73C24b'
        //     ]            
        //     expect(links).to.deep.equal(expectedLinksList);
        // });

        // it("Should return an emtpy array when calling the getLinks function with 3 args from a non-creator account", async () => {
        //     const trx = {
        //         value: BigNumber.from(DEFAULT_FINNEY),
        //     };
        //     for (let i = 0; i < 5; i++) {    
        //         await giftFactory.createCard(title, description, fundingToBeReleased, dateToBeReleased, beneficiary, trx);      
        //     }
        //     const links: string[] = await giftFactory["getLinks(address,uint256,uint256)"](otherAddress1, BigNumber.from(0), BigNumber.from(0));
        //     const expectedLinksList: string[] = []
        //     expect(links).to.deep.equal(expectedLinksList);
        // });

        // it("Should revert when calling the getLinks function with 3 args and index out of array's bounds from any account", async () => {
        //     const trx = {
        //         value: BigNumber.from(DEFAULT_FINNEY),
        //     };
        //     for (let i = 0; i < 5; i++) {    
        //         await giftFactory.createCard(title, description, fundingToBeReleased, dateToBeReleased, beneficiary, trx);      
        //     }
        //     await expect(giftFactory["getLinks(address,uint256,uint256)"](ownerAddress, BigNumber.from(6), BigNumber.from(2))).revertedWith('Read index out of bounds');
        // });

        // it("Should emit a CardCreated event", async () => {

        //     let address: string | null = null;
        //     let value: BigNumber | null = null;

        //     if (cardCreatedEvent?.args?.length) {
        //         address = cardCreatedEvent.args[0];
        //         value = cardCreatedEvent.args[1];
        //     }
            
        //     cardCreatedAddress = '0x815b1008f769e9CDD38e4A3fe2236FD56aD508D8';
        //     expect(address).to.be.not.null;
        //     expect(address).to.be.equal(cardCreatedAddress);
        //     expect(value).to.be.not.null;
        //     expect(value).to.be.equal(DEFAULT_FINNEY);
        // });
    });
});