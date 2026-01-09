// ================= IMPORTAÇÃO DE SPRITES =================

// Jogadores
import warriorImg from "../../assets/images/warrior.png";
import mageImg from "../../assets/images/mage.png";
import archerImg from "../../assets/images/archer.png";

// Inimigos
import goblinImg from "../../assets/images/goblin.png";

// ================= CLASSES DE PERSONAGENS =================
export const characterClasses = {
  warrior: {
    name: "Guerreiro",
    hp: 150,
    attack: 25,
    defense: 20,
    speed: 8,
    sprite: warriorImg,
    abilities: ["Ataque Poderoso", "Defesa Total", "Fúria Berserk"],
  },

  mage: {
    name: "Mago",
    hp: 100,
    attack: 35,
    defense: 10,
    speed: 12,
    sprite: mageImg,
    abilities: ["Bola de Fogo", "Escudo Arcano", "Cura Divina"],
  },

  archer: {
    name: "Arqueiro",
    hp: 120,
    attack: 28,
    defense: 12,
    speed: 15,
    sprite: archerImg,
    abilities: ["Tiro Preciso", "Flecha Múltipla", "Furtividade"],
  },
};

// ================= CLASSES DE INIMIGOS =================
export const enemies = {
  goblin: {
    name: "Goblin",
    hp: 80,
    attack: 18,
    defense: 8,
    speed: 10,
    sprite: goblinImg,
    abilities: ["Golpe Rápido", "Mordida", "Fuga"],
  },
};
