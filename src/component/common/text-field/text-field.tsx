import { useId } from "react";
import { TextInput } from "../text-input/text-input";
import { useFormContext } from "react-hook-form";

type TextFieldProps = {
  labelText: string;
  errorText: string | undefined;
  name: string;
};

export function TextField({ labelText, errorText, name }: TextFieldProps) {
  const id = useId();
  const { register } = useFormContext();

  return (
    <div>
      <label htmlFor={id}>{labelText}</label>
      <TextInput id={id} {...register(name)} />
      <span className="block h-lh text-sm text-red-600">{errorText}</span>
    </div>
  );
}
