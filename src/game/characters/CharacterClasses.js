export const characterClasses = {
  warrior: {
    name: "Guerreiro",
    hp: 150,
    attack: 25,
    defense: 20,
    speed: 8,
    sprite: "/src/assets/images/warrior.png",
    abilities: ["Ataque Poderoso", "Defesa Total", "Fúria Berserk"]
  },
  mage: {
    name: "Mago",
    hp: 100,
    attack: 35,
    defense: 10,
    speed: 12,
    sprite: "/src/assets/images/mage.png",
    abilities: ["Bola de Fogo", "Escudo Arcano", "Cura Divina"]
  },
  archer: {
    name: "Arqueiro",
    hp: 120,
    attack: 28,
    defense: 12,
    speed: 15,
    sprite: "/src/assets/images/archer.png",
    abilities: ["Tiro Preciso", "Flecha Múltipla", "Furtividade"]
  }
};

export const enemies = {
  goblin: {
    name: "Goblin",
    hp: 80,
    attack: 18,
    defense: 8,
    speed: 10,
    sprite: "/src/assets/images/goblin.png", // VERIFIQUE SE ESTE ARQUIVO EXISTE
    abilities: ["Golpe Rápido", "Mordida", "Fuga"]
  },
  orc: {
    name: "Orc",
    hp: 150,
    attack: 30,
    defense: 15,
    speed: 7,
    sprite: "/src/assets/images/warrior.png", // Placeholder
    abilities: ["Machadada", "Investida", "Rugido"]
  },
  darkMage: {
    name: "Mago das Trevas",
    hp: 120,
    attack: 40,
    defense: 5,
    speed: 11,
    sprite: "/src/assets/images/mage.png", // Placeholder
    abilities: ["Bola das Sombras", "Drenar Vida", "Maldição"]
  }
};