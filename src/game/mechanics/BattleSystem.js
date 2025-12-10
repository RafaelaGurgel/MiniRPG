export class BattleSystem {
  static calculateDamage(attacker, defender) {
    const baseDamage = attacker.attack - (defender.defense * 0.5);
    const criticalChance = 0.15 + (attacker.speed * 0.001);
    const isCritical = Math.random() < criticalChance;
    const criticalMultiplier = isCritical ? 2 : 1;
    
    const variance = 0.8 + Math.random() * 0.4;
    
    let damage = Math.max(Math.floor(baseDamage * criticalMultiplier * variance), 1);
    
    if (isCritical) {
      console.log(`${attacker.name} acertou um golpe crítico!`);
    }
    
    return damage;
  }
  
  static calculateHitChance(attacker, defender) {
    const baseChance = 90;
    const speedBonus = (attacker.speed - defender.speed) * 0.5;
    return Math.min(Math.max(baseChance + speedBonus, 60), 100);
  }
  
  static checkHit(attacker, defender) {
    const hitChance = this.calculateHitChance(attacker, defender);
    return Math.random() * 100 < hitChance;
  }
  
  static calculateExperience(reward, playerLevel, enemyLevel) {
    const levelDifference = enemyLevel - playerLevel;
    let multiplier = 1;
    
    if (levelDifference > 0) {
      multiplier = 1 + (levelDifference * 0.2);
    } else if (levelDifference < 0) {
      multiplier = Math.max(0.5, 1 + (levelDifference * 0.1));
    }
    
    return Math.floor(reward * multiplier);
  }
  
  static calculateLevelUp(experience, currentLevel) {
    const requiredExp = currentLevel * 100;
    return experience >= requiredExp;
  }
}