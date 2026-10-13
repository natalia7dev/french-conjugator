// ============================================================
// FRENCH VERB CONJUGATOR — VERSION 12
//
// INDICATIF:
// Présent
// Imparfait
// Passé simple
// Futur simple
// Passé composé
// Plus-que-parfait
// Passé antérieur
// Futur antérieur
//
// CONDITIONNEL:
// Présent
// Passé
//
// SUBJONCTIF:
// Présent
// Passé
//
// IMPÉRATIF:
// Présent
// Passé
//
// FAMILIES:
// prendre
// venir
// ============================================================


// ============================================================
// HTML ELEMENTS
// ============================================================

const verbInput = document.getElementById("verbInput");
const conjugateButton = document.getElementById("conjugateButton");
const results = document.getElementById("results");
const exampleButtons = document.querySelectorAll(".example");


// ============================================================
// PRONOUNS
// ============================================================

const pronouns = [
    "je",
    "tu",
    "il / elle",
    "nous",
    "vous",
    "ils / elles"
];


// ============================================================
// REGULAR ENDINGS
// ============================================================

const erPresentEndings = [
    "e", "es", "e", "ons", "ez", "ent"
];

const irPresentEndings = [
    "is", "is", "it", "issons", "issez", "issent"
];

const rePresentEndings = [
    "s", "s", "", "ons", "ez", "ent"
];

const imperfectEndings = [
    "ais", "ais", "ait", "ions", "iez", "aient"
];

const futureEndings = [
    "ai", "as", "a", "ons", "ez", "ont"
];

const conditionalEndings = [
    "ais", "ais", "ait", "ions", "iez", "aient"
];

const erPasseSimpleEndings = [
    "ai", "as", "a", "âmes", "âtes", "èrent"
];

const irRePasseSimpleEndings = [
    "is", "is", "it", "îmes", "îtes", "irent"
];


// ============================================================
// AUXILIARY FORMS
// ============================================================

// AVOIR — PRÉSENT

const avoirPresent = [
    "ai",
    "as",
    "a",
    "avons",
    "avez",
    "ont"
];


// ÊTRE — PRÉSENT

const etrePresent = [
    "suis",
    "es",
    "est",
    "sommes",
    "êtes",
    "sont"
];


// AVOIR — IMPARFAIT

const avoirImperfect = [
    "avais",
    "avais",
    "avait",
    "avions",
    "aviez",
    "avaient"
];


// ÊTRE — IMPARFAIT

const etreImperfect = [
    "étais",
    "étais",
    "était",
    "étions",
    "étiez",
    "étaient"
];


// AVOIR — FUTUR

const avoirFuture = [
    "aurai",
    "auras",
    "aura",
    "aurons",
    "aurez",
    "auront"
];


// ÊTRE — FUTUR

const etreFuture = [
    "serai",
    "seras",
    "sera",
    "serons",
    "serez",
    "seront"
];


// AVOIR — PASSÉ SIMPLE

const avoirPasseSimple = [
    "eus",
    "eus",
    "eut",
    "eûmes",
    "eûtes",
    "eurent"
];


// ÊTRE — PASSÉ SIMPLE

const etrePasseSimple = [
    "fus",
    "fus",
    "fut",
    "fûmes",
    "fûtes",
    "furent"
];


// AVOIR — CONDITIONNEL

const avoirConditional = [
    "aurais",
    "aurais",
    "aurait",
    "aurions",
    "auriez",
    "auraient"
];


// ÊTRE — CONDITIONNEL

const etreConditional = [
    "serais",
    "serais",
    "serait",
    "serions",
    "seriez",
    "seraient"
];


// AVOIR — SUBJONCTIF

const avoirSubjunctive = [
    "aie",
    "aies",
    "ait",
    "ayons",
    "ayez",
    "aient"
];


// ÊTRE — SUBJONCTIF

const etreSubjunctive = [
    "sois",
    "sois",
    "soit",
    "soyons",
    "soyez",
    "soient"
];


// ============================================================
// IMPERATIVE AUXILIARIES
// ============================================================

const avoirImperative = [
    "aie",
    "ayons",
    "ayez"
];

const etreImperative = [
    "sois",
    "soyons",
    "soyez"
];


// ============================================================
// IRREGULAR VERB DATABASE
// ============================================================

