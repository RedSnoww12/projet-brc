import './main_page.css';
import SneakerImg from '../../assets/aj4.png';

const RafflesPage = () => {
    return(
        <div className="containerRflPage">
            <div className="WelcomeContainer">
                <div className="lblContainer">
                    <h1> L'anti Raffle<br /> Inscrit toi et gagne ta paire ! </h1>
                    <h2>Trouve ta paire prend ton ticket et bonne chance ! </h2>
                    <p> La Raffle : tirage aux sort gratuit pour une paire de sneakers en quantité limité, à l'issu du quelle 
                        vous obtenez le droit d'acheter la paire en jeu <br /><br />
                        <span> L'Anti raffle </span>: Nombre de participant limité avec un nombre de pair défini sur un tirage au sort à l'issu duquel
                        <span> vous obtenez la paire et non  le droit de l'acheter.</span> <br /> <br />
                        Inscrit toi et rejoins l'anti raffles! </p>

                    <a href=""> S'inscrire 📝</a>
                </div>
                <div className="PhotolblContainer">
                    <img src={SneakerImg} alt="" />
                </div>
            </div>
            
        </div>
    );
}

export default RafflesPage;