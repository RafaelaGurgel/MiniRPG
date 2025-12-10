import React, { useState, useEffect } from "react";
import "./Battle.css";
import { BattleSystem } from "../game/mechanics/BattleSystem";
import { enemies } from "../game/characters/CharacterClasses";

const Battle = ({ playerCharacter, enemyCharacter, onBattleEnd }) => {
  const [player, setPlayer] = useState({ ...playerCharacter, currentHP: playerCharacter.hp });
  const [enemy, setEnemy] = useState({ ...enemyCharacter, currentHP: enemyCharacter.hp });
  const [battleLog, setBattleLog] = useState([]);
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [isBattleOver, setIsBattleOver] = useState(false);

  useEffect(() => {
    if (!isPlayerTurn && !isBattleOver) {
      setTimeout(() => {
        enemyTurn();
      }, 1000);
    }
  }, [isPlayerTurn, isBattleOver]);

  const playerAttack = (abilityIndex) => {
    if (!isPlayerTurn || isBattleOver) return;

    const damage = BattleSystem.calculateDamage(player, enemy);
    const newEnemyHP = Math.max(enemy.currentHP - damage, 0);
    
    setEnemy({ ...enemy, currentHP: newEnemyHP });
    setBattleLog([...battleLog, `${player.name} atacou! Causou ${damage} de dano!`]);
    
    if (newEnemyHP <= 0) {
      endBattle(true);
    } else {
      setIsPlayerTurn(false);
    }
  };

  const enemyTurn = () => {
    const damage = BattleSystem.calculateDamage(enemy, player);
    const newPlayerHP = Math.max(player.currentHP - damage, 0);
    
    setPlayer({ ...player, currentHP: newPlayerHP });
    setBattleLog([...battleLog, `${enemy.name} atacou! Causou ${damage} de dano!`]);
    
    if (newPlayerHP <= 0) {
      endBattle(false);
    } else {
      setIsPlayerTurn(true);
    }
  };

  const endBattle = (playerWon) => {
    setIsBattleOver(true);
    setBattleLog([...battleLog, playerWon ? "Você venceu!" : "Você perdeu!"]);
    
    setTimeout(() => {
      onBattleEnd(playerWon);
    }, 2000);
  };

  const calculateHealthPercentage = (character) => {
    return (character.currentHP / character.hp) * 100;
  };

  return (
    <div className="battle-container">
      <h2>Batalha!</h2>
      
      <div className="battle-field">
        <div className="character player-character">
          <div className="character-info">
            <h3>{player.name}</h3>
            <img src={player.sprite} alt={player.name} className="battle-sprite" />
            <div className="health-bar">
              <div 
                className="health-fill"
                style={{ width: `${calculateHealthPercentage(player)}%` }}
              />
            </div>
            <p>HP: {player.currentHP}/{player.hp}</p>
          </div>
          
          <div className="character-actions">
            <h4>Ações:</h4>
            {player.abilities.map((ability, index) => (
              <button
                key={index}
                onClick={() => playerAttack(index)}
                disabled={!isPlayerTurn || isBattleOver}
                className="action-button"
              >
                {ability}
              </button>
            ))}
          </div>
        </div>

        <div className="vs-container">
          <div className="vs">VS</div>
          <div className="turn-indicator">
            {isPlayerTurn ? "Sua vez!" : "Vez do inimigo..."}
          </div>
        </div>

        <div className="character enemy-character">
          <div className="character-info">
            <h3>{enemy.name}</h3>
            <img src={enemy.sprite} alt={enemy.name} className="battle-sprite" />
            <div className="health-bar">
              <div 
                className="health-fill enemy-health"
                style={{ width: `${calculateHealthPercentage(enemy)}%` }}
              />
            </div>
            <p>HP: {enemy.currentHP}/{enemy.hp}</p>
          </div>
        </div>
      </div>

      <div className="battle-log">
        <h4>Registro:</h4>
        <div className="log-entries">
          {battleLog.map((entry, index) => (
            <p key={index} className="log-entry">{entry}</p>
          ))}
        </div>
      </div>

      {isBattleOver && (
        <div className="battle-over">
          <h3>Batalha Concluída!</h3>
          <button onClick={() => window.location.reload()}>
            Jogar Novamente
          </button>
        </div>
      )}
    </div>
  );
};

export default Battle;
