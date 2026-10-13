// ============================================================
// FRENCH VERB CONJUGATOR
// VERSION 13
//
// FILE: app.js
//
// PURPOSE:
// Connects the webpage to the conjugation engine.
//
// This file:
// - reads the verb from the input
// - calls conjugateCompleteVerb()
// - sends the result to renderer.js
// - handles the button
// - handles Enter
// - handles example buttons
// ============================================================


// ============================================================
// HTML ELEMENTS
// ============================================================

const verbInput =
    document.getElementById(
        "verbInput"
    );


const conjugateButton =
    document.getElementById(
        "conjugateButton"
    );


const results =
    document.getElementById(
        "results"
    );


const exampleButtons =
    document.querySelectorAll(
        ".example"
    );


// ============================================================
// MAIN APP FUNCTION
// ============================================================

function runConjugator() {

    const verb =
        verbInput.value
            .trim()
            .toLowerCase();


    // --------------------------------------------------------
    // EMPTY INPUT
    // --------------------------------------------------------

    if (verb === "") {

        results.innerHTML =
            renderEmptyInputV13();

        return;

    }


    // --------------------------------------------------------
    // ASK THE ENGINE TO CONJUGATE THE VERB
    // --------------------------------------------------------

    const conjugationData =
        conjugateCompleteVerb(
            verb
        );


    // --------------------------------------------------------
    // RENDER RESULT
    // --------------------------------------------------------

    results.innerHTML =
        renderCompleteVerbV13(
            conjugationData
        );
}


// ============================================================
// CONJUGATE BUTTON
// ============================================================

conjugateButton.addEventListener(
    "click",
    runConjugator
);


// ============================================================
// ENTER KEY
// ============================================================

verbInput.addEventListener(
    "keydown",

    function(event) {

        if (
            event.key === "Enter"
        ) {

            runConjugator();

        }

    }
);


// ============================================================
// EXAMPLE BUTTONS
// ============================================================

exampleButtons.forEach(

    function(button) {

        button.addEventListener(

            "click",

            function() {

                verbInput.value =
                    button.textContent
                        .trim();

                runConjugator();

            }

        );

    }

);


// ============================================================
// END OF app.js
// ============================================================