import { combineReducers } from 'redux';
import itemsReducer from './itemsReducer';
import moveDetailsReducer from '../redux/moveDetailsSlice';
import moreDetailsReducer from '../redux/moreDetailsslice';

const rootReducer = combineReducers({
    items: itemsReducer,
    moveDetails: moveDetailsReducer,
    moreDetails: moreDetailsReducer
});

export default rootReducer;
