/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPokemon } from '../redux/actions';
import '../styles/App.css';

const ShowPokemon = ({ pokemon: { pokemon, loading }, getPokemon, match }) => {
  useEffect(() => {
    const { id } = match.params;
    getPokemon(id);
  }, [loading]);
  return pokemon && loading === null ? <h1>loading...</h1> : (
      <div className="col-md-6 card card" style={{ width: '100rem' }}>
        <h3>{pokemon.name}</h3>
        <p>HEIGHT : {pokemon.height}</p>
        <p>WEIGHT : {pokemon.weight}</p>
        <p>XP : {pokemon.base_experience}</p>
        <p>ABILITIES : {pokemon.abilities ? pokemon.abilities.map(ab => <p  key={ab.ability.name}>{ab.ability.name}</p>) : 'undefined' }</p>
        <p>Type : {pokemon.types ? pokemon.types.map(type => <p key={type.type.name}>{type.type.name}</p>) : 'undefined' }</p>
      </div>
  );
};

const mapStateToProp = state => ({
  pokemon: state.pokemon,
});

export default connect(mapStateToProp, { getPokemon })(ShowPokemon);
