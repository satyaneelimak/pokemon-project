import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';
import PokemonList from '../container/PokemonList';
import ShowPokemon from '../container/ShowPokemon';
import '../styles/App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <div className="linkwrapper">
          <Link to="/"><h1>POKEMON LIST</h1></Link>
        </div>
        <Switch>
          <Route exact path="/" component={PokemonList} />
          <Route exact path="/:id" component={ShowPokemon} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
