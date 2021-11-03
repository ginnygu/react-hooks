import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function AllPokemon() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetchPokemon();
  }, []);

  async function fetchPokemon() {
    try {
      let payload = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=100&offset=200"
      );

      setPokemonList(payload.data.results);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      {pokemonList.map((item) => {
        return (
          <Link key={item.name} to={`/fetch-pokemon/${item.name}`}>
            <div key={item.name}>{item.name}</div>
          </Link>
        );
      })}
    </div>
  );
}

export default AllPokemon;
