import React, { useState } from "react";
import Dashboard from "./Dashboard";


export function addBall(currentBalls) {
    if (currentBalls < 3) {
        return currentBalls + 1
    }
    if (currentBalls === 3) {
        return 0
    }

}
export function addStrike(currentStrikes) {
    if (currentStrikes < 2) {
        return currentStrikes + 1
    }
    if (currentStrikes === 2) {
        return 0
    }
}
export function addFoul(currentStrikes) {
    if (currentStrikes === 0) {
        return (1);
    }
    if (currentStrikes === 1) {
        return (2);
    }

}
export function addHit(currentHits) {
    return (currentHits + 1);
}
export default function Display() {
    const [strikes, setStrikes] = useState(0);
    const [balls, setBalls] = useState(0);
    const [hits, setHits] = useState(0);

    const reset = () => {
        setBalls(0);
        setStrikes(0);
        setHits(0);
    }

    return (
        <div>
            <Dashboard strikes={strikes} balls={balls} hits={hits} />
            <div>
                <button onClick={() => { if (balls === 3) { setStrikes(0) }; setBalls(addBall(balls)) }}>Ball</button>
                <button onClick={() => { if (strikes === 2) { setBalls(0); setStrikes(0) } setStrikes(addStrike(strikes)) }}>Strike</button>
                <button onClick={() => { setStrikes(0); setBalls(0); setHits(addHit(hits)); }}>Hit</button>
                <button onClick={() => { addFoul(strikes) }}>Foul</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div >
    )
}
