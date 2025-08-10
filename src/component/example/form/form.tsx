"use client";

import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Reminder, ReminderSchema } from "@/models/reminder";
import { useId } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { useRef, ComponentProps } from "react";

function TextInput({
  ref,
  ...rest
}: Omit<ComponentProps<"input">, "className" | "type">) {
  // Share input ref
  const altRef = useRef<HTMLInputElement | null>(null);
  const handleClick = () => altRef.current?.focus();

  return (
    <div
      onClick={handleClick}
      className="w-[320px] h-[40px] px-[16px] rounded-sm bg-slate-100 hover:bg-slate-200 flex items-center"
    >
      <input
        type="text"
        className="h-fit text-sm/[24px] outline-0 flex-1"
        ref={(e) => {
          if (typeof ref === "function") {
            ref(e);
          }
          altRef.current = e;
        }}
        {...rest}
      />
    </div>
  );
}

function SubmitButton(
  props: Omit<ComponentProps<"button">, "className" | "type">
) {
  return (
    <button
      type="submit"
      className="w-[80px] h-[40px] rounded-full bg-blue-700 hover:shadow-sm hover:shadow-blue-400 active:bg-blue-900 text-white cursor-pointer disabled:cursor-not-allowed disabled:bg-blue-200"
      {...props}
    />
  );
}

function Label(props: Omit<ComponentProps<"label">, "className">) {
  return <label {...props} className="block h-fit text-sm/[24px]" />;
}

type TextFieldProps = {
  label: string;
  error: string | undefined;
  registerReturn?: UseFormRegisterReturn | undefined;
};

function TextField({ label, registerReturn, error }: TextFieldProps) {
  const id = useId();

  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <TextInput id={id} {...registerReturn} />
      <div className="h-[24px] text-sm/[24px] text-red-600">{error}</div>
    </div>
  );
}

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
    <form
      onSubmit={handleSubmit(submitHandler, submitErrorHandler)}
      className="m-[16px] w-fit flex flex-col gap-[8px] items-center"
    >
      <TextField
        label="タイトル"
        registerReturn={register("title")}
        error={errors.title?.message}
      />
      <TextField
        label="本文"
        registerReturn={register("message")}
        error={errors.message?.message}
      />
      <SubmitButton disabled={isSubmitting}>Submit</SubmitButton>
    </form>
  );
}
