import { Navbar, RafflesPage, Footer } from '../components';
import { ShopSection } from '../containers';

const HomePage = () => {
    return (
        <div className="App">
    
          <div className='App-header'>
            <Navbar /> 
          </div>
          
        <div className='body'>
          <RafflesPage />
          <ShopSection />
        </div>
        
        <div className='footer'>
          <Footer />
        </div>
    
        </div>
      );
}

export default HomePage;