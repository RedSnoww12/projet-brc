import { Navbar, RafflesPage, Footer, Shop, Login } from './components';

import './App.css';

function App() {
  return (
    <div className="App">

      <div className='App-header'>
        <Navbar /> 
      </div>
      
    <div className='body'>
    <Login /> 
    </div>
    
    <div className='footer'>
      <Footer />
    </div>

    </div>
  );
}

export default App;
