import { useEffect, useState } from "react";

import style from "./Burgermenu.module.scss";

export const Burgermenu = ({ theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleBurgerbar = () => {
    setIsOpen((prev) => !prev);
    setIsClicked(true);
  };

  return (
    <>
      <div
        onClick={() => handleBurgerbar()}
        className={`${style.hamburger} ${
          isClicked ? (isOpen ? style.openBurger : style.closedBurger) : ""
        }`}
      >
        <span
          className={`${style.bar} ${style[theme]} ${
            isClicked ? (isOpen ? style.barTop : style.barTopClosed) : ""
          }`}
        ></span>
        <span
          className={`${style.bar} ${style[theme]} ${
            isClicked ? (isOpen ? style.barMiddle : style.barMiddleClosed) : ""
          }`}
        ></span>
        <span
          className={`${style.bar} ${style[theme]} ${
            isClicked ? (isOpen ? style.barBottom : style.barBottomClosed) : ""
          }`}
        ></span>
      </div>
    </>
  );
};
