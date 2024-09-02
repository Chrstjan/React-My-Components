import { useState } from "react";

import style from "./ThemeSwitch.module.scss";

export const ThemeSwitch = ({}) => {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <>
      <button onClick={toggleDarkMode} className={style.switchStyling}>
        <div
          className={`${style.imageContainer} ${
            isDark ? style.darkContainer : style.lightContainer
          }`}
        >
          <span
            className={`${style.dot} ${
              isDark ? style.darkMode : style.lightMode
            }`}
          ></span>
        </div>
      </button>
    </>
  );
};
