import React, {useEffect} from "react";
import { Navbar, Footer, Shoes, Loading, Error } from "../components";
import { useDispatch, useSelector } from 'react-redux';
import { detailsShoes } from "../Redux/Actions/ShoesActions";
import { useParams } from "react-router";



const SingleShoes = () => {

    //const shoesId = match.params.id;
    const {shoesId} = useParams();

    const dispatch = useDispatch();


    const shoesDetails = useSelector((state) => state.shoesDetails);
    const {loading, error, shoe} = shoesDetails;

    useEffect(() =>{
        dispatch(detailsShoes(shoesId));
    }, [dispatch, shoesId])

    
    return (
        <div className="App">
    
            <div className='App-header'>
                <Navbar /> 
            </div>

            {
                loading ? (<Loading/>)
                : error ? (<Error variant='alert-danger'>{error}</Error>)
                :
                (
                    <>
                        <div className='body'>
            
                            <Shoes shoes={shoe} />

                        </div>
                    </>
                )
            }

            
            <div className='footer'>
            <Footer />
            </div>
    
        </div>
      );
}

export default SingleShoes;