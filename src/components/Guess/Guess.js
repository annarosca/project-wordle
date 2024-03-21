import React from "react";
import { checkGuess } from "../../game-helpers";

const Guess = ({ guess, answer }) => {
    const status = checkGuess(guess.guess, answer);
    return (
        <p className="guess">
            {status.map((value, index) => {
                const color =
                    value.status === "incorrect" ? "" : " " + value.status;
                return (
                    <span className={`cell${color}`} key={index}>
                        {value.letter}
                    </span>
                );
            })}
        </p>
    );
};

export default Guess;
