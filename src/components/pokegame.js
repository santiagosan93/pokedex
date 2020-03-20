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
  const handTwo = pokemonComponents

  while(handTwo.length > handOne.length ) {
    const index = Math.floor(Math.random() * handTwo.length)
    const pokemon = handTwo.splice(index,1)[0]
    handOne.push(pokemon)
  }

  console.log(handOne, handTwo)

  const expOne = handOne.map((pokemon) => {return pokemon.props.exp})
  const expTwo = handTwo.map((pokemon) => {return pokemon.props.exp})


  const addExp = (total, num) => {
    return total + num;
  }


  const expOneTotal = expOne.reduce(addExp);
  const expTwoTotal = expTwo.reduce(addExp);

  return (
    <div className="poke-game">
      <PokeHand hand={handOne} winner={expOneTotal>= expTwoTotal}/>
      <h1 style={{margin: "0 auto", width: "41px"}}>VS</h1>
      <PokeHand hand={handTwo} winner={expTwoTotal > expOneTotal}/>
    </div>
  )
}

export default Pokegame;
