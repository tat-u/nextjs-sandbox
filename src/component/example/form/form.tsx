"use client";
import {
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
  FormProvider,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Reminder, ReminderSchema } from "@/model/reminder";
import { SubmitButton } from "@/component/common/submit-button/submit-button";
import { TextField } from "@/component/common/text-field/text-field";

export function ReminderForm() {
  const useFormReturn = useForm<Reminder>({
    resolver: zodResolver(ReminderSchema),
  });
  const submitHandler: SubmitHandler<Reminder> = async (data) => {
    await fetch("/api/reminder", {
      method: "POST",
      body: JSON.stringify(data),
    });
  };
  const submitErrorHandler: SubmitErrorHandler<Reminder> = () => {
    // ほとんどの場合、バリデーションエラーによって呼び出される
    console.log("Validation error");
  };

  return (
    <FormProvider {...useFormReturn}>
      <form
        onSubmit={useFormReturn.handleSubmit(submitHandler, submitErrorHandler)}
      >
        <TextField
          labelText="タイトル"
          errorText={useFormReturn.formState.errors.title?.message}
          name="title"
        />
        <TextField
          labelText="本文"
          errorText={useFormReturn.formState.errors.message?.message}
          name="message"
        />
        <SubmitButton disabled={useFormReturn.formState.isSubmitting}>
          Submit
        </SubmitButton>
      </form>
    </FormProvider>
  );
}
