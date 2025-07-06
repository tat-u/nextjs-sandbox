import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";

type Props = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export function SubmitButton(props: Props) {
  return (
    <button
      type="submit"
      className="w-[80px] h-[40px] rounded-full bg-blue-700 hover:shadow-sm hover:shadow-blue-400 active:bg-blue-800 text-white cursor-pointer disabled:cursor-not-allowed disabled:bg-blue-200"
      {...props}
    />
  );
}

// TODO: aria-disabled?
