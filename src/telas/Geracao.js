import React, { Component } from 'react';

import Topbar from '../componentes/Topbar'
import PokemonCard from '../componentes/pokemonCards';
import { withRouter } from "react-router"


const pokemongen1 =  [1,4,7]
const pokemongen2 =  [152,155,158]
const pokemongen3 =  [252,255,258]
const pokemongen4 =  [387,390,393]
const pokemongen5 = [495,498,501]
const pokemongen6 = [650, 653, 656]
const pokemongen = [pokemongen1, pokemongen2, pokemongen3, pokemongen4, pokemongen5, pokemongen6]
 
function definirGen(props){
  let path = props.location.pathname
  console.log(path.split("/gen")[1]);
   return path.split("/gen")[1]
}

const listaPokemons = (props, gen) => pokemongen[gen-1].map(id =>{
    console.log(props.location.pathname);
    definirGen(props)
    
    return (
      <div
        style={{margin: 10, cursor: 'pointer'}}
        //key={id}
        onClick = { () => props.history.push(`/pokemon/${id}`)}
        >
      
      <PokemonCard key={id}  pokemonId = {id} />
      </div>)
  })

  class Geracao extends Component {
    
    
    
    render() {
     return (
       <div style={{marginTop:64}}>
          
         <Topbar titulo = "Pokedéx" cor = "primary"/>
         <div style={{marginTop: 64}}>{listaPokemons(this.props,definirGen(this.props))}</div>
         
          
       </div>
  
     )
    }
  }
  export default withRouter(Geracao)