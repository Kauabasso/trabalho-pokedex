import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Pokemons = () => {
  const [dados, setDados] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const buscaDados = async () => {
      try {
        const resposta = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
        );

        if (!resposta.ok) {
          throw new Error("Erro na requisição");
        }

        const resultado = await resposta.json();
        setDados(resultado.results);
      } catch (erro) {
        console.log(erro);
      } finally {
        setCarregando(false);
      }
    };
    buscaDados();
  }, []);

  return (
    <div>
      <h2>Bem-Vindos a região de Kanto!!</h2>
      {carregando && <p>Carregando...</p>}
      <ul className="centralizar-cards">
        {dados.map((pokemon, index) => (
          <li className="card-pokemon" key={index}>
            <Link
              to={`/pokemons/${index + 1}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
                alt={pokemon.name}
                width="150"
                height="150"
              />
              <p className="nome-pokemon" style={{ marginTop: "5px", textTransform: "capitalize" }}>
                {pokemon.name}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pokemons;
