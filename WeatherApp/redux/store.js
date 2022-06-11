import {configureStore} from '@reduxjs/toolkit';
import {combineReducers, applyMiddleware, compose} from 'redux';
import ReduxThunk from 'redux-thunk';

import favReducer from './reducers/favReducer';
import recSearchReducer from './reducers/recSearchReducer';

const rootReducer = combineReducers({
  favData: favReducer,
  recSearchData:recSearchReducer,
});

//let composeEnhancers = compose;

//if (__DEV__) {
//  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//}

const store = configureStore({
  reducer: rootReducer,
  //enhancer: composeEnhancers(applyMiddleware(ReduxThunk)),
});

export default store;
