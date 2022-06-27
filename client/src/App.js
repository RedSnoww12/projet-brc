import { Navbar, RafflesPage, Footer, Shop } from './components';

import './App.css';

function App() {
  return (
    <div className="App">

      <div className='App-header'>
        <Navbar /> 
      </div>
      
    <div className='body'>
      <RafflesPage />
      <Shop />
    </div>
    
    <div className='footer'>
      <Footer />
    </div>

    </div>
  );
}

export default App;
