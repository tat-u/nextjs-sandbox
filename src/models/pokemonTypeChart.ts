import {
  PokemonType,
  allPokemonTypes,
  noScalingVector,
  effectivenessTable,
  defensivenessTable,
  pokemonTypeDetails,
} from "./pokemonDefinitions";

const getPokemonTypeId = (type: PokemonType): number => {
  return pokemonTypeDetails[type].id;
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
      effectiveness: getEffectiveness(playerAttackType, type, null),
      damageMultiplier: getInflictDamageMultiplier(
        playerAttackType,
        type,
        null
      ),
    }))
    .sort((a, b) => b.effectiveness - a.effectiveness);
};

const generateDefenseChart = (playerType: PokemonType) => {
  return allPokemonTypes
    .map((type) => ({
      type,
      effectiveness: getDefensiveness(playerType, null, type),
      damageMultiplier: getReceiveDamageMultiplier(playerType, null, type),
    }))
    .sort((a, b) => a.effectiveness - b.effectiveness);
};

console.log(generateAttackChart("normal"));
console.log(generateDefenseChart("normal"));
