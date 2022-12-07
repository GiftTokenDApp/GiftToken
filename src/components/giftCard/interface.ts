import { ethers } from "ethers";
import { Address } from "../../helpers/typesHelpers";

export default interface IGiftCardProps {
    address: Address,
    contract: ethers.Contract,
    title: string,
    description: string,
    creationDate: number,
    goal: number,
    creator: Address,
    funders: Address[],
    beneficiary: Address,
    status: number,
    releaseDate: number,
    coinsAmount: number,
    cardDAOAddress: Address,
};