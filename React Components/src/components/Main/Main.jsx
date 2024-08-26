import style from "./Main.module.scss";

export const Main = ({ children, theme }) => {
  return (
    <>
      <main className={`${style.mainStyling} ${style[theme]}`}>{children}</main>
    </>
  );
};
