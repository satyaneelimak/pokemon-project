import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

const Pokemon = ({ pokemon }) => (
  <div className="card m-2 d-inline-flex text-center pokemon-card" style={{ width: '36rem' }}>
    <Link to={`/${pokemon.id}`}>
      <h3>{pokemon.name}</h3>
    </Link>
  </div>
);

export default Pokemon;
