// ============================================================
// FRENCH VERB CONJUGATOR
// VERSION 13
//
// FILE: verbData.js
//
// PURPOSE:
// Stores shared conjugation data:
// - pronouns
// - regular endings
// - auxiliary conjugations
// - core irregular verbs
//
// Verb-family rules will live in families.js.
// ============================================================


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
// IMPERATIVE PERSONS
//
// These are mainly useful internally.
// The imperative renderer will NOT display these pronouns.
// ============================================================

const imperativePersons = [
    "tu",
    "nous",
    "vous"
];


// ============================================================
// REGULAR -ER PRESENT ENDINGS
//
// parler:
// parle
// parles
// parle
// parlons
// parlez
// parlent
// ============================================================

const erPresentEndings = [
    "e",
    "es",
    "e",
    "ons",
    "ez",
    "ent"
];


// ============================================================
// REGULAR -IR PRESENT ENDINGS
//
// finir:
// finis
// finis
// finit
// finissons
// finissez
// finissent
// ============================================================

const irPresentEndings = [
    "is",
    "is",
    "it",
    "issons",
    "issez",
    "issent"
];


// ============================================================
// BASIC REGULAR -RE PRESENT ENDINGS
//
// vendre:
// vends
// vends
// vend
// vendons
// vendez
// vendent
// ============================================================

const rePresentEndings = [
    "s",
    "s",
    "",
    "ons",
    "ez",
    "ent"
];


// ============================================================
// IMPARFAIT ENDINGS
// ============================================================

const imperfectEndings = [
    "ais",
    "ais",
    "ait",
    "ions",
    "iez",
    "aient"
];


// ============================================================
// FUTUR SIMPLE ENDINGS
// ============================================================

const futureEndings = [
    "ai",
    "as",
    "a",
    "ons",
    "ez",
    "ont"
];


// ============================================================
// CONDITIONNEL PRÉSENT ENDINGS
// ============================================================

const conditionalEndings = [
    "ais",
    "ais",
    "ait",
    "ions",
    "iez",
    "aient"
];


// ============================================================
// PASSÉ SIMPLE — REGULAR -ER
// ============================================================

const erPasseSimpleEndings = [
    "ai",
    "as",
    "a",
    "âmes",
    "âtes",
    "èrent"
];


// ============================================================
// PASSÉ SIMPLE — REGULAR -IR / -RE
// ============================================================

const irRePasseSimpleEndings = [
    "is",
    "is",
    "it",
    "îmes",
    "îtes",
    "irent"
];


// ============================================================
// REGULAR SUBJUNCTIVE ENDINGS
// ============================================================

const erSubjunctiveEndings = [
    "e",
    "es",
    "e",
    "ions",
    "iez",
    "ent"
];


const irSubjunctiveEndings = [
    "isse",
    "isses",
    "isse",
    "issions",
    "issiez",
    "issent"
];


const reSubjunctiveEndings = [
    "e",
    "es",
    "e",
    "ions",
    "iez",
    "ent"
];


// ============================================================
// AVOIR — PRÉSENT
// ============================================================

const avoirPresent = [
    "ai",
    "as",
    "a",
    "avons",
    "avez",
    "ont"
];


// ============================================================
// ÊTRE — PRÉSENT
// ============================================================

const etrePresent = [
    "suis",
    "es",
    "est",
    "sommes",
    "êtes",
    "sont"
];


// ============================================================
// AVOIR — IMPARFAIT
// ============================================================

const avoirImperfect = [
    "avais",
    "avais",
    "avait",
    "avions",
    "aviez",
    "avaient"
];


// ============================================================
// ÊTRE — IMPARFAIT
// ============================================================

const etreImperfect = [
    "étais",
    "étais",
    "était",
    "étions",
    "étiez",
    "étaient"
];


// ============================================================
// AVOIR — FUTUR SIMPLE
// ============================================================

const avoirFuture = [
    "aurai",
    "auras",
    "aura",
    "aurons",
    "aurez",
    "auront"
];


// ============================================================
// ÊTRE — FUTUR SIMPLE
// ============================================================

const etreFuture = [
    "serai",
    "seras",
    "sera",
    "serons",
    "serez",
    "seront"
];


// ============================================================
// AVOIR — PASSÉ SIMPLE
// ============================================================

const avoirPasseSimple = [
    "eus",
    "eus",
    "eut",
    "eûmes",
    "eûtes",
    "eurent"
];


// ============================================================
// ÊTRE — PASSÉ SIMPLE
// ============================================================

const etrePasseSimple = [
    "fus",
    "fus",
    "fut",
    "fûmes",
    "fûtes",
    "furent"
];


// ============================================================
// AVOIR — CONDITIONNEL PRÉSENT
// ============================================================

const avoirConditional = [
    "aurais",
    "aurais",
    "aurait",
    "aurions",
    "auriez",
    "auraient"
];


