import React from "react";

const Form = ({ handleFormSubmit, gameIsOver }) => {
    const [userGuess, setUserGuess] = React.useState("");
    return (
        <form
            className="guess-input-wrapper"
            onSubmit={(e) => {
                e.preventDefault();
                handleFormSubmit(userGuess);
                setUserGuess("");
            }}
        >
            <label htmlFor="guess-input">Enter guess:</label>
            <input
                id="guess-input"
                type="text"
                pattern="[a-zA-Z]{5,5}"
                maxLength={5}
                value={userGuess}
                onChange={(e) => {
                    setUserGuess(e.target.value);
                }}
                disabled={gameIsOver}
            />
        </form>
    );
};

export default Form;
