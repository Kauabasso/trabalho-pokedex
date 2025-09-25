import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Pokemons from "./pages/Pokemons";
import PokemonDetalhes from "./pages/PokemonDetalhes";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/Pokemons">Pokémons</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Routes>
        <Route path="/pokemons" element={<Pokemons />} />
        <Route path="/pokemons/:id" element={<PokemonDetalhes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


