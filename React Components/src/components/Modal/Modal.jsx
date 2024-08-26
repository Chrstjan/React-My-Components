import style from "./Modal.module.scss";

export const Modal = ({ children, theme, action }) => {
  return (
    <>
      <div onClick={() => action()} className={style.overlayStyling}></div>
      <div className={`${style.modalStyling} ${style[theme]}`}>
        <button onClick={() => action()} className={style.modalBtn}>
          X
        </button>
        {children}
      </div>
    </>
  );
};
