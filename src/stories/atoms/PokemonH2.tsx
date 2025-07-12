type Props = { children: string };

export function PokemonH2({ children }: Props) {
  return (
    <div className="my-[20px] border-l-2 border-stone-200 px-[8px] py-[8px]">
      <h2 className="text-xl/[20px]">{children}</h2>
    </div>
  );
}
