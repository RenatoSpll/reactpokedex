import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

class Dropdown extends React.Component {
    state = {
      anchorEl: null,
    };
  
    handleClick = event => {
      this.setState({ anchorEl: event.currentTarget });
    };
  
    handleClose = () => {
      this.setState({ anchorEl: null });
    };

    mudarTela(){
        this.props.history.push(`/gen1`)
    }
  
    render() {
      const { anchorEl } = this.state;
     
      return (
        <div>
          <Button
            aria-owns={anchorEl ? 'simple-menu' : undefined}
            aria-haspopup="true"
            onClick={this.handleClick}
          >
            Gerações
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
          >
            <MenuItem onClick =  { () => this.mudarTela()}>Gen1</MenuItem>
            <MenuItem onClick={this.handleClose}>Gen2</MenuItem>
           <MenuItem onClick = { this.handleClose}>Gen3</MenuItem>
            <MenuItem onClick = { this.handleClose}>Gen4</MenuItem>
            <MenuItem onClick = { this.handleClose}>Gen5</MenuItem>
            <MenuItem onClick = { this.handleClose}>Gen6</MenuItem>
          </Menu>
        </div>
      );
    }
  }
  
  export default Dropdown;