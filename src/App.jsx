import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Pokemons from "./pages/pokemons";
import PokemonDetalhes from "./pages/PokemonDetalhes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
       
        <Route path="/" element={<Pokemons />} />
        <Route path="/pokemons" element={<Pokemons />} />
        <Route path="/pokemons/:id" element={<PokemonDetalhes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



