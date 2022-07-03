import { SHOES_LIST_REQUEST, SHOES_LIST_FAIL, SHOES_LIST_SUCCESS, SHOES_DETAILS_REQUEST, SHOES_DETAILS_SUCCESS, SHOES_DETAILS_FAIL } from './../Constants/ShoesConstants';



// SHOES LIST
export const shoesListReducer = (state = {shoes:[]}, action) => {
    switch (action.type) {
        case SHOES_LIST_REQUEST:
            return {loading: true, shoes: []};

        case SHOES_LIST_SUCCESS:
            return {loading: false, shoes: action.payload};

        case SHOES_LIST_FAIL:
            return {loading: false, error: action.payload};
    
        default:
            return state;
    }
}

// SINGLE SHOES
export const shoesDetailsReducer = (state = {shoe:{}}, action) => {
    switch (action.type) {
        case SHOES_DETAILS_REQUEST:
            return {...state, loading: true};

        case SHOES_DETAILS_SUCCESS:
            return {loading: false, shoe: action.payload};

        case SHOES_DETAILS_FAIL:
            return {loading: false, error: action.payload};
    
        default:
            return state;
    }
}