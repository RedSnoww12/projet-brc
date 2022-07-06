import React, {useEffect} from "react";
import { Navbar, Footer, Event, Loading, Error } from "../components";
import { useDispatch, useSelector } from 'react-redux';
import { detailsEvent } from "../Redux/Actions/ShoesActions";
import { useParams } from "react-router";



const SingleShoes = () => {

    //const shoesId = match.params.id;
    const {eventId} = useParams();

    const dispatch = useDispatch();


    const eventDetails = useSelector((state) => state.eventDetails);
    const {loading, error, event} = eventDetails;


    useEffect(() =>{
        dispatch(detailsEvent(eventId));
    }, [dispatch, eventId])

    
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
                            {/* <Event event={event[0]}/> */}
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