import React, { useState } from 'react';
import video from '../../assets/video.mp4';
import './register.css';




const Login  = () => {
    return(
    <>
         
             <div className='container_video'>
            <video id='videop' src={video} loop muted autoPlay  ></video>
        </div>

    

     <div className='form-register'>
        <div className='form'>
       <div className='ligne1'>

            <div className='email'>
                

                <div className='label1'>

                    <label htmlFor="">E-MAIL</label>
                </div>

                    <input type="email" name="email" id="email" placeholder='Email' />

                </div>

            <div className='pseudo'>

                <div className='label6'>

                    <label htmlFor="pseudo">PSEUDO</label>

                </div>

                <input type="text" name="pseudo" id="pseudo" placeholder='Pseudo' />

            </div>
        </div> 
                <div className='ligne2'>
                    <div className='nom'>

                        <div className='label2'>
                        
                            <label htmlFor="">NOM</label>

                        </div>

                        <input type="text" name="nom" id="nom" placeholder='Nom' />

                    </div>

                    <div className='Prenom'>

                        <div className='label3'>
                        
                            <label htmlFor="Prenom">PRENOM</label>

                        </div>
            
                        <input type="text" name="prenom" id="prenom" placeholder='Prenom' />

                    </div>

                </div>

            <div className='ligne3'>

                <div className='MDP'>

                    <div className='label4'>

                        <label htmlFor="mdp">MOT DE PASSE</label>

                    </div>

                    <input type="password" name="mdp" id="mdp" placeholder='Mot de passe' />

                </div>

                <div className='confmdp'>

                    <div className='label5'>

                        <label htmlFor="mdp">CONFIRMER MOT DE PASSE</label>

                    </div>

                    <input type="password" name="cmdp" id="cmdp" placeholder='Mot de passe' />

                </div>
               
                </div>

            </div>
            <div className='ligne4'>

                
                <div className='bouton'>

                    <input id='bouton' type="submit" value="Inscription" />

                </div>
            </div>

     </div>


    </>
    );
}

export default Login;