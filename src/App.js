import React, { Component } from 'react';
import logo from './logo.svg';

import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';



const styles = {
  root: {
    flexGrow: 1,
  },
};


class App extends Component {
  render() {
   return <h1>top</h1>
  }
}

export default withStyles(styles)(App);
