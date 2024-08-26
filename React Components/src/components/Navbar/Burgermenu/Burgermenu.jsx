import style from "./Burgermenu.module.scss"

export const Burgermenu = ({theme}) => {
    return (
        <>
            <div className={style.hamburger}>
                <span className={`${style.bar} ${style[theme]}`}></span>
                <span className={`${style.bar} ${style[theme]}`}></span>
                <span className={`${style.bar} ${style[theme]}`}></span>
            </div>
        </>
    )
}