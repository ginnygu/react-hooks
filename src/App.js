import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(async () => {
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
    <div className="App">
      {pokemonList.map((item) => {
        return <div key={item.name}>{item.name}</div>;
      })}
    </div>
  );
}

export default App;

/*

  useEffect is ComponentDidMount + ComponentDidUpdate + ComponentWillUnmount

*/
