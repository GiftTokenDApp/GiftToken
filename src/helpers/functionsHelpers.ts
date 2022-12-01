import { Address } from "./typesHelpers";

export const formatETHAddress = (addr: Address, size = 4) => {
    
    const first = addr.slice(0, size + 1);
    const last = addr.slice(-size);
    return addr === "" ? null : first + "..." + last;
}