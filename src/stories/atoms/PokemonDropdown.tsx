type Props = {
  name: string;
  options: { id: string; name: string }[];
  handleChange: (value: string) => void;
};

/**
 * This component requires daisyUI to be installed in your project.
 */
export function PokemonDropdown({ name, options, handleChange }: Props) {
  return (
    <div className="d-dropdown d-dropdown-bottom">
      <div tabIndex={0} role="button" className="d-btn m-1">
        Select
      </div>
      <ul
        tabIndex={0}
        className="d-dropdown-content d-menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
      >
        {options.map((option) => (
          <li key={option.id}>
            <input
              type="radio"
              name={name}
              className="w-full d-btn d-btn-sm d-btn-block d-btn-ghost justify-start"
              aria-label={option.name}
              value={option.id}
              onChange={(e) => {
                handleChange(e.target.value);
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
