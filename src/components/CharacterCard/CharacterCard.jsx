import React, { useState, useEffect } from 'react';
import './CharacterCard.css';

export default function CharacterCard() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchCharacters = async () => {
            const response = await fetch('https://rickandmortyapi.com/api/character');
            const data = await response.json();
            setCharacters(data.results);
        };
        fetchCharacters();
    }, []);

    return (
        <div className="character-cards">
            {characters.map((character) => (
                <div key={character.id} className="card">
                    <h3>{character.name}</h3>
                    <img src={character.image} alt={character.name} />
                    <p><strong>Estado:</strong> {character.status}</p>
                    <p><strong>Especie:</strong> {character.species}</p>
                    <p><strong>Género:</strong> {character.gender}</p>
                    <p><strong>Ubicación:</strong> {character.location.name}</p>
                </div>
            ))}
        </div>
    );
};