// ============================================================
// ÊTRE — CONDITIONNEL PRÉSENT
// ============================================================

const etreConditional = [
    "serais",
    "serais",
    "serait",
    "serions",
    "seriez",
    "seraient"
];


// ============================================================
// AVOIR — SUBJONCTIF PRÉSENT
// ============================================================

const avoirSubjunctive = [
    "aie",
    "aies",
    "ait",
    "ayons",
    "ayez",
    "aient"
];


// ============================================================
// ÊTRE — SUBJONCTIF PRÉSENT
// ============================================================

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
// CORE IRREGULAR VERBS
//
// These are verbs that are useful enough and irregular enough
// that keeping their principal forms explicitly is cleaner than
// forcing them into a family.
//
// Families such as:
// prendre
// venir
// tenir
// mettre
// écrire
//
// will be handled separately in families.js.
// ============================================================

const irregularVerbs = {

    // ========================================================
    // ÊTRE
    // ========================================================

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

        imperative: [
            "sois",
            "soyons",
            "soyez"
        ],

        pastParticiple: "été",

        auxiliary: "avoir"
    },


    // ========================================================
    // AVOIR
    // ========================================================

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

        imperative: [
            "aie",
            "ayons",
            "ayez"
        ],

        pastParticiple: "eu",

        auxiliary: "avoir"
    },


    // ========================================================
    // ALLER
    // ========================================================

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

        imperative: [
            "va",
            "allons",
            "allez"
        ],

        pastParticiple: "allé",

        auxiliary: "être"
    },


    // ========================================================
    // FAIRE
    // ========================================================

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

        imperative: [
            "fais",
            "faisons",
            "faites"
        ],

        pastParticiple: "fait",

        auxiliary: "avoir"
    },


    // ========================================================
    // POUVOIR
    //
    // Modern French normally does not use an imperative for
    // pouvoir, so we explicitly mark it as unavailable.
    // ========================================================

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

        imperative: null,

        pastParticiple: "pu",

        auxiliary: "avoir"
    },


    // ========================================================
    // VOULOIR
    // ========================================================

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

        imperative: [
            "veuille",
            "veuillons",
            "veuillez"
        ],

        pastParticiple: "voulu",

        auxiliary: "avoir"
    },


    // ========================================================
    // DEVOIR
    // ========================================================

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

        imperative: [
            "dois",
            "devons",
            "devez"
        ],

        pastParticiple: "dû",

        auxiliary: "avoir"
    },


    // ========================================================
    // SAVOIR
    // ========================================================

    "savoir": {

        present: [
            "sais",
            "sais",
            "sait",
            "savons",
            "savez",
            "savent"
        ],

        imperfect: [
            "savais",
            "savais",
            "savait",
            "savions",
            "saviez",
            "savaient"
        ],

        futureStem: "saur",

        passeSimple: [
            "sus",
            "sus",
            "sut",
            "sûmes",
            "sûtes",
            "surent"
        ],

        subjunctive: [
            "sache",
            "saches",
            "sache",
            "sachions",
            "sachiez",
            "sachent"
        ],

        imperative: [
            "sache",
            "sachons",
            "sachez"
        ],

        pastParticiple: "su",

        auxiliary: "avoir"
    },


    // ========================================================
    // BOIRE
    // ========================================================

    "boire": {

        present: [
            "bois",
            "bois",
            "boit",
            "buvons",
            "buvez",
            "boivent"
        ],

        imperfect: [
            "buvais",
            "buvais",
            "buvait",
            "buvions",
            "buviez",
            "buvaient"
        ],

        futureStem: "boir",

        passeSimple: [
            "bus",
            "bus",
            "but",
            "bûmes",
            "bûtes",
            "burent"
        ],

        subjunctive: [
            "boive",
            "boives",
            "boive",
            "buvions",
            "buviez",
            "boivent"
        ],

        imperative: [
            "bois",
            "buvons",
            "buvez"
        ],

        pastParticiple: "bu",

        auxiliary: "avoir"
    },


    // ========================================================
    // CROIRE
    // ========================================================

    "croire": {

        present: [
            "crois",
            "crois",
            "croit",
            "croyons",
            "croyez",
            "croient"
        ],

        imperfect: [
            "croyais",
            "croyais",
            "croyait",
            "croyions",
            "croyiez",
            "croyaient"
        ],

        futureStem: "croir",

        passeSimple: [
            "crus",
            "crus",
            "crut",
            "crûmes",
            "crûtes",
            "crurent"
        ],

        subjunctive: [
            "croie",
            "croies",
            "croie",
            "croyions",
            "croyiez",
            "croient"
        ],

        imperative: [
            "crois",
            "croyons",
            "croyez"
        ],

        pastParticiple: "cru",

        auxiliary: "avoir"
    }

};


// ============================================================
// END OF verbData.js
// ============================================================