const irregularVerbs = {

    // --------------------------------------------------------
    // ÊTRE
    // --------------------------------------------------------

    "être": {

        present: [
            "suis",
            "es",
            "est",
            "sommes",
            "êtes",
            "sont"
        ],

        imperfect: [
            "étais",
            "étais",
            "était",
            "étions",
            "étiez",
            "étaient"
        ],

        futureStem: "ser",

        passeSimple: [
            "fus",
            "fus",
            "fut",
            "fûmes",
            "fûtes",
            "furent"
        ],

        subjunctive: [
            "sois",
            "sois",
            "soit",
            "soyons",
            "soyez",
            "soient"
        ],

        pastParticiple: "été",

        auxiliary: "avoir"
    },


    // --------------------------------------------------------
    // AVOIR
    // --------------------------------------------------------

    "avoir": {

        present: [
            "ai",
            "as",
            "a",
            "avons",
            "avez",
            "ont"
        ],

        imperfect: [
            "avais",
            "avais",
            "avait",
            "avions",
            "aviez",
            "avaient"
        ],

        futureStem: "aur",

        passeSimple: [
            "eus",
            "eus",
            "eut",
            "eûmes",
            "eûtes",
            "eurent"
        ],

        subjunctive: [
            "aie",
            "aies",
            "ait",
            "ayons",
            "ayez",
            "aient"
        ],

        pastParticiple: "eu",

        auxiliary: "avoir"
    },


    // --------------------------------------------------------
    // ALLER
    // --------------------------------------------------------

    "aller": {

        present: [
            "vais",
            "vas",
            "va",
            "allons",
            "allez",
            "vont"
        ],

        imperfect: [
            "allais",
            "allais",
            "allait",
            "allions",
            "alliez",
            "allaient"
        ],

        futureStem: "ir",

        passeSimple: [
            "allai",
            "allas",
            "alla",
            "allâmes",
            "allâtes",
            "allèrent"
        ],

        subjunctive: [
            "aille",
            "ailles",
            "aille",
            "allions",
            "alliez",
            "aillent"
        ],

        pastParticiple: "allé",

        auxiliary: "être"
    },


    // --------------------------------------------------------
    // FAIRE
    // --------------------------------------------------------

    "faire": {

        present: [
            "fais",
            "fais",
            "fait",
            "faisons",
            "faites",
            "font"
        ],

        imperfect: [
            "faisais",
            "faisais",
            "faisait",
            "faisions",
            "faisiez",
            "faisaient"
        ],

        futureStem: "fer",

        passeSimple: [
            "fis",
            "fis",
            "fit",
            "fîmes",
            "fîtes",
            "firent"
        ],

        subjunctive: [
            "fasse",
            "fasses",
            "fasse",
            "fassions",
            "fassiez",
            "fassent"
        ],

        pastParticiple: "fait",

        auxiliary: "avoir"
    },


    // --------------------------------------------------------
    // VENIR
    // --------------------------------------------------------

    "venir": {

        present: [
            "viens",
            "viens",
            "vient",
            "venons",
            "venez",
            "viennent"
        ],

        imperfect: [
            "venais",
            "venais",
            "venait",
            "venions",
            "veniez",
            "venaient"
        ],

        futureStem: "viendr",

        passeSimple: [
            "vins",
            "vins",
            "vint",
            "vînmes",
            "vîntes",
            "vinrent"
        ],

        subjunctive: [
            "vienne",
            "viennes",
            "vienne",
            "venions",
            "veniez",
            "viennent"
        ],

        pastParticiple: "venu",

        auxiliary: "être"
    },


    // --------------------------------------------------------
    // PRENDRE
    // --------------------------------------------------------

    "prendre": {

        present: [
            "prends",
            "prends",
            "prend",
            "prenons",
            "prenez",
            "prennent"
        ],

        imperfect: [
            "prenais",
            "prenais",
            "prenait",
            "prenions",
            "preniez",
            "prenaient"
        ],

        futureStem: "prendr",

        passeSimple: [
            "pris",
            "pris",
            "prit",
            "prîmes",
            "prîtes",
            "prirent"
        ],

        subjunctive: [
            "prenne",
            "prennes",
            "prenne",
            "prenions",
            "preniez",
            "prennent"
        ],

        pastParticiple: "pris",

        auxiliary: "avoir"
    },


    // --------------------------------------------------------
    // POUVOIR
    // --------------------------------------------------------

    "pouvoir": {

        present: [
            "peux",
            "peux",
            "peut",
            "pouvons",
            "pouvez",
            "peuvent"
        ],

        imperfect: [
            "pouvais",
            "pouvais",
            "pouvait",
            "pouvions",
            "pouviez",
            "pouvaient"
        ],

        futureStem: "pourr",

        passeSimple: [
            "pus",
            "pus",
            "put",
            "pûmes",
            "pûtes",
            "purent"
        ],

        subjunctive: [
            "puisse",
            "puisses",
            "puisse",
            "puissions",
            "puissiez",
            "puissent"
        ],

        pastParticiple: "pu",

        auxiliary: "avoir"
    },


    // --------------------------------------------------------
    // VOULOIR
    // --------------------------------------------------------

    "vouloir": {

        present: [
            "veux",
            "veux",
            "veut",
            "voulons",
            "voulez",
            "veulent"
        ],

        imperfect: [
            "voulais",
            "voulais",
            "voulait",
            "voulions",
            "vouliez",
            "voulaient"
        ],

        futureStem: "voudr",

        passeSimple: [
            "voulus",
            "voulus",
            "voulut",
            "voulûmes",
            "voulûtes",
            "voulurent"
        ],

        subjunctive: [
            "veuille",
            "veuilles",
            "veuille",
            "voulions",
            "vouliez",
            "veuillent"
        ],

        pastParticiple: "voulu",

        auxiliary: "avoir"
    },


    // --------------------------------------------------------
    // DEVOIR
    // --------------------------------------------------------

    "devoir": {

        present: [
            "dois",
            "dois",
            "doit",
            "devons",
            "devez",
            "doivent"
        ],

        imperfect: [
            "devais",
            "devais",
            "devait",
            "devions",
            "deviez",
            "devaient"
        ],

        futureStem: "devr",

        passeSimple: [
            "dus",
            "dus",
            "dut",
            "dûmes",
            "dûtes",
            "durent"
        ],

        subjunctive: [
            "doive",
            "doives",
            "doive",
            "devions",
            "deviez",
            "doivent"
        ],

        pastParticiple: "dû",

        auxiliary: "avoir"
    }

};


