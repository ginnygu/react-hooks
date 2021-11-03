import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function PokemonDetail() {
  let { name } = useParams();

  const [pokemonName, setPokemonName] = useState("");
  const [picture, setPicture] = useState("");
  const [abilities, setAbilities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchPokemonDetail();
  }, []);

  async function fetchPokemonDetail() {
    try {
      let payload = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      );

      setPokemonName(payload.data.name);
      setPicture(payload.data.sprites.front_default);
      setAbilities(payload.data.abilities);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  }

  if (isLoading) {
    return <div>....loading</div>;
  }

  return (
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
  );
}

export default PokemonDetail;
