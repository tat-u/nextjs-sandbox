"use client";

import { PokemonTypeCard } from "@/stories/molecules/PokemonTypeCard";
import { PokemonH1 } from "@/stories/atoms/PokemonH1";
import { PokemonH2 } from "@/stories/atoms/PokemonH2";
import {
  generateRecommendedChart,
  getPokemonTypeName,
} from "@/models/pokemonTypeChart";
import {
  PokemonType,
  pokemonTypes,
  SupportedLanguages,
} from "@/models/pokemonDefinitions";
import { ThemeController } from "@/stories/atoms/ThemeController";
import { PokemonDropdown } from "@/stories/atoms/PokemonDropdown";
import { useState } from "react";
import { typedObjectKeys, isPokemonType } from "@/models/pokemonUtils";

export default function Home() {
  const [playerTypeA, setPlayerTypeA] = useState<PokemonType>("normal");
  const [playerTypeB, setPlayerTypeB] = useState<PokemonType | null>(null);
  const [playerAttackType, setPlayerAttackType] =
    useState<PokemonType>("normal");

  const handlePlayerTypeAChange = (value: string) => {
    if (isPokemonType(value)) {
      setPlayerTypeA(value);
    } else {
      throw new Error();
    }
  };
  const handlePlayerTypeBChange = (value: string) => {
    if (isPokemonType(value)) {
      setPlayerTypeB(value);
    } else if (value === "none") {
      setPlayerTypeB(null);
    } else {
      throw new Error();
    }
  };
  const handlePlayerAttackTypeChange = (value: string) => {
    if (isPokemonType(value)) {
      setPlayerAttackType(value);
    } else {
      throw new Error();
    }
  };

  const {
    hasGoodDefenseAgainst,
    canInflictGoodDamageAgainst,
    hasPoorDefenseAgainst,
    canInflictPoorDamageAgainst,
  } = generateRecommendedChart(playerTypeA, playerTypeB, playerAttackType);
  const lang = "ja" satisfies SupportedLanguages;

  const options = typedObjectKeys(pokemonTypes).map((key) => ({
    id: key,
    name: getPokemonTypeName(key, lang),
  }));

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
          <PokemonDropdown
            label={getPokemonTypeName(playerTypeA, lang)}
            name="player_type_a"
            options={options}
            checkedId={playerTypeA}
            handleChange={(value) => handlePlayerTypeAChange(value)}
          />
        </div>
        <div className="flex flex-col items-center">
          タイプ2
          <PokemonDropdown
            label={playerTypeB ? getPokemonTypeName(playerTypeB, lang) : "なし"}
            name="player_type_b"
            options={[{ id: "none", name: "なし" }, ...options]}
            checkedId={playerTypeB ? playerTypeB : "none"}
            handleChange={(value) => handlePlayerTypeBChange(value)}
          />
        </div>
        <div className="flex flex-col items-center">
          わざのタイプ
          <PokemonDropdown
            label={getPokemonTypeName(playerAttackType, lang)}
            name="player_attack_type"
            options={options}
            checkedId={playerAttackType}
            handleChange={(value) => handlePlayerAttackTypeChange(value)}
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
