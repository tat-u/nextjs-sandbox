import { LabelHTMLAttributes, DetailedHTMLProps } from "react";

type Props = DetailedHTMLProps<
  LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
>;

export function Label(props: Props) {
  return <label {...props} className="block h-fit text-sm/[24px]" />;
}
