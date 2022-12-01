import { Address } from "../../helpers/typesHelpers";

export default interface IGiftCardProps {
    get index(): number | null
    get address(): Address | null
    get title(): string | null
    get description(): string | null
    // get coinsAmount(): {
    //     get eth(): number
    // }
    get coinsAmount(): number | null
    get creator(): Address | null
    get funders(): Address[] | null
    get beneficiary(): Address | null
    get releaseDate(): string | null
    // get img(): {
    //     xs: JSX.Element,
    //     md: JSX.Element,
    //     lg?: JSX.Element,
    // },
};