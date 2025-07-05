import { useId } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { Label } from "../atoms/Label";
import { TextInput } from "../atoms/TextInput";

type Props = {
  label: string;
  registerReturn?: UseFormRegisterReturn | undefined;
};

export function TextField({ label, registerReturn }: Props) {
  const id = useId();

  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <TextInput id={id} {...registerReturn} />
    </div>
  );
}
