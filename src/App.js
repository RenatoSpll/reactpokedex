import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Pokedex from './telas/Pokedex'
import Pokemon from './telas/Pokemon'
import Geracao from './telas/Geracao'


class App extends Component { 
  render() {
   return (
     <Router>
     <div>
       <Route exact path="/" component={Pokedex} />
       <Route exact path="/pokemon/:id" component={Pokemon} />
       <Route exact path="/gen1" component={Geracao} />
       <Route exact path="/gen2" component={Geracao} />
       <Route exact path="/gen3" component={Geracao} />
       <Route exact path="/gen4" component={Geracao} />
       <Route exact path="/gen5" component={Geracao} />
       <Route exact path="/gen6" component={Geracao} />
     </div>
     </Router>
   )
  }
}

export default App;