// ============================================================
// FAMILIES
// ============================================================

const prendreFamily = [
    "prendre",
    "apprendre",
    "comprendre",
    "reprendre",
    "surprendre",
    "entreprendre"
];


const venirFamily = [
    "venir",
    "devenir",
    "revenir",
    "parvenir",
    "intervenir",
    "prévenir",
    "convenir"
];


// ============================================================
// CHECKS
// ============================================================

function isIrregular(verb) {

    return Object.prototype.hasOwnProperty.call(
        irregularVerbs,
        verb
    );
}


function isPrendreFamily(verb) {

    return prendreFamily.includes(verb);
}


function isVenirFamily(verb) {

    return venirFamily.includes(verb);
}


// ============================================================
// DETECT VERB TYPE
// ============================================================

function detectVerbType(verb) {

    if (isIrregular(verb)) {
        return "irregular";
    }

    if (isPrendreFamily(verb)) {
        return "prendre-family";
    }

    if (isVenirFamily(verb)) {
        return "venir-family";
    }

    if (verb.endsWith("er")) {
        return "er";
    }

    if (verb.endsWith("ir")) {
        return "ir";
    }

    if (verb.endsWith("re")) {
        return "re";
    }

    return "unknown";
}


// ============================================================
// HELPER
// ============================================================

function makeConjugations(forms) {

    return forms.map(
        function(form, index) {

            return {
                pronoun: pronouns[index],
                verb: form
            };

        }
    );
}


// ============================================================
// EXACT IRREGULAR
// ============================================================

function conjugateIrregular(
    verb,
    tense
) {

    return makeConjugations(
        irregularVerbs[verb][tense]
    );
}


// ============================================================
// PRENDRE FAMILY
// ============================================================

function getPrendrePrefix(verb) {

    return verb.slice(
        0,
        -"prendre".length
    );
}


function conjugatePrendreFamily(
    verb,
    tense
) {

    const prefix =
        getPrendrePrefix(verb);


    const forms = {

        present: [
            "prends",
            "prends",
            "prend",
            "prenons",
            "prenez",
            "prennent"
        ],

        imperfect: [
            "prenais",
            "prenais",
            "prenait",
            "prenions",
            "preniez",
            "prenaient"
        ],

        passeSimple: [
            "pris",
            "pris",
            "prit",
            "prîmes",
            "prîtes",
            "prirent"
        ],

        subjunctive: [
            "prenne",
            "prennes",
            "prenne",
            "prenions",
            "preniez",
            "prennent"
        ]

    };


    return makeConjugations(
        forms[tense].map(
            function(form) {

                return prefix + form;

            }
        )
    );
}


