/*
import {configureStore} from '@reduxjs/toolkit';
import {combineReducers, applyMiddleware, compose} from 'redux';
import ReduxThunk from 'redux-thunk';


import favReducer from './reducers/favReducer';
import recSearchReducer from './reducers/recSearchReducer';
const rootReducer = combineReducers({
  favData: favReducer,
  recSearchData:recSearchReducer,
});



const store = configureStore({
  reducer: rootReducer,
});

export default store;
*/





import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

import rootReducer from './reducers/index';

// Middleware: Redux Persist Config
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,

};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer)

// Redux: Store
const store = createStore(
  persistedReducer,
  applyMiddleware(thunk));

// Middleware: Redux Persist Persister
let persistor = persistStore(store);

export {store,persistor};
