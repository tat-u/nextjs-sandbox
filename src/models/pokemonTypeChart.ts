import {
  PokemonType,
  SupportedLanguages,
  allPokemonTypes,
  noScalingVector,
  effectivenessTable,
  defensivenessTable,
  pokemonTypeDetails,
} from "./pokemonDefinitions";

export const getPokemonTypeId = (pokemonType: PokemonType): number => {
  return pokemonTypeDetails[pokemonType].id;
};

export const getPokemonTypeName = (
  pokemonType: PokemonType,
  lang: SupportedLanguages
): string => {
  return pokemonTypeDetails[pokemonType].name[lang];
};

export const getEffectiveness = (
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

export const getDefensiveness = (
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

export const getInflictDamageMultiplier = (
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

export const getReceiveDamageMultiplier = (
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

export const generateAttackChart = (playerAttackType: PokemonType) => {
  return allPokemonTypes
    .map((pokemonType) => ({
      pokemonType,
      getEffectiveness: getEffectiveness(playerAttackType, pokemonType, null),
      damageMultiplierPercent: Math.round(
        100 * getInflictDamageMultiplier(playerAttackType, pokemonType, null)
      ),
    }))
    .sort((a, b) => b.damageMultiplierPercent - a.damageMultiplierPercent);
};

export const generateDefenseChart = (
  playerTypeA: PokemonType,
  playerTypeB: PokemonType | null
) => {
  return allPokemonTypes
    .map((pokemonType) => ({
      pokemonType,
      getDefensiveness: getDefensiveness(playerTypeA, playerTypeB, pokemonType),
      damageMultiplierPercent: Math.round(
        100 * getReceiveDamageMultiplier(playerTypeA, playerTypeB, pokemonType)
      ),
    }))
    .sort((a, b) => a.damageMultiplierPercent - b.damageMultiplierPercent);
};

export const generateRecommendedChart = (
  playerTypeA: PokemonType,
  playerTypeB: PokemonType | null,
  playerAttackType: PokemonType
) => {
  return {
    hasGoodDefenseAgainst: generateDefenseChart(
      playerTypeA,
      playerTypeB
    ).filter((entry) => entry.damageMultiplierPercent < 100),
    canInflictGoodDamageAgainst: generateAttackChart(playerAttackType).filter(
      (entry) => entry.damageMultiplierPercent > 100
    ),
    hasPoorDefenseAgainst: generateDefenseChart(
      playerTypeA,
      playerTypeB
    ).filter((entry) => entry.damageMultiplierPercent > 100),
    canInflictPoorDamageAgainst: generateAttackChart(playerAttackType).filter(
      (entry) => entry.damageMultiplierPercent < 100
    ),
  };
};