// ============================================================
// VENIR FAMILY
// ============================================================

function getVenirPrefix(verb) {

    return verb.slice(
        0,
        -"venir".length
    );
}


function conjugateVenirFamily(
    verb,
    tense
) {

    const prefix =
        getVenirPrefix(verb);


    const forms = {

        present: [
            "viens",
            "viens",
            "vient",
            "venons",
            "venez",
            "viennent"
        ],

        imperfect: [
            "venais",
            "venais",
            "venait",
            "venions",
            "veniez",
            "venaient"
        ],

        passeSimple: [
            "vins",
            "vins",
            "vint",
            "vînmes",
            "vîntes",
            "vinrent"
        ],

        subjunctive: [
            "vienne",
            "viennes",
            "vienne",
            "venions",
            "veniez",
            "viennent"
        ]

    };


    return makeConjugations(
        forms[tense].map(
            function(form) {

                return prefix + form;

            }
        )
    );
}


// ============================================================
// REGULAR PRESENT
// ============================================================

function conjugatePresent(
    verb,
    type
) {

    const stem =
        verb.slice(0, -2);


    let endings;


    if (type === "er") {

        endings =
            erPresentEndings;

    }

    else if (type === "ir") {

        endings =
            irPresentEndings;

    }

    else {

        endings =
            rePresentEndings;

    }


    return makeConjugations(
        endings.map(
            function(ending) {

                return stem + ending;

            }
        )
    );
}


// ============================================================
// REGULAR IMPARFAIT
// ============================================================

function conjugateImperfect(
    verb,
    type
) {

    let stem =
        verb.slice(0, -2);


    if (type === "ir") {

        stem += "iss";

    }


    return makeConjugations(
        imperfectEndings.map(
            function(ending) {

                return stem + ending;

            }
        )
    );
}


// ============================================================
// FUTURE STEM
// ============================================================

function getFutureStem(
    verb,
    type
) {

    if (type === "irregular") {

        return irregularVerbs[verb].futureStem;

    }


    if (type === "prendre-family") {

        return (
            getPrendrePrefix(verb) +
            "prendr"
        );

    }


    if (type === "venir-family") {

        return (
            getVenirPrefix(verb) +
            "viendr"
        );

    }


    if (
        type === "er" ||
        type === "ir"
    ) {

        return verb;

    }


    if (type === "re") {

        return verb.slice(0, -1);

    }


    return "";
}


// ============================================================
// FUTUR SIMPLE
// ============================================================

function conjugateFuture(
    verb,
    type
) {

    const stem =
        getFutureStem(
            verb,
            type
        );


    return makeConjugations(
        futureEndings.map(
            function(ending) {

                return stem + ending;

            }
        )
    );
}


// ============================================================
// CONDITIONNEL PRÉSENT
// ============================================================

function conjugateConditionalPresent(
    verb,
    type
) {

    const stem =
        getFutureStem(
            verb,
            type
        );


    return makeConjugations(
        conditionalEndings.map(
            function(ending) {

                return stem + ending;

            }
        )
    );
}


// ============================================================
// PASSÉ SIMPLE
// ============================================================

function conjugateRegularPasseSimple(
    verb,
    type
) {

    const stem =
        verb.slice(0, -2);


    const endings =
        type === "er"
            ? erPasseSimpleEndings
            : irRePasseSimpleEndings;


    return makeConjugations(
        endings.map(
            function(ending) {

                return stem + ending;

            }
        )
    );
}


// ============================================================
// REGULAR SUBJUNCTIVE PRESENT
// ============================================================

function conjugateRegularSubjunctive(
    verb,
    type
) {

    let stem;


    // PARLER
    if (type === "er") {

        stem =
            verb.slice(0, -2);


        return makeConjugations([

            stem + "e",
            stem + "es",
            stem + "e",
            stem + "ions",
            stem + "iez",
            stem + "ent"

        ]);

    }


    // FINIR
    if (type === "ir") {

        stem =
            verb.slice(0, -2);


        return makeConjugations([

            stem + "isse",
            stem + "isses",
            stem + "isse",
            stem + "issions",
            stem + "issiez",
            stem + "issent"

        ]);

    }


    // BASIC REGULAR -RE
    stem =
        verb.slice(0, -2);


    return makeConjugations([

        stem + "e",
        stem + "es",
        stem + "e",
        stem + "ions",
        stem + "iez",
        stem + "ent"

    ]);
}


