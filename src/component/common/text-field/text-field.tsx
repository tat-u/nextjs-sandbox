import { UseFormRegisterReturn } from "react-hook-form";
import { useId } from "react";
import { TextInput } from "../text-input/text-input";

type TextFieldProps = {
  labelText: string;
  errorText: string | undefined;
  registerReturn: UseFormRegisterReturn;
};

export function TextField({
  labelText,
  registerReturn,
  errorText,
}: TextFieldProps) {
  const id = useId();

  return (
    <div>
      <label htmlFor={id}>{labelText}</label>
      <TextInput id={id} {...registerReturn} />
      <span className="block h-lh text-sm text-red-600">{errorText}</span>
    </div>
  );
}
