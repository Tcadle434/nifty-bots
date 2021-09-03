import { SET_TOKEN, SET_WALLET_ADDRESS, SET_TOKEN_BALANCE, SET_PUBLIC_KEY } from "./Wallet.reducer.js";

export const setWalletAddress = value => ({
    type: SET_WALLET_ADDRESS,
    value
});

export const setToken = (token, value) => ({
    type: SET_TOKEN,
    token,
    value
});

export const setTokenBalance = (token, value) => ({
    type: SET_TOKEN_BALANCE,
    token,
    value
});

export const setPublicKey = value => ({
    type: SET_PUBLIC_KEY,
    value
});
