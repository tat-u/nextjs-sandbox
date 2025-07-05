import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SubmitButton } from "./SubmitButton";

const meta = {
  title: "atoms/SubmitButton",
  component: SubmitButton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof SubmitButton>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Visual test only
 */
export const Example: Story = {
  args: {
    children: "Submit",
  },
};
