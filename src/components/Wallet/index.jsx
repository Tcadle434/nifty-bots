import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setWalletAddress } from '../../store/Wallet/Wallet.action';
import './Wallet.css';

export const Wallet = props => {

    const { address } = useSelector(({ Wallet }) => Wallet);
    const dispatch = useDispatch();

    const connectWallet = e => {
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

    const disconnectWallet = e => {
        if(window.solana){
            window.solana.disconnect();
            window.solana.on('disconnect', () => {
                console.log("disconnected!");
                dispatch(setWalletAddress(undefined));
            });
        }
    }
    return (
        <div>
            <button className="" onClick={e => connectWallet(e)}>
                {address ? address : 'Connect Wallet'}
            </button>
            {
                address && (
                    <button className="" onClick={e => disconnectWallet(e)}>
                        Log out
                    </button>
                )
            }
        </div>
    )
}
