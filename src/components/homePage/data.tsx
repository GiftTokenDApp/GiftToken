import { accounts } from "../../helpers/dataHelpers";
import IGiftCardProps from "../giftCard/interface";

  export const giftCardsData: Array<IGiftCardProps> = [{
    index: 0,
    address: '0x000000000000000000000000000000000000000001',
    title:'Super carte 1',
    description:'La première carte',
    // coinsAmount: {
    //     eth: 0,
    // },
    coinsAmount: 0,
    creator: accounts.account0.privateKey,
    funders: [accounts.account0.privateKey],
    beneficiary: null,
    releaseDate: null,
    // img: VPIllustrations1,
}, {
    index: 1,
    address: '0x000000000000000000000000000000000000000002',
    title:'Super carte 2',
    description:'La seconde carte',
    // coinsAmount: {
    //     eth: 0,
    // },
    coinsAmount: 0,
    creator: accounts.account0.privateKey,
    funders: [accounts.account0.privateKey],
    beneficiary: null,
    releaseDate: null,
    // img: VPIllustrations2,
}, {
    index: 2,
    address: '0x000000000000000000000000000000000000000003',
    title:'Super carte 3',
    description:'La troisième carte',
    // coinsAmount: {
    //     eth: 0,
    // },
    coinsAmount: 0,
    creator: accounts.account2.privateKey,
    funders: [accounts.account2.privateKey, accounts.account0.privateKey],
    beneficiary: null,
    releaseDate: null,
    // img: VPIllustrations3,
}, {
    index: 3,
    address: '0x000000000000000000000000000000000000000004',
    title:'Super carte 4',
    description:'La quatrième carte',
    // coinsAmount: {
    //     eth: 0,
    // },
    coinsAmount: 0,
    creator: accounts.account3.privateKey,
    funders: [accounts.account3.privateKey, accounts.account1.privateKey],
    beneficiary: null,
    releaseDate: null,
    // img: VPIllustrations4,
}]