// ============================================================
// SUBJONCTIF PRÉSENT
// ============================================================

function conjugateSubjunctivePresent(
    verb,
    type
) {

    if (type === "irregular") {

        return conjugateIrregular(
            verb,
            "subjunctive"
        );

    }


    if (type === "prendre-family") {

        return conjugatePrendreFamily(
            verb,
            "subjunctive"
        );

    }


    if (type === "venir-family") {

        return conjugateVenirFamily(
            verb,
            "subjunctive"
        );

    }


    return conjugateRegularSubjunctive(
        verb,
        type
    );
}


// ============================================================
// PAST PARTICIPLE
// ============================================================

function getPastParticiple(
    verb,
    type
) {

    if (type === "irregular") {

        return (
            irregularVerbs[verb]
            .pastParticiple
        );

    }


    if (type === "prendre-family") {

        return (
            getPrendrePrefix(verb) +
            "pris"
        );

    }


    if (type === "venir-family") {

        return (
            getVenirPrefix(verb) +
            "venu"
        );

    }


    if (type === "er") {

        return (
            verb.slice(0, -2) +
            "é"
        );

    }


    if (type === "ir") {

        return (
            verb.slice(0, -2) +
            "i"
        );

    }


    if (type === "re") {

        return (
            verb.slice(0, -2) +
            "u"
        );

    }


    return "";
}


// ============================================================
// AUXILIARY
// ============================================================

function getAuxiliary(
    verb,
    type
) {

    if (type === "irregular") {

        return (
            irregularVerbs[verb]
            .auxiliary
        );

    }


    if (type === "prendre-family") {

        return "avoir";

    }


    if (type === "venir-family") {

        // prévenir and convenir use avoir
        // in the meanings currently represented here.

        if (
            verb === "prévenir" ||
            verb === "convenir"
        ) {

            return "avoir";

        }


        return "être";

    }


    return "avoir";
}


// ============================================================
// ÊTRE AGREEMENT
// ============================================================

function applyEtreAgreement(
    participle,
    index
) {

    if (index === 2) {

        return participle + "(e)";

    }


    if (index === 3) {

        return participle + "(e)s";

    }


    if (index === 4) {

        return participle + "(e)(s)";

    }


    if (index === 5) {

        return participle + "(e)s";

    }


    return participle;
}


// ============================================================
// GENERIC COMPOUND TENSE
// ============================================================

function conjugateCompoundTense(
    verb,
    type,
    avoirForms,
    etreForms
) {

    const auxiliary =
        getAuxiliary(
            verb,
            type
        );


    const auxiliaryForms =
        auxiliary === "être"
            ? etreForms
            : avoirForms;


    const baseParticiple =
        getPastParticiple(
            verb,
            type
        );


    const forms = [];


    for (
        let i = 0;
        i < pronouns.length;
        i++
    ) {

        let participle =
            baseParticiple;


        if (auxiliary === "être") {

            participle =
                applyEtreAgreement(
                    participle,
                    i
                );

        }


        forms.push({

            pronoun:
                pronouns[i],

            verb:
                auxiliaryForms[i] +
                " " +
                participle

        });

    }


    return forms;
}


// ============================================================
// INDICATIVE COMPOUND TENSES
// ============================================================

function conjugatePasseCompose(
    verb,
    type
) {

    return conjugateCompoundTense(
        verb,
        type,
        avoirPresent,
        etrePresent
    );
}


function conjugatePlusQueParfait(
    verb,
    type
) {

    return conjugateCompoundTense(
        verb,
        type,
        avoirImperfect,
        etreImperfect
    );
}


function conjugatePasseAnterieur(
    verb,
    type
) {

    return conjugateCompoundTense(
        verb,
        type,
        avoirPasseSimple,
        etrePasseSimple
    );
}


function conjugateFutureAnterior(
    verb,
    type
) {

    return conjugateCompoundTense(
        verb,
        type,
        avoirFuture,
        etreFuture
    );
}


// ============================================================
// CONDITIONNEL PASSÉ
// ============================================================

function conjugateConditionalPast(
    verb,
    type
) {

    return conjugateCompoundTense(
        verb,
        type,
        avoirConditional,
        etreConditional
    );
}


// ============================================================
// SUBJONCTIF PASSÉ
// ============================================================

