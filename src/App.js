import React from 'react';
import Pokegame from './components/pokegame'
import PokeHeader from './components/poke_header'
import './App.scss';

const App = (props) => {
  return (
    <div>
      <PokeHeader/>
      <Pokegame/>
    </div>
  )
}

export default App;
