import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ReminderForm } from "./form";
import { useForm, FormProvider } from "react-hook-form";

const meta = {
  title: "example/ReminderForm",
  component: ReminderForm,
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
} satisfies Meta<typeof ReminderForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {};
