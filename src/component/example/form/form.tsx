"use client";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Reminder, ReminderSchema } from "@/models/reminder";
import { SubmitButton } from "@/component/common/submit-button/submit-button";
import { TextField } from "@/component/common/text-field/text-field";

export function ReminderForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Reminder>({
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
    <form onSubmit={handleSubmit(submitHandler, submitErrorHandler)}>
      <TextField
        labelText="タイトル"
        registerReturn={register("title")}
        errorText={errors.title?.message}
      />
      <TextField
        labelText="本文"
        registerReturn={register("message")}
        errorText={errors.message?.message}
      />
      <SubmitButton disabled={isSubmitting}>Submit</SubmitButton>
    </form>
  );
}
