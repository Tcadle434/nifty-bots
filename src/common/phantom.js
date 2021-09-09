import { setWalletAddress } from '../store/Wallet/Wallet.action';

export const connectWallet = dispatch => {
    if (window.solana) {
        window.solana.connect();
        window.solana.on("connect", () => {
            console.log("connected!");
            dispatch(setWalletAddress('Connected'));
        });
    } else {
        window.open("https://phantom.app/", "_blank");
    }
}

export const disconnectWallet = dispatch => {
    if(window.solana){
        window.solana.disconnect();
        window.solana.on('disconnect', () => {
            console.log("disconnected!");
            dispatch(setWalletAddress(undefined));
        });
    }
}
