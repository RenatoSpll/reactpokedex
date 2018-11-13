import React, { Component } from 'react';


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Dropdown from './Dropdown';

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
      pointerEvents: 'none',
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
      paddingLeft: theme.spacing.unit * 7,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: 200,
      },
    }
    
});


class Topbar extends Component {
  
  render() {
    const {classes, titulo, history} = this.props
    return (
      <div className={classes.root}>
      <AppBar position="fixed" color="secondary">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            { titulo }
            
          </Typography>
          <Dropdown style = {{margin:10, height: 1}}></Dropdown>
          <div className={classes.search}>
              <div className={classes.searchIcon}>
              <SearchIcon/>
              </div>
              <InputBase
                placeholder="Buscar Pokémon"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
        </Toolbar>
      </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Topbar);