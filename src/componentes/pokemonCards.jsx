import React from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import { Typography, CardContent } from '@material-ui/core';




class PokemonCard extends React.Component {
    
    state = {
        
        foto: '',
        nome: '',
        num: '',
        ability: ''

        
     
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
        //console.log(data.abilities[1].ability.name)
        const ability = data.abilities[1].ability.name
        //var propri = [data.name, data.sprites.front_default, data.id]
        this.setState({nome, foto, num, ability})
        //this.setState({nome, foto, num})
    }

    primeiraMaiscula(string) {
        return string.replace(string.charAt(0), string.charAt(0).toUpperCase())
    }

    render(){
        const { foto, nome, num, ability} = this.state
        console.log("Renderizei")

        
        return (
        <Card>
        <CardHeader
            style = {{width:1, height:100, padding: 1}}
            avatar= { <Avatar style={{ width: 96, height: 96, padding:0}} src = {foto} aria-label ='Recipe' />}
            title = {this.primeiraMaiscula(nome)}
            subheader = {num}
            
            

        />
        <CardContent  style = {{marginLeft: 20, marginBottom:20, padding:0 }}>
            <Typography component = "p" >
                Ability: {this.primeiraMaiscula(ability)}
            </Typography>

        </CardContent>
        
        </Card>
        )
        
    }
}

export default PokemonCard