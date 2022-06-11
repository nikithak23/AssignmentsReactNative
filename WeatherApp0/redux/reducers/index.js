import { combineReducers } from 'redux';

// Imports: Reducers
import favReducer from './favReducer';
import recSearchReducer from './recSearchReducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
  favData: favReducer,
  recSearchData:recSearchReducer,
});
  
  // Exports
  export default rootReducer;