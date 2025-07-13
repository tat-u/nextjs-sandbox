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
      <ThemeController />

      <div>ここに選択するメニューが来る</div>
      <div>タイプ1: {playerTypeA}</div>
      <div>タイプ2: {playerTypeB}</div>
      <div>わざ: {playerAttackType}</div>

      <PokemonDropdown
        name="player_type_a"
        options={options}
        handleChange={(value) => handlePlayerTypeAChange(value)}
      />
      <PokemonDropdown
        name="player_type_b"
        options={[{ id: "none", name: "なし" }, ...options]}
        handleChange={(value) => handlePlayerTypeBChange(value)}
      />
      <PokemonDropdown
        name="player_attack_type"
        options={options}
        handleChange={(value) => handlePlayerAttackTypeChange(value)}
      />

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
