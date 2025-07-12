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

export const allPokemonTypes = [
  "normal",
  "fire",
  "water",
  "electric",
  "grass",
  "ice",
  "fighting",
  "poison",
  "ground",
  "flying",
  "psychic",
  "bug",
  "rock",
  "ghost",
  "dragon",
  "dark",
  "steel",
  "fairy",
] as const satisfies PokemonType[];

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

export const noScalingVector = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
] as const satisfies Vector18;

const typeColors = {
  normal: "#A1ABB3",
  fire: "#C73637",
  water: "#2975D6",
  electric: "#EDBD05",
  grass: "#37A320",
  ice: "#2FBFCF",
  fighting: "#DE7400",
  poison: "#8F4AC4",
  ground: "#804A1F",
  flying: "#78A9DB",
  psychic: "#D64777",
  bug: "#8A9919",
  rock: "#A8A37B",
  ghost: "#6E346E",
  dragon: "#4959D1",
  dark: "#4A3733",
  steel: "#62A2B9",
  fairy: "#E667E6",
};

export const pokemonTypeDetails = {
  normal: {
    id: 0,
    name: { en: "Normal", ja: "ノーマル" },
    color: typeColors.normal,
  },
  fire: { id: 1, name: { en: "Fire", ja: "ほのお" }, color: typeColors.fire },
  water: { id: 2, name: { en: "Water", ja: "みず" }, color: typeColors.water },
  electric: {
    id: 3,
    name: { en: "Electric", ja: "でんき" },
    color: typeColors.electric,
  },
  grass: { id: 4, name: { en: "Grass", ja: "くさ" }, color: typeColors.grass },
  ice: { id: 5, name: { en: "Ice", ja: "こおり" }, color: typeColors.ice },
  fighting: {
    id: 6,
    name: { en: "Fighting", ja: "かくとう" },
    color: typeColors.fighting,
  },
  poison: {
    id: 7,
    name: { en: "Poison", ja: "どく" },
    color: typeColors.poison,
  },
  ground: {
    id: 8,
    name: { en: "Ground", ja: "じめん" },
    color: typeColors.ground,
  },
  flying: {
    id: 9,
    name: { en: "Flying", ja: "ひこう" },
    color: typeColors.flying,
  },
  psychic: {
    id: 10,
    name: { en: "Psychic", ja: "エスパー" },
    color: typeColors.psychic,
  },
  bug: { id: 11, name: { en: "Bug", ja: "むし" }, color: typeColors.bug },
  rock: { id: 12, name: { en: "Rock", ja: "いわ" }, color: typeColors.rock },
  ghost: {
    id: 13,
    name: { en: "Ghost", ja: "ゴースト" },
    color: typeColors.ghost,
  },
  dragon: {
    id: 14,
    name: { en: "Dragon", ja: "ドラゴン" },
    color: typeColors.dragon,
  },
  dark: { id: 15, name: { en: "Dark", ja: "あく" }, color: typeColors.dark },
  steel: {
    id: 16,
    name: { en: "Steel", ja: "はがね" },
    color: typeColors.steel,
  },
  fairy: {
    id: 17,
    name: { en: "Fairy", ja: "フェアリー" },
    color: typeColors.fairy,
  },
} as const;

export type SupportedLanguages = "en" | "ja";
