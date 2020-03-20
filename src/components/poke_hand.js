import React from 'react';



const Pokehand = (props) => {
  // get four random pokemons and make poke cards components out of them, and then render the variable
  return (
    <div>
      <h1 style={{margin: "0 auto", width: "113px", textAlign: 'center'}}>{props.winner ? 'winner!' : 'looser'}</h1>
      <div className={props.winner ? 'poke-hand winner' : 'poke-hand'}>
        {props.hand}
      </div>
    </div>
  )
}

export default Pokehand;
