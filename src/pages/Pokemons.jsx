import { useState } from "react";
import { useEffect } from "react";


const Pokemons = () => {
    const [dados, setDados] = useState(null);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        const buscaDados = async () => {
            try {
                const resposta = await fetch('https://pokeapi.co/api/v2/pokemon/squirtle');


                if(!resposta.ok) {
                    throw new Error('Erro na requisição');
                }
                const resultado = await resposta.json();
                setDados(resultado);
            }catch(erro) {
                console.log(erro); 
        }finally{
            setCarregando(false);
        }
       
    }
    buscaDados();
    }, []);

    return (
        <div>
            <h2>Usuarios</h2>
            <p>Dados requisitados por API</p>
            <div>{carregando ? 'Carregando...' : ""}</div>
            <ul>
                {dados && dados.map((species) => (
                    <li key={species.id}>
                        {species.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Pokemons;