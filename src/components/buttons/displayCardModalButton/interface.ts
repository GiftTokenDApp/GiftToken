import IButtonProps from "../interface"

export default interface IDisplayCardModalButtonProps extends IButtonProps {
    vote: boolean,
    setVote: (vote: boolean) => void
    hasSubmittedVote: boolean,
}