import { SHOES_LIST_REQUEST, SHOES_LIST_FAIL, SHOES_LIST_SUCCESS, SHOES_DETAILS_REQUEST, SHOES_DETAILS_SUCCESS, SHOES_DETAILS_FAIL } from '../Constants/ShoesConstants';



// SHOES LIST
export const shoesListReducer = (state = {events:[]}, action) => {
    switch (action.type) {
        case SHOES_LIST_REQUEST:
            return {loading: true, events: []};

        case SHOES_LIST_SUCCESS:
            return {loading: false, events: action.payload};

        case SHOES_LIST_FAIL:
            return {loading: false, error: action.payload};
    
        default:
            return state;
    }
}

// SINGLE Event
export const EventDetailsReducer = (state = {event:{}}, action) => {
    switch (action.type) {
        case SHOES_DETAILS_REQUEST:
            return {...state, loading: true};

        case SHOES_DETAILS_SUCCESS:
            return {loading: false, event: action.payload};

        case SHOES_DETAILS_FAIL:
            return {loading: false, error: action.payload};
    
        default:
            return state;
    }
}