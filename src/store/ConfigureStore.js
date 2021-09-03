import { createStore } from 'redux'

import { AppReducer } from './App.reducer.js';

export const ConfigureStore = preloadedState => createStore( AppReducer, preloadedState );
