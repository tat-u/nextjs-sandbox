import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { TextField } from "./text-field";
import { useForm, FormProvider } from "react-hook-form";

const meta = {
  title: "common/TextField",
  component: TextField,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => {
      const methods = useForm();

      return (
        <FormProvider {...methods}>
          <Story />
        </FormProvider>
      );
    },
  ],
} satisfies Meta<typeof TextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    labelText: "Label Text",
    errorText: "Error Text",
    name: "fieldName",
  },
};
