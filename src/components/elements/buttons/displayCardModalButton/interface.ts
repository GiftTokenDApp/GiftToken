import IButtonProps from "../interface"

export interface IDisplayCardModalButtonProps extends IButtonProps {
    vote: boolean,
    setVote: (vote: boolean) => void
    hasSubmittedVote: boolean,
}
export interface ICloseDAOButtonProps extends IButtonProps {
    closeDAO: () => void
    hasSubmitted: boolean,
}