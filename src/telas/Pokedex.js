import React, { Component } from 'react';

import Topbar from '../componentes/Topbar'

import PokemonCard from '../componentes/pokemonCards';



const styles = {
  root: {
    flexGrow: 1,
  },
};

const listaPokemons = (props) => [214, 471, 398, 501, 10063].map(id =>{
  return (
    <div
        style={{margin: 10, cursor: 'pointer'}}
        key={id}
        onClick = { () => props.history.push(`/pokemon/${id}`)}>
    
    <PokemonCard key={id}  pokemonId = {id} />
    </div>)
})

class Pokedex extends Component {
  render() {
   return (
     <div style={{marginTop:64}}>
       <Topbar titulo = "Pokedex" cor = "primary"/>
       <div style={{marginTop: 64}}>{listaPokemons(this.props)}</div>
       
 
     </div>
   )
  }
}

export default Pokedex;