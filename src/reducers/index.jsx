import { combineReducers } from 'redux';
import roundReducer from './roundReducer';

const rootReducer = combineReducers({
  roundReducer: roundReducer
});

export default rootReducer;
