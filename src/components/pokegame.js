import React from 'react';
import PokeHand from './poke_hand'
import PokeCard from './poke_card'
import pokemons from '../pokemons'


const Pokegame = (props) => {
  const pokemonComponents = pokemons.map((pokemon) => {
    return (
      <PokeCard name={pokemon.name} id={pokemon.id} key={pokemon.id} type={pokemon.type} exp={pokemon.base_experience} />
    )
  })
  const handOne = []
  for (let step = 0; step <= 3; step += 1) {
    // Runs 5 times, with values of step 0 through 4.
    const index = Math.floor(Math.random() * pokemonComponents.length)
    handOne.push(pokemonComponents[index])
    pokemonComponents.splice(index, 1);
  }

  const handTwo = []
  for (let step = 0; step <= 3; step += 1) {
    // Runs 5 times, with values of step 0 through 4.
    const index = Math.floor(Math.random() * pokemonComponents.length)
    handTwo.push(pokemonComponents[index])
    pokemonComponents.splice(index, 1);
  }

  const expOne = handOne.map((pokemon) => {return pokemon.props.exp})
  const expTwo = handTwo.map((pokemon) => {return pokemon.props.exp})


  const addExp = (total, num) => {
    return total + num;
  }


  const expOneTotal = expOne.reduce(addExp);
  const expTwoTotal = expTwo.reduce(addExp);

  if (expOneTotal >= expTwoTotal) {
    return (
      <div className="poke-game">
        <h1 style={{margin: "0 auto", width: "113px"}}>winner!</h1>
        <PokeHand hand={handOne} winner={true}/>
        <h1 style={{margin: "0 auto", width: "41px"}}>VS</h1>
        <PokeHand hand={handTwo}/>
      </div>
    )
  }else {
    return (
      <div className="poke-game">
        <PokeHand hand={handOne}/>
        <h1 style={{margin: "0 auto", width: "41px"}}>VS</h1>
        <h1 style={{margin: "0 auto", width: "113px"}}>winner!</h1>
        <PokeHand hand={handTwo} winner={true}/>
      </div>
    )
  }
}

export default Pokegame;
