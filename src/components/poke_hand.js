import React from 'react';



const Pokehand = (props) => {
  // get four random pokemons and make poke cards components out of them, and then render the variable
  return (
    <div className={props.winner ? 'poke-hand winner' : 'poke-hand'}>
      {props.hand}
    </div>
  )
}

export default Pokehand;
