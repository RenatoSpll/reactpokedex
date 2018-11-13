import React, { Component } from 'react';

import Topbar from '../componentes/Topbar'


import PokemonCard from '../componentes/pokemonCards';
import IconButton from '@material-ui/core/IconButton';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
})

function voltar(props){
 props.history.goBack()
}

class Pokemon extends Component {
  render() {
    const id = this.props.match.params.id
    return (
    <div>
        <Topbar titulo = "Pokemon" cor = "secondary"/>
        <div style={{marginTop: 64}}>
        <PokemonCard pokemonId ={id}/>
        
        <div>
          <IconButton onClick = {() =>voltar(this.props)}>voltar</IconButton>
        </div>
        </div>
        
    </div>


   )
  }
}

export default Pokemon;