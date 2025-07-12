export type PokemonType =
  // 0
  | "normal"
  // 1
  | "fire"
  // 2
  | "water"
  // 3
  | "electric"
  // 4
  | "grass"
  // 5
  | "ice"
  // 6
  | "fighting"
  // 7
  | "poison"
  // 8
  | "ground"
  // 9
  | "flying"
  // 10
  | "psychic"
  // 11
  | "bug"
  // 12
  | "rock"
  // 13
  | "ghost"
  // 14
  | "dragon"
  // 15
  | "dark"
  // 16
  | "steel"
  // 17
  | "fairy";

export type Vector18 = [
  number, // 0
  number, // 1
  number, // 2
  number, // 3
  number, // 4
  number, // 5
  number, // 6
  number, // 7
  number, // 8
  number, // 9
  number, // 10
  number, // 11
  number, // 12
  number, // 13
  number, // 14
  number, // 15
  number, // 16
  number // 17
];

export const effectivenessTable: Record<PokemonType, Vector18> = {
  normal: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -2, 0, 0, -1, 0],
  fire: [0, -1, -1, 0, 1, 1, 0, 0, 0, 0, 0, 1, -1, 0, -1, 0, 1, 0],
  water: [0, 1, -1, 0, -1, 0, 0, 0, 1, 0, 0, 0, 1, 0, -1, 0, 0, 0],
  electric: [0, 0, 1, -1, -1, 0, 0, 0, -2, 1, 0, 0, 0, 0, -1, 0, 0, 0],
  grass: [0, -1, 1, 0, -1, 0, 0, -1, 1, -1, 0, -1, 1, 0, -1, 0, -1, 0],
  ice: [0, -1, -1, 0, 1, -1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, -1, 0],
  fighting: [1, 0, 0, 0, 0, 1, 0, -1, 0, -1, -1, -1, 1, -2, 0, 1, 1, -1],
  poison: [0, 0, 0, 0, 1, 0, 0, -1, -1, 0, 0, 0, -1, -1, 0, 0, -2, 1],
  ground: [0, 1, 0, 1, -1, 0, 0, 1, 0, -2, 0, -1, 1, 0, 0, 0, 1, 0],
  flying: [0, 0, 0, -1, 1, 0, 1, 0, 0, 0, 0, 1, -1, 0, 0, 0, -1, 0],
  psychic: [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, -1, 0, 0, 0, 0, -2, -1, 0],
  bug: [0, -1, 0, 0, 1, 0, -1, -1, 0, -1, 1, 0, 0, -1, 0, 1, -1, -1],
  rock: [0, 1, 0, 0, 0, 1, -1, 0, -1, 1, 0, 1, 0, 0, 0, 0, -1, 0],
  ghost: [-2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, -1, 0, 0],
  dragon: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, -1, -2],
  dark: [0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, -1, 0, -1],
  steel: [0, -1, -1, -1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, -1, 1],
  fairy: [0, -1, 0, 0, 0, 0, 1, -1, 0, 0, 0, 0, 0, 0, 1, 1, -1, 0],
} as const;

export const defensivenessTable: Record<PokemonType, Vector18> = {
  normal: [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, -2, 0, 0, 0, 0],
  fire: [0, -1, 1, 0, -1, -1, 0, 0, 1, 0, 0, -1, 1, 0, 0, 0, -1, -1],
  water: [0, -1, -1, 1, 1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0],
  electric: [0, 0, 0, -1, 0, 0, 0, 0, 1, -1, 0, 0, 0, 0, 0, 0, -1, 0],
  grass: [0, 1, -1, -1, -1, 1, 0, 1, -1, 1, 0, 1, 0, 0, 0, 0, 0, 0],
  ice: [0, 1, 0, 0, 0, -1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
  fighting: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, -1, -1, 0, 0, -1, 0, 1],
  poison: [0, 0, 0, 0, -1, 0, -1, -1, 1, 0, 1, -1, 0, 0, 0, 0, 0, -1],
  ground: [0, 0, 1, -2, 1, 1, 0, -1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0],
  flying: [0, 0, 0, 1, -1, 1, -1, 0, -2, 0, 0, -1, 1, 0, 0, 0, 0, 0],
  psychic: [0, 0, 0, 0, 0, 0, -1, 0, 0, 0, -1, 1, 0, 1, 0, 1, 0, 0],
  bug: [0, 1, 0, 0, -1, 0, -1, 0, -1, 1, 0, 0, 1, 0, 0, 0, 0, 0],
  rock: [-1, -1, 1, 0, 1, 0, 1, -1, 1, -1, 0, 0, 0, 0, 0, 0, 1, 0],
  ghost: [-2, 0, 0, 0, 0, 0, -2, -1, 0, 0, 0, -1, 0, 1, 0, 1, 0, 0],
  dragon: [0, -1, -1, -1, -1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
  dark: [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, -2, 1, 0, -1, 0, -1, 0, 1],
  steel: [-1, 1, 0, 0, -1, -1, 1, -2, 1, -1, -1, -1, -1, 0, -1, 0, -1, -1],
  fairy: [0, 0, 0, 0, 0, 0, -1, 1, 0, 0, 0, -1, 0, 0, -2, -1, 1, 0],
} as const;

export const pokemonTypes = {
  normal: { id: 0, name: { en: "Normal", ja: "ノーマル" } },
  fire: { id: 1, name: { en: "Fire", ja: "ほのお" } },
  water: { id: 2, name: { en: "Water", ja: "みず" } },
  electric: { id: 3, name: { en: "Electric", ja: "でんき" } },
  grass: { id: 4, name: { en: "Grass", ja: "くさ" } },
  ice: { id: 5, name: { en: "Ice", ja: "こおり" } },
  fighting: { id: 6, name: { en: "Fighting", ja: "かくとう" } },
  poison: { id: 7, name: { en: "Poison", ja: "どく" } },
  ground: { id: 8, name: { en: "Ground", ja: "じめん" } },
  flying: { id: 9, name: { en: "Flying", ja: "ひこう" } },
  psychic: { id: 10, name: { en: "Psychic", ja: "エスパー" } },
  bug: { id: 11, name: { en: "Bug", ja: "むし" } },
  rock: { id: 12, name: { en: "Rock", ja: "いわ" } },
  ghost: { id: 13, name: { en: "Ghost", ja: "ゴースト" } },
  dragon: { id: 14, name: { en: "Dragon", ja: "ドラゴン" } },
  dark: { id: 15, name: { en: "Dark", ja: "あく" } },
  steel: { id: 16, name: { en: "Steel", ja: "はがね" } },
  fairy: { id: 17, name: { en: "Fairy", ja: "フェアリー" } },
} as const;
