import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { eventDetailsReducer, shoesListReducer } from './Reducers/ShoesReducers';

const reducer = combineReducers({
    shoesList: shoesListReducer,
    eventDetails: eventDetailsReducer
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;