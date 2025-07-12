import { PokemonTypeCard } from "@/stories/molecules/PokemonTypeCard";
import { PokemonH1 } from "@/stories/atoms/PokemonH1";
import { PokemonH2 } from "@/stories/atoms/PokemonH2";
import {
  generateRecommendedChart,
  getPokemonTypeName,
} from "@/models/pokemonTypeChart";
import { SupportedLanguages } from "@/models/pokemonDefinitions";

export default function Home() {
  const {
    hasGoodDefenseAgainst,
    canInflictGoodDamageAgainst,
    hasPoorDefenseAgainst,
    canInflictPoorDamageAgainst,
  } = generateRecommendedChart("rock", "dark", "fire");
  const lang = "ja" satisfies SupportedLanguages;

  return (
    <>
      <div>ここに選択するメニューが来る</div>
      <div>タイプ1: いわ</div>
      <div> タイプ2: あく</div>
      <div> わざ: ほのお</div>
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
