import React from "react";

import { sample, range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { WORDS } from "../../data";

import Form from "../Form";
// import Guesses from "../Guesses";
import Guess from "../Guess";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });
const winBanner = (
    <div className="happy banner">
        <p>
            <strong>Congratulations!</strong> Got it in
            <strong>3 guesses</strong>.
        </p>
    </div>
);
const loseBanner = (
    <div className="sad banner">
        <p>
            Sorry, the correct answer is <strong>LEARN</strong>.
        </p>
    </div>
);
function Game() {
    const blankList = range(NUM_OF_GUESSES_ALLOWED).map((_, index) => ({
        guess: "     ",
        id: index,
    }));

    const [userGuessList, setUserGuessList] = React.useState(blankList);
    const [attempts, setAttempts] = React.useState(0);
    const [gameIsOver, setGameIsOver] = React.useState(false);

    const handleUserGuess = (guess) => {
        const newUserGuess = guess.toUpperCase();
        const newUserGuessList = userGuessList;
        newUserGuessList[attempts] = {
            guess: newUserGuess,
            id: userGuessList[attempts].id,
        };
        const currentAttempts = attempts + 1;
        setAttempts((current) => current + 1);
        setUserGuessList(newUserGuessList);
        if (
            currentAttempts >= NUM_OF_GUESSES_ALLOWED ||
            newUserGuess === answer
        ) {
            setGameIsOver(true);
        }
    };
    return (
        <>
            <Form handleFormSubmit={handleUserGuess} gameIsOver={gameIsOver} />
            {gameIsOver && attempts >= NUM_OF_GUESSES_ALLOWED
                ? loseBanner
                : gameIsOver && winBanner}
            <div className="guess-results">
                {userGuessList.map((guess) => (
                    <Guess guess={guess} answer={answer} key={guess.id} />
                ))}
            </div>
            {/* <Guesses guessList={userGuessList} /> */}
        </>
    );
}

export default Game;
