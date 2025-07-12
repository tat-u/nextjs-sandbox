import {
  PokemonType,
  SupportedLanguages,
  allPokemonTypes,
  noScalingVector,
  effectivenessTable,
  defensivenessTable,
  pokemonTypeDetails,
} from "./pokemonDefinitions";

const getPokemonTypeId = (type: PokemonType): number => {
  return pokemonTypeDetails[type].id;
};

const getPokemonTypeName = (
  type: PokemonType,
  lang: SupportedLanguages
): string => {
  return pokemonTypeDetails[type].name[lang];
};

const getEffectiveness = (
  playerAttackType: PokemonType,
  opponentTypeA: PokemonType,
  opponentTypeB: PokemonType | null
) => {
  const effectivenessVector = effectivenessTable[playerAttackType];

  // NOTE: Opponent's type can be a single type or a dual type
  const effectivenessA = effectivenessVector[getPokemonTypeId(opponentTypeA)];
  const effectivenessB = opponentTypeB
    ? effectivenessVector[getPokemonTypeId(opponentTypeB)]
    : 0;

  return effectivenessA + effectivenessB;
};

const getDefensiveness = (
  playerTypeA: PokemonType,
  playerTypeB: PokemonType | null,
  opponentAttackType: PokemonType
) => {
  // NOTE: Player's type can be a single type or a dual type
  const defensivenessVectorA = defensivenessTable[playerTypeA];
  const defensivenessVectorB = playerTypeB
    ? defensivenessTable[playerTypeB]
    : noScalingVector;

  const defensivenessA =
    defensivenessVectorA[getPokemonTypeId(opponentAttackType)];
  const defensivenessB =
    defensivenessVectorB[getPokemonTypeId(opponentAttackType)];

  return defensivenessA + defensivenessB;
};

const getInflictDamageMultiplier = (
  playerAttackType: PokemonType,
  opponentTypeA: PokemonType,
  opponentTypeB: PokemonType | null
) => {
  const effectiveness = getEffectiveness(
    playerAttackType,
    opponentTypeA,
    opponentTypeB
  );
  return Math.pow(1.6, effectiveness);
};

const getReceiveDamageMultiplier = (
  playerTypeA: PokemonType,
  playerTypeB: PokemonType | null,
  opponentAttackType: PokemonType
) => {
  const defensiveness = getDefensiveness(
    playerTypeA,
    playerTypeB,
    opponentAttackType
  );
  return Math.pow(1.6, defensiveness);
};

const generateAttackChart = (playerAttackType: PokemonType) => {
  return allPokemonTypes
    .map((type) => ({
      type,
      damageMultiplierPercent: Math.round(
        100 * getInflictDamageMultiplier(playerAttackType, type, null)
      ),
    }))
    .sort((a, b) => b.damageMultiplierPercent - a.damageMultiplierPercent);
};

const generateDefenseChart = (
  playerTypeA: PokemonType,
  playerTypeB: PokemonType | null
) => {
  return allPokemonTypes
    .map((type) => ({
      type,
      damageMultiplierPercent: Math.round(
        100 * getReceiveDamageMultiplier(playerTypeA, playerTypeB, type)
      ),
    }))
    .sort((a, b) => a.damageMultiplierPercent - b.damageMultiplierPercent);
};

console.log(
  "バンギラス（いわ、あく）、アイアンテール（はがね）、だいもんじ（ほのお）の場合の例:"
);
console.log();
console.log("タイプ1: <いわ>, タイプ2: <あく>");
console.log("このポケモンはこのタイプのわざに強い！");
console.log(generateDefenseChart("rock", "dark"));
console.log();
console.log("わざ1のタイプ: <はがね>");
console.log("このわざはこのタイプのポケモンに強い！");
console.log(generateAttackChart("steel"));
console.log("わざ2のタイプ: <ほのお>");
console.log("このわざはこのタイプのポケモンに強い！");
console.log(generateAttackChart("fire"));
