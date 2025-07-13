"use client";

import { PokemonTypeCard } from "@/stories/molecules/PokemonTypeCard";
import { PokemonH1 } from "@/stories/atoms/PokemonH1";
import { PokemonH2 } from "@/stories/atoms/PokemonH2";
import {
  generateRecommendedChart,
  getPokemonTypeName,
} from "@/models/pokemonTypeChart";
import { PokemonType, SupportedLanguages } from "@/models/pokemonDefinitions";
import { ThemeController } from "@/stories/atoms/ThemeController";
import { PokemonTypeDropdown } from "@/stories/molecules/PokemonTypeDropdown";
import { useState } from "react";
import { isPokemonType } from "@/models/pokemonUtils";

export default function Home() {
  const [playerTypeA, setPlayerTypeA] = useState<PokemonType>("normal");
  const [playerTypeB, setPlayerTypeB] = useState<PokemonType | null>(null);
  const [playerAttackType, setPlayerAttackType] =
    useState<PokemonType>("normal");

  const handlePlayerTypeAChange = (value: PokemonType | null) => {
    if (value === null) {
      throw new Error();
    }
    setPlayerTypeA(value);
  };
  const handlePlayerTypeBChange = (value: PokemonType | null) => {
    setPlayerTypeB(value);
  };
  const handlePlayerAttackTypeChange = (value: PokemonType | null) => {
    if (value === null) {
      throw new Error();
    }
    setPlayerAttackType(value);
  };

  const {
    hasGoodDefenseAgainst,
    canInflictGoodDamageAgainst,
    hasPoorDefenseAgainst,
    canInflictPoorDamageAgainst,
  } = generateRecommendedChart(playerTypeA, playerTypeB, playerAttackType);
  const lang = "ja" satisfies SupportedLanguages;

  return (
    <>
      <div className="flex items-center justify-between">
        <span className="text-shadow-lg/10 font-bold">
          Quick Pokemon Type Calc
        </span>
        <ThemeController />
      </div>
      <div className="d-divider mt-0 mb-10 h-fit"></div>

      <div className="flex justify-between">
        <div className="flex flex-col items-center">
          タイプ1
          <PokemonTypeDropdown
            name="player_type_a"
            currentChecked={playerTypeA}
            allowNone={false}
            lang={lang}
            handleChange={handlePlayerTypeAChange}
          />
        </div>
        <div className="flex flex-col items-center">
          タイプ2
          <PokemonTypeDropdown
            name="player_type_b"
            currentChecked={playerTypeB}
            allowNone={true}
            lang={lang}
            handleChange={handlePlayerTypeBChange}
          />
        </div>
        <div className="flex flex-col items-center">
          わざのタイプ
          <PokemonTypeDropdown
            name="player_attack_type"
            currentChecked={playerAttackType}
            allowNone={false}
            lang={lang}
            handleChange={handlePlayerAttackTypeChange}
          />
        </div>
      </div>

      <PokemonH1>得意な相手ポケモン</PokemonH1>
      <PokemonH2>ダメージが入りやすい相手</PokemonH2>
      <div className="flex flex-wrap gap-2 justify-around ">
        {canInflictGoodDamageAgainst.map((entry) => (
          <PokemonTypeCard
            key={entry.pokemonType}
            pokemonType={entry.pokemonType}
            percentage={entry.damageMultiplierPercent}
          >
            {getPokemonTypeName(entry.pokemonType, lang)}
          </PokemonTypeCard>
        ))}
      </div>
      <PokemonH2>受けるダメージが少ないわざ</PokemonH2>
      <div className="flex flex-wrap gap-2 justify-around">
        {hasGoodDefenseAgainst.map((entry) => (
          <PokemonTypeCard
            key={entry.pokemonType}
            pokemonType={entry.pokemonType}
            percentage={entry.damageMultiplierPercent}
          >
            {getPokemonTypeName(entry.pokemonType, lang)}
          </PokemonTypeCard>
        ))}
      </div>
      <PokemonH1>苦手な相手ポケモン</PokemonH1>
      <PokemonH2>ダメージが入りにくい相手</PokemonH2>
      <div className="flex flex-wrap gap-2 justify-around ">
        {canInflictPoorDamageAgainst.map((entry) => (
          <PokemonTypeCard
            key={entry.pokemonType}
            pokemonType={entry.pokemonType}
            percentage={entry.damageMultiplierPercent}
          >
            {getPokemonTypeName(entry.pokemonType, lang)}
          </PokemonTypeCard>
        ))}
      </div>
      <PokemonH2>受けるダメージが多いわざ</PokemonH2>
      <div className="flex flex-wrap gap-2 justify-around ">
        {hasPoorDefenseAgainst.map((entry) => (
          <PokemonTypeCard
            key={entry.pokemonType}
            pokemonType={entry.pokemonType}
            percentage={entry.damageMultiplierPercent}
          >
            {getPokemonTypeName(entry.pokemonType, lang)}
          </PokemonTypeCard>
        ))}
      </div>
    </>
  );
}
