import React, { useState } from 'react';
import CharacterSelect from './components/CharacterSelect';
import Battle from './components/Battle';
import { characterClasses, enemies } from './game/characters/CharacterClasses';
import './App.css';

function App() {
  const [gameState, setGameState] = useState('characterSelect');
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [currentEnemy, setCurrentEnemy] = useState('goblin');
  const [playerWins, setPlayerWins] = useState(0);
  const [playerLevel, setPlayerLevel] = useState(1);

  const handleCharacterSelect = (charKey) => {
    console.log('🎮 Personagem selecionado:', charKey);
    setSelectedCharacter(characterClasses[charKey]);
    setGameState('battle');
  };

  const handleBattleEnd = (playerWon) => {
    if (playerWon) {
      const newWins = playerWins + 1;
      setPlayerWins(newWins);
      
      // A cada 3 vitórias, sobe de nível
      if (newWins % 3 === 0) {
        setPlayerLevel(prev => prev + 1);
        alert(`🎉 LEVEL UP! Agora você é nível ${playerLevel + 1}!`);
      }
      
      alert('🏆 Você venceu!');
      
      // Ciclo de inimigos
      const enemyKeys = Object.keys(enemies);
      const currentIndex = enemyKeys.indexOf(currentEnemy);
      if (currentIndex < enemyKeys.length - 1) {
        setCurrentEnemy(enemyKeys[currentIndex + 1]);
        setGameState('battle');
      } else {
        alert('🎊 PARABÉNS! Você derrotou todos os inimigos!');
        setGameState('characterSelect');
        setCurrentEnemy('goblin');
      }
    } else {
      alert('💀 Você foi derrotado!');
      setGameState('characterSelect');
    }
  };

  const resetGame = () => {
    setGameState('characterSelect');
    setSelectedCharacter(null);
    setCurrentEnemy('goblin');
    setPlayerWins(0);
    setPlayerLevel(1);
  };

  return (
    <div className="App">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-brand">
          <span className="sword-icon">⚔️</span>
          <h1>RPG Battle Arena</h1>
        </div>
        
        <div className="nav-stats">
          <div className="stat-item">
            <span className="stat-icon">🏆</span>
            <span className="stat-value">{playerWins}</span>
            <span className="stat-label">Vitórias</span>
          </div>
          
          <div className="stat-item">
            <span className="stat-icon">⭐</span>
            <span className="stat-value">{playerLevel}</span>
            <span className="stat-label">Nível</span>
          </div>
          
          {selectedCharacter && (
            <div className="stat-item">
              <img 
                src={selectedCharacter.sprite} 
                alt={selectedCharacter.name}
                className="nav-character-img"
              />
              <span>{selectedCharacter.name}</span>
            </div>
          )}
        </div>
        
        <div className="nav-actions">
          <button className="nav-btn" onClick={resetGame}>
            🔄 Reiniciar
          </button>
        </div>
      </nav>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="main-content">
        {gameState === 'characterSelect' ? (
          <CharacterSelect onSelect={handleCharacterSelect} />
        ) : (
          <Battle 
            playerCharacter={selectedCharacter}
            enemyCharacter={enemies[currentEnemy]}
            onBattleEnd={handleBattleEnd}
          />
        )}
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <p>Desenvolvido com React + Vite | RPG Battle Game</p>
        <div className="game-tips">
          <span>🎮 Selecione um herói</span>
          <span>⚔️ Use habilidades estrategicamente</span>
          <span>🏆 Derrote todos os inimigos</span>
        </div>
      </footer>
    </div>
  );
}

export default App;