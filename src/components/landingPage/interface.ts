export default interface ILandingPageVPProps {
    get title(): string
    get subTitle(): string
    get img(): {
        xs: JSX.Element,
        md: JSX.Element,
        lg?: JSX.Element,
    },
    get type(): string
    get btnTxt(): string
    get btnCss(): string
};