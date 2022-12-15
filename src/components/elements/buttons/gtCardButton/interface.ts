import IButtonProps from "../interface"

export default interface IGTCardButtonProps extends IButtonProps {
    func: (dir: string) => void,
}