function conjugateSubjunctivePast(
    verb,
    type
) {

    return conjugateCompoundTense(
        verb,
        type,
        avoirSubjunctive,
        etreSubjunctive
    );
}


// ============================================================
// IMPÉRATIF PRÉSENT
// ============================================================

function conjugateImperativePresent(
    verb,
    type
) {

    let forms;


    // --------------------------------------------------------
    // EXACT IRREGULAR
    // --------------------------------------------------------

    if (type === "irregular") {

        const present =
            irregularVerbs[verb].present;


        // ÊTRE
        if (verb === "être") {

            forms = [
                "sois",
                "soyons",
                "soyez"
            ];

        }


        // AVOIR
        else if (verb === "avoir") {

            forms = [
                "aie",
                "ayons",
                "ayez"
            ];

        }


        // ALLER
        else if (verb === "aller") {

            forms = [
                "va",
                "allons",
                "allez"
            ];

        }


        // OTHER SUPPORTED IRREGULARS
        else {

            forms = [
                present[1],
                present[3],
                present[4]
            ];

        }

    }


    // --------------------------------------------------------
    // PRENDRE FAMILY
    // --------------------------------------------------------

    else if (type === "prendre-family") {

        const prefix =
            getPrendrePrefix(verb);


        forms = [
            prefix + "prends",
            prefix + "prenons",
            prefix + "prenez"
        ];

    }


    // --------------------------------------------------------
    // VENIR FAMILY
    // --------------------------------------------------------

    else if (type === "venir-family") {

        const prefix =
            getVenirPrefix(verb);


        forms = [
            prefix + "viens",
            prefix + "venons",
            prefix + "venez"
        ];

    }


    // --------------------------------------------------------
    // REGULAR -ER
    // --------------------------------------------------------

    else if (type === "er") {

        const stem =
            verb.slice(0, -2);


        forms = [
            stem + "e",
            stem + "ons",
            stem + "ez"
        ];

    }


    // --------------------------------------------------------
    // REGULAR -IR
    // --------------------------------------------------------

    else if (type === "ir") {

        const stem =
            verb.slice(0, -2);


        forms = [
            stem + "is",
            stem + "issons",
            stem + "issez"
        ];

    }


    // --------------------------------------------------------
    // REGULAR -RE
    // --------------------------------------------------------

    else {

        const stem =
            verb.slice(0, -2);


        forms = [
            stem + "s",
            stem + "ons",
            stem + "ez"
        ];

    }


    return forms;
}


// ============================================================
// IMPÉRATIF PASSÉ
// ============================================================

function conjugateImperativePast(
    verb,
    type
) {

    const auxiliary =
        getAuxiliary(
            verb,
            type
        );


    const auxiliaryForms =
        auxiliary === "être"
            ? etreImperative
            : avoirImperative;


    const baseParticiple =
        getPastParticiple(
            verb,
            type
        );


    return auxiliaryForms.map(
        function(auxiliaryForm, index) {

            let participle =
                baseParticiple;


            // For the plural persons of verbs using être,
            // display optional gender agreement.

            if (auxiliary === "être") {

    // TU
    if (index === 0) {

        participle += "(e)";

    }

    // NOUS
    else if (index === 1) {

        participle += "(e)s";

    }

    // VOUS
    else if (index === 2) {

        participle += "(e)(s)";

    }

}


            return (
                auxiliaryForm +
                " " +
                participle
            );

        }
    );
}


// ============================================================
// NORMAL PRONOUN FORMATTING
// ============================================================

function formatPronoun(
    pronoun,
    conjugatedVerb
) {

    const firstLetter =
        conjugatedVerb
        .charAt(0)
        .toLowerCase();


    const vowels = [
        "a",
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
        "u",
        "ù",
        "û",
        "ü"
    ];


    if (
        pronoun === "je" &&
        vowels.includes(firstLetter)
    ) {

        return "j'";

    }


    return pronoun;
}


// ============================================================
// NORMAL TENSE HTML
// ============================================================

