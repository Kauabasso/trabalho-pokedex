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

        
        const pokemonsDetalhados = await Promise.all(
          resultado.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            const detalhes = await res.json();
            return {
              id: detalhes.id,
              name: detalhes.name,
              sprite: detalhes.sprites.front_default, 
            };
          })
        );

        setDados(pokemonsDetalhados);
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
      <h2 className="title">Bem-Vindos à região de Kanto!!</h2>
      {carregando && <p className="carregando">Carregando...</p>}
      <ul className="centralizar-cards">
        {dados.map((pokemon) => (
          <li className="card-pokemon" key={pokemon.id}>
            <Link
              to={`/pokemons/${pokemon.id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <img
                src={pokemon.sprite}
                alt={pokemon.name}
                width="150"
                height="150"
              />
              <p
                className="nome-pokemon"
                style={{ marginTop: "5px", textTransform: "capitalize" }}
              >
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
