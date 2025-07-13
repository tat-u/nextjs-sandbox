import {
  PokemonType,
  pokemonTypes,
  SupportedLanguages,
} from "@/models/pokemonDefinitions";
import { getPokemonTypeName } from "@/models/pokemonTypeChart";
import { isPokemonType, typedObjectKeys } from "@/models/pokemonUtils";

type Props = {
  name: string;
  currentChecked: PokemonType | null;
  allowNone: boolean;
  lang: SupportedLanguages;
  handleChange: (value: PokemonType | null) => void;
};

/**
 * This component requires daisyUI to be installed in your project.
 */
export function PokemonTypeDropdown({
  name,
  currentChecked,
  allowNone,
  lang,
  handleChange,
}: Props) {
  const options = [
    { id: "none", name: "なし" },
    ...typedObjectKeys(pokemonTypes).map((key) => ({
      id: key,
      name: getPokemonTypeName(key, lang),
    })),
  ];

  return (
    <div className="d-dropdown d-dropdown-center">
      <div tabIndex={0} role="button" className="d-btn m-1 w-[100px]">
        {currentChecked ? getPokemonTypeName(currentChecked, lang) : "なし"}
      </div>
      <ul
        tabIndex={0}
        className="d-dropdown-content d-menu bg-base-100 rounded-box z-1 w-[120px] p-2 shadow-sm max-h-[400px] overflow-scroll flex-nowrap"
      >
        {options.map((option) => (
          <li key={option.id}>
            <input
              type="radio"
              name={name}
              className="w-full d-btn d-btn-sm d-btn-ghost justify-start checked:outline-2"
              aria-label={option.name}
              value={option.id}
              onChange={(e) => {
                if (isPokemonType(e.target.value)) {
                  handleChange(e.target.value);
                } else {
                  handleChange(null);
                }
              }}
              checked={
                option.id === "none"
                  ? currentChecked === null
                  : currentChecked === option.id
              }
              disabled={option.id === "none" && !allowNone}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
