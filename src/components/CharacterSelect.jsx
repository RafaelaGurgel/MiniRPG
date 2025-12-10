import React from 'react';
import './CharacterSelect.css';
import { characterClasses } from '../game/characters/CharacterClasses';

const CharacterSelect = ({ onSelect }) => {
  const handleCardClick = (charKey) => {
    console.log('🎯 Personagem clicado:', charKey);
    if (onSelect && typeof onSelect === 'function') {
      onSelect(charKey);
    }
  };

  return (
    <div className="selection-container">
      <h2 className="selection-title">ESCOLHA SEU HERÓI</h2>
      
      <div className="characters-grid">
        {Object.entries(characterClasses).map(([key, character]) => (
          <div 
            key={key}
            className="character-card"
            onClick={() => handleCardClick(key)}
          >
            <img 
              src={character.sprite} 
              alt={character.name}
              className="character-img"
            />
            <h3 className="character-name">{character.name}</h3>
            
            <div className="character-stats">
              <div className="stat-item">❤️ {character.hp} HP</div>
              <div className="stat-item">⚔️ {character.attack} ATK</div>
              <div className="stat-item">🛡️ {character.defense} DEF</div>
              <div className="stat-item">⚡ {character.speed} SPD</div>
            </div>
            
            <div className="abilities-container">
              <h4 className="abilities-title">HABILIDADES</h4>
              <ul className="abilities-list">
                {character.abilities.map((ability, index) => (
                  <li key={index} className="ability-item">
                    {ability}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterSelect;