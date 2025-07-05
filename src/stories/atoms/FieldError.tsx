import { HTMLAttributes, DetailedHTMLProps } from "react";

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export function FieldError(props: Props) {
  return <div {...props} className="h-[24px] text-sm/[24px] text-red-600" />;
}
