import _ from "lodash";

export const SET_WALLET_ADDRESS = 'SET_WALLET_ADDRESS';
export const SET_PUBLIC_KEY = 'SET_PUBLIC_KEY';
export const SET_TOKEN = 'SET_TOKEN';
export const SET_TOKEN_BALANCE = 'SET_TOKEN_BALANCE';

const addTokenToWallet = (state, token) => {
    let newState = _.cloneDeep(state);
    if (!newState[token]) {
        newState[token] = {}
    }
    return newState;
}

export const Wallet = (state = {}, action) => {
    const { type, value, token } = action;
    let newState = _.cloneDeep(state);
    switch (type) {
        case SET_WALLET_ADDRESS:
            newState.address = value;
            return newState;
        case SET_TOKEN:
            newState[token] = value;
            return newState;
        case SET_TOKEN_BALANCE:
            newState = addTokenToWallet(state, token);
            newState[token].balance = value;
            return newState;
        case SET_PUBLIC_KEY:
            newState.publicKey = value;
            return newState;
        default:
            break;

    }

    return state;
}
