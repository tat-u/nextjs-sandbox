import { themes } from "@/models/themes";

/**
 * This component requires daisyUI to be installed in your project.
 */
export function ThemeController() {
  // WARN: なぜか daisyUI config で指定した prefix が反映されないため、一旦 "d-" prefix なしとする

  return (
    <div className="d-dropdown">
      <div tabIndex={0} role="button" className="d-btn m-1">
        Theme
        <svg
          width="12px"
          height="12px"
          className="inline-block h-2 w-2 fill-current opacity-60"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="d-dropdown-content bg-base-300 rounded-box z-1 w-52 p-2 shadow-2xl"
      >
        {Object.entries(themes).map(([key, theme]) => (
          <li key={key}>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller w-full d-btn d-btn-sm d-btn-ghost justify-start"
              aria-label={theme.name}
              value={theme.id}
              onChange={(e) => {
                // NOTE: Accessing localStorage in here is actually safe, because onChange is called in the browser context
                localStorage.setItem("theme", e.target.value);
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
