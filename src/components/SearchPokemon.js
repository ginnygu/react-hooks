import React, { useState, useEffect } from "react";
import axios from "axios";

function SearchPokemon() {
  const [search, setSearch] = useState("");

  const [pokemonName, setPokemonName] = useState("");
  const [picture, setPicture] = useState("");
  const [abilities, setAbilities] = useState([]);

  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    handleSearchPokemon("pikachu");
  }, []);

  async function handleSearchPokemon(target) {
    try {
      let payload = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${target}`
      );

      setPokemonName(payload.data.name);
      setPicture(payload.data.sprites.front_default);
      setAbilities(payload.data.abilities);
      setErrorMessage("");
    } catch (e) {
      console.log(e.response);

      if (e.response.status === 404) {
        setErrorMessage(e.response.data);
      }
    }
  }

  return (
    <div>
      <input name="pokemon" onChange={(e) => setSearch(e.target.value)} />
      <button onClick={() => handleSearchPokemon(search)}>Search</button>
      <hr />
      <div>
        <div>name: {pokemonName}</div>
        <div>
          picture: <img src={picture} alt="pokemon" />
        </div>
        <div>
          <ul>
            {abilities.map(({ ability: { name } }, index) => {
              return (
                <li key={name}>
                  Abilitiy {index + 1}: {name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <hr />
      {errorMessage && errorMessage}
    </div>
  );
}

export default SearchPokemon;
