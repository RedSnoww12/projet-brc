import  axios  from 'axios';
import { SHOES_DETAILS_REQUEST, SHOES_LIST_FAIL, SHOES_LIST_REQUEST, SHOES_LIST_SUCCESS, SHOES_DETAILS_SUCCESS, SHOES_DETAILS_FAIL } from './../Constants/ShoesConstants';

// ALL SHOES
export const listShoes = () => async(dispatch) =>{
    try {
        dispatch({type:SHOES_LIST_REQUEST});

        const {data} = await axios.get("/shoes");
        dispatch({type: SHOES_LIST_SUCCESS, payload: data});

    } catch (error) {
        dispatch({
            type:SHOES_LIST_FAIL,
            payload:
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        });
    }
};

// ONE SHOES
export const detailsShoes = (id) => async(dispatch) =>{
    try {
        dispatch({type:SHOES_DETAILS_REQUEST});

        const {data} = await axios.get(`/shoes/${id}`);
        dispatch({type: SHOES_DETAILS_SUCCESS, payload: data});

    } catch (error) {
        dispatch({
            type:SHOES_DETAILS_FAIL,
            payload:
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        });
    }
};