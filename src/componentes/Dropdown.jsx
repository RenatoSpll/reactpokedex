import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withRouter } from "react-router"

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

    mudarTela(gen){
      const ngen = 'gen'+gen
      //console.log(this.props)  
      this.props.history.push('/'+ngen)

    }
  
    render() {
      const { anchorEl } = this.state;
     
      return (
        <div>
          <Button
            style = {{color: "white", left: 10, padding: "2 200"}}
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
            <MenuItem onClick =  { () => this.mudarTela('1')}>Gen1</MenuItem>
            <MenuItem onClick={() => this.mudarTela('2')}>Gen2</MenuItem>
            <MenuItem onClick = { () => this.mudarTela('3')}>Gen3</MenuItem>
            <MenuItem onClick = { () => this.mudarTela('4')}>Gen4</MenuItem>
            <MenuItem onClick = { () => this.mudarTela('5')}>Gen5</MenuItem>
            <MenuItem onClick = { () => this.mudarTela('6')}>Gen6</MenuItem>
          </Menu>
        </div>
      );
    }
  }
  
  export default withRouter(Dropdown);