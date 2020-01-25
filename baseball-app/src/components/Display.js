import React, { useState } from "react";
import Dashboard from "./Dashboard";

export default function Display() {
    const [strikes, setStrikes] = useState(0);
    const [balls, setBalls] = useState(0);
    const [hits, setHits] = useState(0);

    const addBall = () => {
        let tempBalls = balls;
        if (tempBalls < 3) {
            setBalls(tempBalls + 1);
        }
        if (tempBalls === 3) {
            setBalls(0);
            setStrikes(0);
        }

    }
    const addStrike = () => {
        let tempStrikes = strikes;
        if (tempStrikes < 2) {
            setStrikes(tempStrikes + 1);
        }
        if (tempStrikes === 2) {
            setBalls(0);
            setStrikes(0);
        }
    }
    const addFoul = () => {
        let tempStrikes = strikes;
        if (tempStrikes === 0) {
            setStrikes(1);
        }
        if (tempStrikes === 1) {
            setStrikes(2);
        }
    }
    const addHit = () => {
        let tempHits = hits;
        setHits(tempHits + 1);
        setBalls(0);
        setStrikes(0);
    }
    const reset = () => {
        setBalls(0);
        setStrikes(0);
        setHits(0);
    }

    return (
        <div>
            <Dashboard strikes={strikes} balls={balls} hits={hits} />
            <div>
                <button onClick={addBall}>Ball</button>
                <button onClick={addStrike}>Strike</button>
                <button onClick={addHit}>Hit</button>
                <button onClick={addFoul}>Foul</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div >
    )
}
