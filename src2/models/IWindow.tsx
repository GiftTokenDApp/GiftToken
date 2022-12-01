interface IWindow {
    ethereum: {
        isMetaMask?: boolean;
        host?: string;
        path?: string;
        sendAsync?: (request: any, callback: (error: any, response: any) => void) => void;
        send?: (request: any, callback: (error: any, response: any) => void) => void;
        request: any;
    }
}

export default IWindow;