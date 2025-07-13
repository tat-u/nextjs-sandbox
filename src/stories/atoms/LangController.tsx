import {
  isAvailableLanguage,
  languages,
  SupportedLanguages,
} from "@/models/lang";

type Props = {
  handleChange: (lang: SupportedLanguages) => void;
};

/**
 * This component requires daisyUI to be installed in your project.
 */
export function LangController({ handleChange }: Props) {
  return (
    <div className="d-dropdown">
      <div tabIndex={0} role="button" className="d-btn m-1">
        Lang
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
        {Object.entries(languages).map(([key, lang]) => (
          <li key={key}>
            <input
              type="radio"
              name="lang"
              className="w-full d-btn d-btn-sm d-btn-ghost justify-start"
              aria-label={lang.name}
              value={lang.id}
              onChange={(e) => {
                localStorage.setItem("lang", e.target.value);
                if (isAvailableLanguage(e.target.value)) {
                  handleChange(e.target.value);
                }
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
