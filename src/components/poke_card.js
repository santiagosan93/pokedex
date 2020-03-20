import React from 'react';

const PokeCard = (props) => {
  // TODO: Call the api to get images regarding the Id of the pokemon
  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`
  console.log(url)
  return (
    <div className={`poke-card ${props.type.toLowerCase()}`}>
      <h3>{props.name}</h3>
      <img src={url} alt=""/>
      <h4>Type: {props.type}</h4>
      <h4>Exp: {props.exp}</h4>
    </div>
  )
}

export default PokeCard;
