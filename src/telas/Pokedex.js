import React, { Component } from 'react';

import Topbar from '../componentes/Topbar'
import InputBase from '@material-ui/core/InputBase';

import PokemonCard from '../componentes/pokemonCards';
import Button from '@material-ui/core/Button';
import Dropdown from '../componentes/Dropdown';




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
const pokemons =[214, 471, 398, 501, 553, 523, 202, 100, 454]

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

/* const buscarPokemon = async(busca)=>{
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`)
  const data = await response.json()
  //const pokemon = data.results.find("name:")
  const pokemon = data.results.map
  console.log(pokemon)
  //const url = pokemon.url
  //const string = "bulbassaur"
  //string.slice(string.search(busca))
}

function procurar() {
  
    const input = InputBase.value
    //console.log(input)
    //buscarPokemon(input)
  
}
 */
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
        style = {{ height: 80, width: 80}} 
        onClick = { () => props.history.push(`/pokemon/${Math.floor(generateRandomNumber(1,807)) }`)}
        //onClick = { () => pokemons.push(Math.floor(generateRandomNumber(1,151)))}
        >Random</Button>
    
  )
}

class Pokedex extends Component {
  render() {
   return (
     <div style={{marginTop:64}}>
        
       <Topbar titulo = "Pokedéx" cor = "primary" />
       <Dropdown style = {{margin:10, height: 1, position: "fixed" }}></Dropdown>
       <div style={{marginTop: 64}}>{listaPokemons(this.props)}</div>
        <div style = {{position: "fixed", padding: 20, bottom: 0 , float: "right", right: 10}}>{botao(this.props)}</div>
        
     </div>

   )
  }
}

export default Pokedex;