import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AllPokemon from "./components/AllPokemon";
import PokemonDetail from "./components/PokemonDetail";
import SearchPokemon from "./components/SearchPokemon";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/search" component={SearchPokemon} />
          <Route exact path="/fetch-pokemon/:name" component={PokemonDetail} />
          <Route exact path="/all-pokemon" component={AllPokemon} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

/*

  useEffect is ComponentDidMount + ComponentDidUpdate + ComponentWillUnmount

*/
