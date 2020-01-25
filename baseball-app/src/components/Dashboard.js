import React from "react";

export default function Dashboard(props) {
    return (
        <div>
            <div>
                <h2>Balls: {props.balls}</h2>
                <h2>Strikes: {props.strikes}</h2>
                <h2>Hits: {props.hits}</h2>
            </div>

        </div>

    )
}