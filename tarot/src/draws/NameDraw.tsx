// tirage d'autant de cartes que de lettre dans le prénom
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import absurd from "../data/absurd.json"

export function Cards() {
    const [card, setCard] = useState({});

    return (<>
    </>)
}


function shuffle(card: { majeures: any[]; mineurs: { couleur: any, element: any, cartes: any[] } [] }) {
    const allCards = [...card.majeures, ...card.mineurs.flatMap((m: any) => m.cartes)]

    console.log("toutes les cartes", allCards)
}


function NameDraw() {
    const location = useLocation();
    const {tone, userName} = location.state

    useEffect(() => (console.log("tone", tone)))
    useEffect(() => (shuffle(absurd)))

    return (
        <>
            <h1> Bienvenue </h1>

        </>
    )
}

export default NameDraw;
