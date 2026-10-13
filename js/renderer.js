// ============================================================
// FRENCH VERB CONJUGATOR
// VERSION 13
//
// FILE: renderer.js
//
// PURPOSE:
// Takes conjugation data from conjugator.js and turns it
// into the HTML cards displayed on the website.
//
// Handles:
// - normal pronouns
// - j'
// - subjunctive que / qu'
// - tense cards
// - mood sections
// - imperative cards
// - verbs without a normal imperative
// ============================================================


// ============================================================
// VOWEL / ELISION CHECK
// ============================================================

function beginsWithVowelSound(word) {

    if (!word) {
        return false;
    }

    const firstLetter =
        word
            .charAt(0)
            .toLowerCase();


    const vowels = [
        "a",
        "à",
        "â",
        "ä",

        "e",
        "é",
        "è",
        "ê",
        "ë",

        "i",
        "î",
        "ï",

        "o",
        "ô",
        "ö",

        "u",
        "ù",
        "û",
        "ü",

        "y",
        "ÿ"
    ];


    return vowels.includes(firstLetter);
}


// ============================================================
// NORMAL PRONOUN
//
// je + ai
//
// becomes:
//
// j'ai
// ============================================================

function formatPronounV13(
    pronoun,
    conjugatedVerb
) {

    if (
        pronoun === "je" &&
        beginsWithVowelSound(
            conjugatedVerb
        )
    ) {

        return "j'";

    }


    return pronoun;
}


// ============================================================
// NORMAL CONJUGATION ROWS
// ============================================================

function createTenseHTMLV13(
    conjugations
) {

    let html = "";


    conjugations.forEach(
        function(form) {

            const displayPronoun =
                formatPronounV13(
                    form.pronoun,
                    form.verb
                );


            // ------------------------------------------------
            // J'
            // ------------------------------------------------

            if (
                displayPronoun === "j'"
            ) {

                html += `

                    <div
                        class="
                            conjugation-row
                            combined-form
                        "
                    >

                        <strong>
                            ${displayPronoun}${form.verb}
                        </strong>

                    </div>

                `;

            }


            // ------------------------------------------------
            // NORMAL PRONOUN
            // ------------------------------------------------

            else {

                html += `

                    <div class="conjugation-row">

                        <span>
                            ${displayPronoun}
                        </span>

                        <strong>
                            ${form.verb}
                        </strong>

                    </div>

                `;

            }

        }
    );


    return html;
}


// ============================================================
// SUBJUNCTIVE PRONOUNS
//
// je        -> que je
// j'aie     -> que j'
// tu        -> que tu
// il / elle -> qu'il / elle
// nous      -> que nous
// vous      -> que vous
// ils       -> qu'ils / elles
// ============================================================

function getSubjunctivePronounV13(
    pronoun,
    conjugatedVerb
) {

    if (pronoun === "je") {

        if (
            beginsWithVowelSound(
                conjugatedVerb
            )
        ) {

            return "que j'";

        }


        return "que je";

    }


    if (pronoun === "tu") {

        return "que tu";

    }


    if (
        pronoun === "il / elle"
    ) {

        return "qu'il / elle";

    }


    if (pronoun === "nous") {

        return "que nous";

    }


    if (pronoun === "vous") {

        return "que vous";

    }


    if (
        pronoun === "ils / elles"
    ) {

        return "qu'ils / elles";

    }


    return pronoun;
}


// ============================================================
// SUBJUNCTIVE ROWS
// ============================================================

function createSubjunctiveHTMLV13(
    conjugations
) {

    let html = "";


    conjugations.forEach(
        function(form) {

            const displayPronoun =
                getSubjunctivePronounV13(
                    form.pronoun,
                    form.verb
                );


            // ------------------------------------------------
            // QUE J'
            // ------------------------------------------------

            if (
                displayPronoun === "que j'"
            ) {

                html += `

                    <div
                        class="
                            conjugation-row
                            combined-form
                        "
                    >

                        <strong>
                            ${displayPronoun}${form.verb}
                        </strong>

                    </div>

                `;

            }


            // ------------------------------------------------
            // OTHER SUBJUNCTIVE PRONOUNS
            // ------------------------------------------------

            else {

                html += `

                    <div class="conjugation-row">

                        <span>
                            ${displayPronoun}
                        </span>

                        <strong>
                            ${form.verb}
                        </strong>

                    </div>

                `;

            }

        }
    );


    return html;
}


// ============================================================
// NORMAL TENSE CARD
// ============================================================

function createTenseCardV13(
    title,
    conjugations
) {

    return `

        <div class="tense-card">

            <h3>
                ${title}
            </h3>

            <div class="conjugation-list">

                ${createTenseHTMLV13(
                    conjugations
                )}

            </div>

        </div>

    `;
}


// ============================================================
// SUBJUNCTIVE CARD
// ============================================================

function createSubjunctiveCardV13(
    title,
    conjugations
) {

    return `

        <div class="tense-card">

            <h3>
                ${title}
            </h3>

            <div class="conjugation-list">

                ${createSubjunctiveHTMLV13(
                    conjugations
                )}

            </div>

        </div>

    `;
}


// ============================================================
// IMPERATIVE CARD
//
// Imperative does not display:
//
// tu
// nous
// vous
//
// Example:
//
// parle
// parlons
// parlez
// ============================================================

