import React from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';

class PokemonCard extends React.Component {
    
    state = {
        
        foto: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/214.png',
        nome: 'Heracross',
        num: '214'
        
     
    }

    componentWillMount(){
        console.log("Vou montar")
    }
    componentDidMount(){
        console.log("Montei")
        this.carregarPokemon()
    }
    
    carregarPokemon = async() => {
        console.log(this.props.pokemonId)
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemonId}/`)
        const data = await response.json()
        console.log(data.name,)
        const nome = data.name
        const foto = data.sprites.front_default
        const num = data.id
        var propri = [data.name, data.sprites.front_default, data.id]
        this.setState({nome, foto, num})
        
        
    }


    render(){
        const { foto, nome, num} = this.state
        console.log("Renderizei")
        return (
        <Card>
        <CardHeader
            avatar= { <Avatar style={{ width: 80, height: 80}} src = {foto} aria-label ='Recipe' />}
            title = {nome}
            subheader = {num}

                        
    
                

        />
        </Card>
        )
        
    }
}

export default PokemonCard