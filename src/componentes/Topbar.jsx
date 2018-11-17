import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { withStyles} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Dropdown from './Dropdown';
import Button from '@material-ui/core/Button';
import { withRouter } from "react-router"



const buscarid = async(busca, props)=>{
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/')
  const data = await response.json()
  //const id = data.results[1].name
  for (var i=0; i<data.results.length;i++){
    //console.log(data.results[i].name)
    if(data.results[i].name===busca){
      var id = data.results[i].url
      console.log("achei um:")
      break
    }
  } 
  
  
  //const string = ""
  //id.split(https://pokeapi.co/api/v2/id).[1]
  console.log(id.split("https://pokeapi.co/api/v2/pokemon/")[1])
  id = id.split("https://pokeapi.co/api/v2/pokemon/")[1]
  mudarTela(id,props)

  //const url = id.url
  //const string = "bulbassaur"
  //string.slice(string.search(busca))
}

const mudarTela =(id, props) =>{
  //console.log(this.props)  
  props.history.push('/pokemon/'+id)

}
 


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  
  search: {
    position: 'relative',
    left: 20,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
  },
    searchIcon: {
      width: theme.spacing.unit * 7,
      height: '100%',
      position: 'absolute',
      //pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    inputRoot: {
      color: 'inherit',
      width: '100%',
    },
    inputInput: {
      paddingTop: theme.spacing.unit,
      paddingRight: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
      paddingLeft: theme.spacing.unit * 9,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: 200,
      },
    },
    
    button: {
      backgroundColor: fade(theme.palette.common.white, 0.15),
      marginLeft: 9,
      padding: 0,
      color: "white",
      
    }
});


class Topbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pesquisa: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({pesquisa: event.target.pesquisa})
  }

  handleSubmit(event) {
    
    alert('A name was submitted: ' + this.state.pesquisa);
    buscarid(this.state.pesquisa, this.props)
    event.preventDefault();
  }




  render() {
    const {classes, titulo} = this.props
    return (
      <div className={classes.root}>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            { titulo }
          </Typography>
          <Dropdown style = {{margin:10, height: 1}}></Dropdown>
          <div className={classes.search}> 
            
            <form onSubmit = {this.handleSubmit}>
              <div className={classes.searchIcon}>
              <Button type = "submit" className = {classes.button}><SearchIcon/></Button>
              </div>
              <InputBase
                value= {this.state.pesquisa}
                onChange = {this.handleChange}
                placeholder="Buscar Pokémon"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                  
                }}
              />
            </form> 
            
            </div>   
        </Toolbar>
      </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(Topbar));