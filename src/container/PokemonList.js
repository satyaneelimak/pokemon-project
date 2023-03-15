/* eslint-disable react/forbid-prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPokemons } from '../redux/actions';
import Pokemon from '../components/Pokemon';


const PokemonList = ({
  getPokemons, pokemons,
}) => {
  useEffect(() => {
    getPokemons();
  }, []);

  return pokemons === null ? <h1>Loading....</h1> : (
    <div>
      {pokemons.map(pokemon => (
        <Pokemon key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  pokemons: state.pokemon.pokemons,
});

export default connect(mapStateToProps, { getPokemons })(PokemonList);
