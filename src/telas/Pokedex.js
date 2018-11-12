import React, { Component } from 'react';

import Topbar from '../componentes/Topbar'

import PokemonCard from '../componentes/pokemonCards';
import Button from '@material-ui/core/Button';




const styles = {
  fab: {
    position: 'absolute',
    bottom: 100 * 2,
    right: 300 * 2, 
  },
  root: {
    flexGrow: 1,
  },
};
const pokemons =[214, 471, 398, 501, 552, 523]
const listaPokemons = (props) => pokemons.map(id =>{
  return (
    <div
        style={{margin: 10, cursor: 'pointer'}}
        //key={id}
        onClick = { () => props.history.push(`/pokemon/${id}`)}
        >
    
    <PokemonCard key={id}  pokemonId = {id} />
    </div>)
})
function generateRandomNumber(min , max) 
{
    return Math.random() * (max-min) + min ;
} 
const botao = (props) =>{
  return(
    
      <Button 
        variant = "fab" 
        color = "primary" 
        aria-label="Random" 
        position =  "relative"
        style = {{padding: 20}}
        onClick = { () => props.history.push(`/pokemon/${Math.floor(generateRandomNumber(1,151)) }`)}
        //onClick = { () => pokemons.push(Math.floor(generateRandomNumber(1,151)))}
        >Random</Button>
    
  )
}

class Pokedex extends Component {
  render() {
   return (
     <div style={{marginTop:64}}>
       <Topbar titulo = "Pokedex" cor = "primary"/>
       <div style={{marginTop: 64}}>{listaPokemons(this.props)}</div>
        {botao(this.props)}
        
     </div>

   )
  }
}

export default Pokedex;