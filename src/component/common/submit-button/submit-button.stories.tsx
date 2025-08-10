import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SubmitButton } from "./submit-button";

const meta = {
  title: "common/SubmitButton",
  component: SubmitButton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof SubmitButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: { children: "Submit" },
};
