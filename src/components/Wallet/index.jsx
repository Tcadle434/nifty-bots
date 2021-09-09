import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { connectWallet, disconnectWallet } from '../../common/phantom';
import './Wallet.css';

export const Wallet = props => {

    const { address } = useSelector(({ Wallet }) => Wallet);
    const dispatch = useDispatch();

    return (
        <div>
            <button className="wallet" onClick={e => address ? disconnectWallet(dispatch) : connectWallet(dispatch)}>
                {address ? 'Log out' : 'Connect Wallet'}
            </button>
        </div>
    )
}
