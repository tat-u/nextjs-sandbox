type Props = {
  label: string;
  name: string;
  options: { id: string; name: string }[];
  checkedId: string;
  handleChange: (value: string) => void;
};

/**
 * This component requires daisyUI to be installed in your project.
 */
export function PokemonDropdown({
  label,
  name,
  options,
  checkedId,
  handleChange,
}: Props) {
  return (
    <div className="d-dropdown d-dropdown-center">
      <div tabIndex={0} role="button" className="d-btn m-1 w-[100px]">
        {label}
      </div>
      <ul
        tabIndex={0}
        className="d-dropdown-content d-menu bg-base-100 rounded-box z-1 w-[120px] p-2 shadow-sm max-h-[400px] overflow-scroll flex-nowrap"
      >
        {options.map((option) => (
          <li key={option.id}>
            <input
              type="radio"
              name={name}
              className="w-full d-btn d-btn-sm d-btn-block d-btn-ghost justify-start checked:outline-2"
              aria-label={option.name}
              value={option.id}
              onChange={(e) => {
                handleChange(e.target.value);
              }}
              checked={checkedId === option.id}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
