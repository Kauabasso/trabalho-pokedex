import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const PokemonDetalhes = () => {
  const { id } = useParams(); 
  const [pokemon, setPokemon] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const buscarPokemon = async () => {
      try {
        const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (!resposta.ok) throw new Error("Erro ao carregar o Pokémon");

        const dados = await resposta.json();
        setPokemon(dados);
      } catch (erro) {
        console.log(erro);
      } finally {
        setCarregando(false);
      }
    };

    buscarPokemon();
  }, [id]);

  if (carregando) return <p className="carregando">Carregando...</p>;

  if (!pokemon) return <p className="carregando">Pokémon não encontrado.</p>;

  return (
    <div>
      <div className="detalhes-pokemon">
        <h2>{pokemon.name}</h2>
        <img
          className="imagem-detalhes"
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          
        />
        <p><strong>Número na Pokédex:</strong> {pokemon.id}</p>
        <p><strong>Altura:</strong> {pokemon.height}</p>
        <p><strong>Peso:</strong> {pokemon.weight}</p>
        <p><strong>Tipos:</strong> {pokemon.types.map(t => t.type.name).join(", ")}</p>
      </div>

      <div className="botao-voltar">
        <Link to="/Pokemons" className="link-voltar">
          Voltar
        </Link>
      </div>
    </div>
  );
};

export default PokemonDetalhes;

