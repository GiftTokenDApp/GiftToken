import { ethers } from "hardhat";
import { BigNumber } from "ethers";
import { expect } from 'chai';
import { GiftNetwork as GiftNetworkContract, FundingEvent, FundingEventFilter, SettedUserEvent, SettedUserEventFilter, AddedFriendEvent, AddedFriendEventFilter, SendedMessageEvent, SendedMessageEventFilter, UserStructOutput} from '../src/typechain-types/contracts/GiftNetwork';

type Event = null | FundingEvent| SettedUserEvent | AddedFriendEvent | SendedMessageEvent;
type EventFilter = null | FundingEventFilter | SettedUserEventFilter | AddedFriendEventFilter | SendedMessageEventFilter;

const NULL_ADDRESS: string = '0x0000000000000000000000000000000000000000';
const DEFAULT_BIGNUMBER: BigNumber = BigNumber.from(0);

let giftNetwork: GiftNetworkContract;
let ownerAddress: string;
let otherAddress1: string;

async function reinitAll(): Promise<void> {

    const GiftNetwork = await ethers.getContractFactory("GiftNetwork");
    giftNetwork = await GiftNetwork.deploy() as GiftNetworkContract;
    await giftNetwork.deployed();

    const [ownerAccount, otherAccount1] = await ethers.getSigners();
    ownerAddress = ownerAccount.address;
    otherAddress1 = otherAccount1.address;
}

async function getFirstOrDefaultEvent(eventFilter: EventFilter): Promise<Event> {
    if (eventFilter == null) {
        return null;
    }
    const events: Event[] = await giftNetwork.queryFilter(eventFilter);   
    return events.length ? events[0] : null;
}

async function getLastOrDefaultEvent(eventFilter: EventFilter): Promise<Event> {
    if (eventFilter == null) {
        return null;
    }
    const events: Event[] = await giftNetwork.queryFilter(eventFilter);
    return events.length ? events[events.length-1] : null;
}

describe("GiftNetworktesting", () => {

    beforeEach(reinitAll);

    describe("Constructor network", () => {

        it("Should have unknown account not exists", async () => {
            const userExists:boolean = await giftNetwork.getUserExists(ownerAddress);
            expect(userExists).to.be.false;
        });

        it("Should have unknown account have empty data", async () => {
            const user:UserStructOutput = await giftNetwork.getUser(ownerAddress);
            const userPseudo: string = user[0];
            const userIpfsLink: string = user[1];
            const userFriends: string[] = user[2];
    
            expect(userPseudo).to.be.not.null;
            expect(userPseudo).to.be.equal("");
    
            expect(userIpfsLink).to.be.not.null;
            expect(userIpfsLink).to.be.equal("");

            expect(userFriends).to.be.not.null;
            expect(userFriends.length).to.be.equal(0);
        });

        it("Should have unknown account not have friend", async () => {
            await expect(giftNetwork.getFriends()).revertedWith("Sender doesn't have an user account");
        });
    });

    describe("Set User testing", () => {

        const pseudo: string = "Pépito";
        const ipfsLink: string = "...";

        it("Should doesn't have empty pseudo", async () => {
            await expect(giftNetwork.setUser("", ipfsLink)).revertedWith("String is empty");
        });

        it("Should doesn't have pseudo with space as first", async () => {
            await expect(giftNetwork.setUser(" ", ipfsLink)).revertedWith("String starts with space");
        });

        it("Should retrieve user's data shared", async () => {
            await giftNetwork.setUser(pseudo, ipfsLink);

            const user:UserStructOutput = await giftNetwork.getUser(ownerAddress);
            const userPseudo: string = user[0];
            const userIpfsLink: string = user[1];
            const userFriends: string[] = user[2];
    
            expect(userPseudo).to.be.not.null;
            expect(userPseudo).to.be.equal(pseudo);
    
            expect(userIpfsLink).to.be.not.null;
            expect(userIpfsLink).to.be.equal(ipfsLink);

            expect(userFriends).to.be.not.null;
            expect(userFriends.length).to.be.equal(0);
        });

        it("Should get the SettedUser event from the SetUser function", async() => {
            await giftNetwork.setUser(pseudo, ipfsLink);
    
            const event: SettedUserEvent = await getFirstOrDefaultEvent(giftNetwork.filters.SettedUser()) as SettedUserEvent;
            const argAddress = event?.args?.length ? event.args[0] : null;
            const argPseudo = event?.args?.length ? event.args[1] : null;
    
            expect(argAddress).to.be.not.null;
            expect(argAddress).to.be.equal(ownerAddress);
    
            expect(argPseudo).to.be.not.null;
            expect(argPseudo).to.be.equal(pseudo);
        });

        it("Should have known user exists", async () => {
            await giftNetwork.setUser(pseudo, ipfsLink);
            const userExists:boolean = await giftNetwork.getUserExists(ownerAddress);
            expect(userExists).to.be.true;
        });
    });
});