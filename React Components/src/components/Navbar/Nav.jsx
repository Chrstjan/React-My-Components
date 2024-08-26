import style from "./Nav.module.scss";

export const Nav = ({ children, theme }) => {
  return (
    <>
      <nav className={`${style.navStyling} ${style[theme]}`}>{children}</nav>
    </>
  );
};
