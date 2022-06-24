import { Navbar, RafflesPage } from './components';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className='App-header'>
        <Navbar /> 
      </div>
      
    <div className='body'>
      <RafflesPage />
    </div>
    </div>
  );
}

export default App;