function createTenseHTML(
    conjugations
) {

    let html = "";


    for (
        const form
        of conjugations
    ) {

        const displayPronoun =
            formatPronoun(
                form.pronoun,
                form.verb
            );


        if (displayPronoun === "j'") {

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


    return html;
}


// ============================================================
// SUBJUNCTIVE PRONOUN
// ============================================================

function getSubjunctivePronoun(
    pronoun,
    conjugatedVerb
) {

    const firstLetter =
        conjugatedVerb
        .charAt(0)
        .toLowerCase();


    const vowels = [
        "a",
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
        "u",
        "ù",
        "û",
        "ü"
    ];


    if (pronoun === "je") {

        if (vowels.includes(firstLetter)) {

            return "que j'";

        }


        return "que je";

    }


    if (pronoun === "tu") {

        return "que tu";

    }


    if (pronoun === "il / elle") {

        return "qu'il / elle";

    }


    if (pronoun === "nous") {

        return "que nous";

    }


    if (pronoun === "vous") {

        return "que vous";

    }


    if (pronoun === "ils / elles") {

        return "qu'ils / elles";

    }


    return pronoun;
}


// ============================================================
// SUBJUNCTIVE HTML
// ============================================================

function createSubjunctiveHTML(
    conjugations
) {

    let html = "";


    for (
        const form
        of conjugations
    ) {

        const displayPronoun =
            getSubjunctivePronoun(
                form.pronoun,
                form.verb
            );


        if (displayPronoun === "que j'") {

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


    return html;
}


// ============================================================
// NORMAL TENSE CARD
// ============================================================

function createTenseCard(
    title,
    conjugations
) {

    return `

        <div class="tense-card">

            <h3>
                ${title}
            </h3>

            <div class="conjugation-list">

                ${createTenseHTML(conjugations)}

            </div>

        </div>

    `;
}


// ============================================================
// SUBJUNCTIVE CARD
// ============================================================

function createSubjunctiveCard(
    title,
    conjugations
) {

    return `

        <div class="tense-card">

            <h3>
                ${title}
            </h3>

            <div class="conjugation-list">

                ${createSubjunctiveHTML(
                    conjugations
                )}

            </div>

        </div>

    `;
}


// ============================================================
// IMPERATIVE CARD
// ============================================================

function createImperativeCard(
    title,
    forms
) {

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

function createMoodSection(
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
// VERB TYPE NAME
// ============================================================

function getVerbTypeName(type) {

    if (type === "irregular") {

        return "Irregular verb";

    }


    if (type === "prendre-family") {

        return "Prendre family";

    }


    if (type === "venir-family") {

        return "Venir family";

    }


    if (type === "er") {

        return "Regular -ER verb";

    }


    if (type === "ir") {

        return "Regular -IR verb";

    }


    if (type === "re") {

        return "Regular -RE verb";

    }


    return "Unknown verb";
}


// ============================================================
// MAIN
// ============================================================

function conjugateVerb() {

    const verb =
        verbInput.value
        .trim()
        .toLowerCase();


    results.innerHTML = "";


    // ========================================================
    // EMPTY INPUT
    // ========================================================

    if (verb === "") {

        results.innerHTML = `

            <div class="result-card">

                <p>
                    Please enter a French verb.
                </p>

            </div>

        `;

        return;
    }


    // ========================================================
    // DETECT TYPE
    // ========================================================

    const type =
        detectVerbType(verb);


    // ========================================================
    // UNKNOWN VERB
    // ========================================================

    if (type === "unknown") {

        results.innerHTML = `

            <div class="result-card">

                <h2>
                    ${verb}
                </h2>

                <p>
                    I don't recognize this
                    verb pattern yet.
                </p>

            </div>

        `;

        return;
    }


    // ========================================================
    // SIMPLE INDICATIVE
    // ========================================================

    let present;
    let imperfect;
    let passeSimple;


    // --------------------------------------------------------
    // EXACT IRREGULAR
    // --------------------------------------------------------

    if (type === "irregular") {

        present =
            conjugateIrregular(
                verb,
                "present"
            );


        imperfect =
            conjugateIrregular(
                verb,
                "imperfect"
            );


        passeSimple =
            conjugateIrregular(
                verb,
                "passeSimple"
            );

    }


    // --------------------------------------------------------
    // PRENDRE FAMILY
    // --------------------------------------------------------

    else if (
        type === "prendre-family"
    ) {

        present =
            conjugatePrendreFamily(
                verb,
                "present"
            );


        imperfect =
            conjugatePrendreFamily(
                verb,
                "imperfect"
            );


        passeSimple =
            conjugatePrendreFamily(
                verb,
                "passeSimple"
            );

    }


    // --------------------------------------------------------
    // VENIR FAMILY
    // --------------------------------------------------------

    else if (
        type === "venir-family"
    ) {

        present =
            conjugateVenirFamily(
                verb,
                "present"
            );


        imperfect =
            conjugateVenirFamily(
                verb,
                "imperfect"
            );


        passeSimple =
            conjugateVenirFamily(
                verb,
                "passeSimple"
            );

    }


    // --------------------------------------------------------
    // REGULAR
    // --------------------------------------------------------

    else {

        present =
            conjugatePresent(
                verb,
                type
            );


        imperfect =
            conjugateImperfect(
                verb,
                type
            );


        passeSimple =
            conjugateRegularPasseSimple(
                verb,
                type
            );

    }


    // ========================================================
    // OTHER INDICATIVE TENSES
    // ========================================================

    const future =
        conjugateFuture(
            verb,
            type
        );


    const passeCompose =
        conjugatePasseCompose(
            verb,
            type
        );


    const plusQueParfait =
        conjugatePlusQueParfait(
            verb,
            type
        );


    const passeAnterieur =
        conjugatePasseAnterieur(
            verb,
            type
        );


    const futureAnterior =
        conjugateFutureAnterior(
            verb,
            type
        );


    // ========================================================
    // CONDITIONNEL
    // ========================================================

    const conditionalPresent =
        conjugateConditionalPresent(
            verb,
            type
        );


    const conditionalPast =
        conjugateConditionalPast(
            verb,
            type
        );


    // ========================================================
    // SUBJONCTIF
    // ========================================================

    const subjunctivePresent =
        conjugateSubjunctivePresent(
            verb,
            type
        );


    const subjunctivePast =
        conjugateSubjunctivePast(
            verb,
            type
        );


    // ========================================================
    // IMPÉRATIF
    // ========================================================

    const imperativePresent =
        conjugateImperativePresent(
            verb,
            type
        );


    const imperativePast =
        conjugateImperativePast(
            verb,
            type
        );


    // ========================================================
    // INDICATIVE CARDS
    // ========================================================

    const indicativeCards = [

        createTenseCard(
            "Présent",
            present
        ),

        createTenseCard(
            "Imparfait",
            imperfect
        ),

        createTenseCard(
            "Passé simple",
            passeSimple
        ),

        createTenseCard(
            "Futur simple",
            future
        ),

        createTenseCard(
            "Passé composé",
            passeCompose
        ),

        createTenseCard(
            "Plus-que-parfait",
            plusQueParfait
        ),

        createTenseCard(
            "Passé antérieur",
            passeAnterieur
        ),

        createTenseCard(
            "Futur antérieur",
            futureAnterior
        )

    ];


    // ========================================================
    // CONDITIONNEL CARDS
    // ========================================================

    const conditionalCards = [

        createTenseCard(
            "Présent",
            conditionalPresent
        ),

        createTenseCard(
            "Passé",
            conditionalPast
        )

    ];


    // ========================================================
    // SUBJONCTIF CARDS
    // ========================================================

    const subjunctiveCards = [

        createSubjunctiveCard(
            "Présent",
            subjunctivePresent
        ),

        createSubjunctiveCard(
            "Passé",
            subjunctivePast
        )

    ];


    // ========================================================
    // IMPÉRATIF CARDS
    // ========================================================

    const imperativeCards = [

        createImperativeCard(
            "Présent",
            imperativePresent
        ),

        createImperativeCard(
            "Passé",
            imperativePast
        )

    ];


    // ========================================================
    // CREATE SECTIONS
    // ========================================================

    const indicativeSection =
        createMoodSection(
            "Indicatif",
            indicativeCards
        );


    const conditionalSection =
        createMoodSection(
            "Conditionnel",
            conditionalCards
        );


    const subjunctiveSection =
        createMoodSection(
            "Subjonctif",
            subjunctiveCards
        );


    const imperativeSection =
        createMoodSection(
            "Impératif",
            imperativeCards
        );


    // ========================================================
    // DISPLAY
    // ========================================================

    results.innerHTML = `

        <div class="result-card">


            <div class="verb-header">

                <h2>
                    ${verb}
                </h2>


                <span class="verb-type">

                    ${getVerbTypeName(type)}

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
// CONJUGATE BUTTON
// ============================================================

conjugateButton.addEventListener(
    "click",
    conjugateVerb
);


// ============================================================
// ENTER KEY
// ============================================================

verbInput.addEventListener(
    "keydown",

    function(event) {

        if (event.key === "Enter") {

            conjugateVerb();

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
                    button.textContent;

                conjugateVerb();

            }

        );

    }

);