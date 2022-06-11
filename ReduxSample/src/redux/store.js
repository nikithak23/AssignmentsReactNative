import {configureStore} from '@reduxjs/toolkit';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import ReduxThunk from 'redux-thunk';

import notesReducer from './reducers/noteReducer';

const rootReducer = combineReducers({
  noteData: notesReducer,
});

let composeEnhancers = compose;

if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const store = configureStore({
  reducer: rootReducer,
  enhancer: composeEnhancers(applyMiddleware(ReduxThunk)),
});

export default store;
