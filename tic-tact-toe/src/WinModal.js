import style from "./WinModal.module.scss"
import cheese from "./assets/fromage.png"
import fox from "./assets/renard.png"
import crow from "./assets/corbeau.png"

export function WinModal({winner, resetGame}) {


    return (
        <>
            <div className={style.modal}>
                <div id={"P1"} className={style.player}>
                    <img src={fox} alt={"image player 1"}/>
                </div>

                <div id={"trophy"} className={`${style.trophy} ${winner === "P1" ? style.toP1 : style.toP2}`}>
                    <img src={cheese} alt={"trophy"}/>
                </div>

                <div id={"P2"} className={style.player}>
                    <img src={crow} alt={"image player 2"}/>
                </div>
            </div>


            <p className={"texte"}> Voulez-vous rejouer ? </p>
            <div className={style.replay}>

                <button onClick={() => resetGame()}> Oui !</button>
                <button> Nope</button>
            </div>
        </>

    )
}