function createImperativeCardV13(
    title,
    forms
) {

    // --------------------------------------------------------
    // VERB HAS NO NORMAL IMPERATIVE
    //
    // Example:
    // pouvoir
    // --------------------------------------------------------

    if (!forms) {

        return `

            <div class="tense-card">

                <h3>
                    ${title}
                </h3>

                <div class="conjugation-list">

                    <div
                        class="
                            conjugation-row
                            combined-form
                        "
                    >

                        <strong>
                            Pas d'impératif usuel.
                        </strong>

                    </div>

                </div>

            </div>

        `;

    }


    // --------------------------------------------------------
    // NORMAL IMPERATIVE
    // --------------------------------------------------------

    let rows = "";


    forms.forEach(
        function(form) {

            rows += `

                <div
                    class="
                        conjugation-row
                        combined-form
                    "
                >

                    <strong>
                        ${form}
                    </strong>

                </div>

            `;

        }
    );


    return `

        <div class="tense-card">

            <h3>
                ${title}
            </h3>

            <div class="conjugation-list">

                ${rows}

            </div>

        </div>

    `;
}


// ============================================================
// MOOD SECTION
// ============================================================

function createMoodSectionV13(
    moodName,
    cards
) {

    return `

        <h2 class="mood-title">
            ${moodName}
        </h2>

        <div class="tense-grid">

            ${cards.join("")}

        </div>

    `;
}


// ============================================================
// INDICATIVE SECTION
// ============================================================

function createIndicativeSectionV13(
    data
) {

    const cards = [

        createTenseCardV13(
            "Présent",
            data.present
        ),

        createTenseCardV13(
            "Imparfait",
            data.imperfect
        ),

        createTenseCardV13(
            "Passé simple",
            data.passeSimple
        ),

        createTenseCardV13(
            "Futur simple",
            data.future
        ),

        createTenseCardV13(
            "Passé composé",
            data.passeCompose
        ),

        createTenseCardV13(
            "Plus-que-parfait",
            data.plusQueParfait
        ),

        createTenseCardV13(
            "Passé antérieur",
            data.passeAnterieur
        ),

        createTenseCardV13(
            "Futur antérieur",
            data.futureAnterior
        )

    ];


    return createMoodSectionV13(
        "Indicatif",
        cards
    );
}


// ============================================================
// CONDITIONAL SECTION
// ============================================================

function createConditionalSectionV13(
    data
) {

    const cards = [

        createTenseCardV13(
            "Présent",
            data.present
        ),

        createTenseCardV13(
            "Passé",
            data.past
        )

    ];


    return createMoodSectionV13(
        "Conditionnel",
        cards
    );
}


// ============================================================
// SUBJUNCTIVE SECTION
// ============================================================

function createSubjunctiveSectionV13(
    data
) {

    const cards = [

        createSubjunctiveCardV13(
            "Présent",
            data.present
        ),

        createSubjunctiveCardV13(
            "Passé",
            data.past
        )

    ];


    return createMoodSectionV13(
        "Subjonctif",
        cards
    );
}


// ============================================================
// IMPERATIVE SECTION
// ============================================================

function createImperativeSectionV13(
    data
) {

    const cards = [

        createImperativeCardV13(
            "Présent",
            data.present
        ),

        createImperativeCardV13(
            "Passé",
            data.past
        )

    ];


    return createMoodSectionV13(
        "Impératif",
        cards
    );
}


// ============================================================
// RENDER COMPLETE VERB
//
// Receives the object produced by:
//
// conjugateCompleteVerb()
//
// and builds the complete result card.
// ============================================================

function renderCompleteVerbV13(
    conjugationData
) {

    // --------------------------------------------------------
    // UNSUPPORTED
    // --------------------------------------------------------

    if (
        !conjugationData.supported
    ) {

        return `

            <div class="result-card">

                <h2>
                    ${conjugationData.verb}
                </h2>

                <p>
                    I don't recognize this
                    verb pattern yet.
                </p>

            </div>

        `;

    }


    // --------------------------------------------------------
    // SECTIONS
    // --------------------------------------------------------

    const indicativeSection =
        createIndicativeSectionV13(
            conjugationData.indicative
        );


    const conditionalSection =
        createConditionalSectionV13(
            conjugationData.conditional
        );


    const subjunctiveSection =
        createSubjunctiveSectionV13(
            conjugationData.subjunctive
        );


    const imperativeSection =
        createImperativeSectionV13(
            conjugationData.imperative
        );


    // --------------------------------------------------------
    // COMPLETE RESULT
    // --------------------------------------------------------

    return `

        <div class="result-card">


            <div class="verb-header">

                <h2>
                    ${conjugationData.verb}
                </h2>


                <span class="verb-type">

                    ${conjugationData.verbTypeName}

                </span>

            </div>


            ${indicativeSection}


            ${conditionalSection}


            ${subjunctiveSection}


            ${imperativeSection}


        </div>

    `;
}


// ============================================================
// EMPTY INPUT MESSAGE
// ============================================================

function renderEmptyInputV13() {

    return `

        <div class="result-card">

            <p>
                Please enter a French verb.
            </p>

        </div>

    `;
}


// ============================================================
// END OF renderer.js
// ============================================================