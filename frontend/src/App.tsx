import { useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Game from './Game/Game';
import EasterEggPage from './EasterEgg/EasterEggPage';

function App() {
  const [page, setPage] = useState('game');

  return (
    <div className='app-container'>
      <NavBar onPageChange={setPage} />
      {
        page === 'game' ? <Game /> : <EasterEggPage/>
      }
    </div>
  );
}

export default App;