import React, { useState } from 'react';
import video from '../../assets/video.mp4';
import './login.css';


const Login  = () => {
    return(
    <>
                                <div className='container_video'>
                                <video id='videop' src={video} loop muted autoPlay  ></video>
                            </div>
                           
    <div className='tout'>
     
        

        <div className='formulaire'>

            <h1 id='title'>Connexion</h1>
            <div className='users'>

                    <div className='labelus'>

                        <label htmlFor="">Utilisateur</label>
                    </div>

                <input id='inputusers' type="text" placeholder='Utilisateurs' />
            </div>

            <div className='mdp'>

                <div className='labelmdp'>

                    <label htmlFor="mdp">Mot De Passe</label>
                </div>
                    
                            <input id='inputmdp' type="password" name="password"  placeholder='Mot De Passe' />

                                    <div className='flexbox'>
                                        <div className='inputvalide'>
                                            <input type="checkbox" name="Ce souvenir de moi" id="check" />
                                            <label htmlFor=""> Ce souvenir de moi</label>
                                        </div>

                        <div className='forget'>
                                    <a href="#">Mot de passe oubliée ?</a>
                                </div>
                                </div>
                                

                                
                         
                            <div className='container-button'>

                                <input id='button' type="button" value="Connexion" />
                                

                            </div>


                           
                    
            </div>
                                
            
               
            
        </div>
        
    </div>
    
    
    
    
    
    
    
    
    
    
    </>
    );
}

export default Login;