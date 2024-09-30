import React from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';
import './ApiTutorial.css';

export default function ApiTutorial() {
    return (
        <section className='rickMorty-section'>
            <h1 className='section-title'>API de Rick y Morty</h1>
            <p className='section-description'>Aquí aprenderás a usar la API de Rick y Morty con React.</p>

            <h2 className='section-title2'>Tutorial: Usando la API de Rick y Morty</h2>
            <p className='section-description'>
                La API de Rick y Morty te permite acceder a información sobre los personajes, episodios y ubicaciones de la serie.
                A continuación, te mostramos un ejemplo básico de cómo hacer una solicitud a la API y mostrar los personajes en React.
            </p>

            <pre className='code-example'>
                <code>
                    {`import React, { useState, useEffect } from 'react';

// Componente para mostrar los personajes
export default function CharacterCard() {
    // Estado para almacenar los personajes
    const [characters, setCharacters] = useState([]);

    // Efecto para obtener los personajes al cargar el componente
    useEffect(() => {
        const fetchCharacters = async () => {
            // Hacemos la solicitud a la API de Rick y Morty
            const response = await fetch('https://rickandmortyapi.com/api/character');
            const data = await response.json(); // Convertimos la respuesta a JSON
            setCharacters(data.results); // Almacenamos los personajes en el estado
        };
        fetchCharacters(); // Llamamos a la función para obtener los personajes
    }, []);

return (
     <div className="character-cards">
            {characters.map((character) => (
                <div key={character.id} className="card">
                    <h3>{character.name}</h3> {/* Nombre del personaje */}
                    <img src={character.image} alt={character.name} /> {/* Imagen del personaje */}
                    <p><strong>Estado:</strong> {character.status}</p> {/* Estado del personaje */}
                    <p><strong>Especie:</strong> {character.species}</p> {/* Especie del personaje */}
                    <p><strong>Género:</strong> {character.gender}</p> {/* Género del personaje */}
                    <p><strong>Ubicación:</strong> {character.location.name}</p> {/* Ubicación del personaje */}
                </div>
        ))}
    </div>
);
}`}
                </code>
            </pre>
            <CharacterCard />
        </section>
    );
}