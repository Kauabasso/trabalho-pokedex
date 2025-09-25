import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

  if (carregando) return <p>Carregando...</p>;

  if (!pokemon) return <p>Pokémon não encontrado.</p>;

  return (
    <div>
      <h2>{pokemon.name}</h2>
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        width={150}
      />
      <p><strong>Número na Pokedéx:</strong> {pokemon.id}</p>
      <p><strong>Altura:</strong> {pokemon.height}</p>
      <p><strong>Peso:</strong> {pokemon.weight}</p>
      <p><strong>Tipos:</strong> {pokemon.types.map(t => t.type.name).join(", ")}</p>
    </div>
  );
};

export default PokemonDetalhes;
