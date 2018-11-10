import React, { Component } from 'react';

import Topbar from '../componentes/Topbar'

import PokemonCard from '../componentes/pokemonCards';



const styles = {
  root: {
    flexGrow: 1,
  },
};

class Pokemon extends Component {
  render() {
    const id = this.props.match.params.id
    return (
    <div>
        <Topbar titulo = "Pokemon" cor = "secondary"/>
        <div style={{marginTop: 64}}>
        <PokemonCard pokemonId ={id}/>
    </div>
    </div>


   )
  }
}

export default Pokemon;