import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PokemonDropdown } from "./PokemonDropdown";

const meta = {
  title: "atoms/PokemonDropdown",
  component: PokemonDropdown,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof PokemonDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    name: "pokemon_type",
    options: [
      { id: "normal", name: "Normal" },
      { id: "fire", name: "Fire" },
    ],
    handleChange: () => {},
  },
};
