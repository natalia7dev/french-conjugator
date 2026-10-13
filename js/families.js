// ============================================================
// FRENCH VERB CONJUGATOR
// VERSION 13
//
// FILE: families.js
//
// PURPOSE:
// Stores reusable irregular verb-family patterns.
//
// Families can use:
//
// 1. PREFIX MODE
//    comprendre = com + prendre pattern
//
// 2. CUSTOM GENERATOR MODE
//    inscrire, prescrire, transcrire, etc.
//    These need their own stem-building rules.
// ============================================================


// ============================================================
// VERB FAMILIES
// ============================================================

const verbFamilies = {


    // ========================================================
    // PRENDRE FAMILY
    // ========================================================

    prendre: {

        label: "Prendre family",

        base: "prendre",

        verbs: [
            "prendre",
            "apprendre",
            "comprendre",
            "reprendre",
            "surprendre",
            "entreprendre"
        ],

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

        imperative: [
            "prends",
            "prenons",
            "prenez"
        ],

        pastParticiple: "pris",

        auxiliary: "avoir"
    },


    // ========================================================
    // VENIR FAMILY — ÊTRE
    // ========================================================

    venir: {

        label: "Venir family",

        base: "venir",

        verbs: [
            "venir",
            "devenir",
            "revenir",
            "parvenir",
            "intervenir"
        ],

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

        imperative: [
            "viens",
            "venons",
            "venez"
        ],

        pastParticiple: "venu",

        auxiliary: "être"
    },


    // ========================================================
    // VENIR FAMILY — AVOIR
    // ========================================================

    venirAvoir: {

        label: "Venir family",

        base: "venir",

        verbs: [
            "prévenir",
            "convenir"
        ],

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

        imperative: [
            "viens",
            "venons",
            "venez"
        ],

        pastParticiple: "venu",

        auxiliary: "avoir"
    },


    // ========================================================
    // TENIR FAMILY
    // ========================================================

    tenir: {

        label: "Tenir family",

        base: "tenir",

        verbs: [
            "tenir",
            "retenir",
            "obtenir",
            "maintenir",
            "soutenir",
            "appartenir",
            "contenir",
            "détenir",
            "entretenir"
        ],

        present: [
            "tiens",
            "tiens",
            "tient",
            "tenons",
            "tenez",
            "tiennent"
        ],

        imperfect: [
            "tenais",
            "tenais",
            "tenait",
            "tenions",
            "teniez",
            "tenaient"
        ],

        futureStem: "tiendr",

        passeSimple: [
            "tins",
            "tins",
            "tint",
            "tînmes",
            "tîntes",
            "tinrent"
        ],

        subjunctive: [
            "tienne",
            "tiennes",
            "tienne",
            "tenions",
            "teniez",
            "tiennent"
        ],

        imperative: [
            "tiens",
            "tenons",
            "tenez"
        ],

        pastParticiple: "tenu",

        auxiliary: "avoir"
    },


    // ========================================================
    // METTRE FAMILY
    // ========================================================

    mettre: {

        label: "Mettre family",

        base: "mettre",

        verbs: [
            "mettre",
            "permettre",
            "remettre",
            "promettre",
            "admettre",
            "commettre",
            "transmettre",
            "soumettre",
            "omettre",
            "compromettre"
        ],

        present: [
            "mets",
            "mets",
            "met",
            "mettons",
            "mettez",
            "mettent"
        ],

        imperfect: [
            "mettais",
            "mettais",
            "mettait",
            "mettions",
            "mettiez",
            "mettaient"
        ],

        futureStem: "mettr",

        passeSimple: [
            "mis",
            "mis",
            "mit",
            "mîmes",
            "mîtes",
            "mirent"
        ],

        subjunctive: [
            "mette",
            "mettes",
            "mette",
            "mettions",
            "mettiez",
            "mettent"
        ],

        imperative: [
            "mets",
            "mettons",
            "mettez"
        ],

        pastParticiple: "mis",

        auxiliary: "avoir"
    },


    // ========================================================
    // -CRIRE FAMILY
    //
    // This family uses CUSTOM GENERATORS.
    //
    // écrire:
    // écris
    // écrivons
    // écrit
    //
    // inscrire:
    // inscris
    // inscrivons
    // inscrit
    //
    // prescrire:
    // prescris
    // prescrivons
    // prescrit
    //
    // The common part is "crire", NOT "écrire".
    // ========================================================

    crire: {

        label: "-crire family",

        custom: true,

        verbs: [
            "écrire",
            "réécrire",
            "décrire",
            "inscrire",
            "prescrire",
            "proscrire",
            "transcrire",
            "souscrire"
        ],

        auxiliary: "avoir",


        getRoot: function(verb) {

    return verb.substring(
        0,
        verb.length - "crire".length
    );

},


        getForms: function(
            verb,
            tense
        ) {

            const root =
                this.getRoot(verb);


            // -----------------------------------------------
            // PRÉSENT
            // -----------------------------------------------

            if (tense === "present") {

                return [
                    root + "cris",
                    root + "cris",
                    root + "crit",
                    root + "crivons",
                    root + "crivez",
                    root + "crivent"
                ];

            }


            // -----------------------------------------------
            // IMPARFAIT
            // -----------------------------------------------

            if (tense === "imperfect") {

                return [
                    root + "crivais",
                    root + "crivais",
                    root + "crivait",
                    root + "crivions",
                    root + "criviez",
                    root + "crivaient"
                ];

            }


            // -----------------------------------------------
            // PASSÉ SIMPLE
            // -----------------------------------------------

            if (tense === "passeSimple") {

                return [
                    root + "crivis",
                    root + "crivis",
                    root + "crivit",
                    root + "crivîmes",
                    root + "crivîtes",
                    root + "crivirent"
                ];

            }


            // -----------------------------------------------
            // SUBJONCTIF PRÉSENT
            // -----------------------------------------------

            if (tense === "subjunctive") {

                return [
                    root + "crive",
                    root + "crives",
                    root + "crive",
                    root + "crivions",
                    root + "criviez",
                    root + "crivent"
                ];

            }


            // -----------------------------------------------
            // IMPÉRATIF
            // -----------------------------------------------

            if (tense === "imperative") {

                return [
                    root + "cris",
                    root + "crivons",
                    root + "crivez"
                ];

            }


            return null;
        },


        getFutureStem: function(verb) {

            const root =
                this.getRoot(verb);


            return root + "crir";
        },


        getPastParticiple:
            function(verb) {

                const root =
                    this.getRoot(verb);


                return root + "crit";
            }

    },


    // ========================================================
    // LIRE FAMILY
    // ========================================================

    lire: {

        label: "Lire family",

        base: "lire",

        verbs: [
            "lire",
            "relire"
        ],

        present: [
            "lis",
            "lis",
            "lit",
            "lisons",
            "lisez",
            "lisent"
        ],

        imperfect: [
            "lisais",
            "lisais",
            "lisait",
            "lisions",
            "lisiez",
            "lisaient"
        ],

        futureStem: "lir",

        passeSimple: [
            "lus",
            "lus",
            "lut",
            "lûmes",
            "lûtes",
            "lurent"
        ],

        subjunctive: [
            "lise",
            "lises",
            "lise",
            "lisions",
            "lisiez",
            "lisent"
        ],

        imperative: [
            "lis",
            "lisons",
            "lisez"
        ],

        pastParticiple: "lu",

        auxiliary: "avoir"
    },


    // ========================================================
    // PARTIR FAMILY
    // ========================================================

    partir: {

        label: "Partir family",

        base: "partir",

        verbs: [
            "partir",
            "repartir"
        ],

        present: [
            "pars",
            "pars",
            "part",
            "partons",
            "partez",
            "partent"
        ],

        imperfect: [
            "partais",
            "partais",
            "partait",
            "partions",
            "partiez",
            "partaient"
        ],

        futureStem: "partir",

        passeSimple: [
            "partis",
            "partis",
            "partit",
            "partîmes",
            "partîtes",
            "partirent"
        ],

        subjunctive: [
            "parte",
            "partes",
            "parte",
            "partions",
            "partiez",
            "partent"
        ],

        imperative: [
            "pars",
            "partons",
            "partez"
        ],

        pastParticiple: "parti",

        auxiliary: "être"
    },


    // ========================================================
    // SORTIR FAMILY
    //
    // Default here is the intransitive use with être:
    //
    // je suis sorti
    //
    // French can also use avoir when sortir is transitive:
    //
    // j'ai sorti le livre
    // ========================================================

    sortir: {

        label: "Sortir family",

        base: "sortir",

        verbs: [
            "sortir",
            "ressortir"
        ],

        present: [
            "sors",
            "sors",
            "sort",
            "sortons",
            "sortez",
            "sortent"
        ],

        imperfect: [
            "sortais",
            "sortais",
            "sortait",
            "sortions",
            "sortiez",
            "sortaient"
        ],

        futureStem: "sortir",

        passeSimple: [
            "sortis",
            "sortis",
            "sortit",
            "sortîmes",
            "sortîtes",
            "sortirent"
        ],

        subjunctive: [
            "sorte",
            "sortes",
            "sorte",
            "sortions",
            "sortiez",
            "sortent"
        ],

        imperative: [
            "sors",
            "sortons",
            "sortez"
        ],

        pastParticiple: "sorti",

        auxiliary: "être"
    },


    // ========================================================
    // DORMIR FAMILY
    // ========================================================

    dormir: {

        label: "Dormir family",

        base: "dormir",

        verbs: [
            "dormir",
            "rendormir"
        ],

        present: [
            "dors",
            "dors",
            "dort",
            "dormons",
            "dormez",
            "dorment"
        ],

        imperfect: [
            "dormais",
            "dormais",
            "dormait",
            "dormions",
            "dormiez",
            "dormaient"
        ],

        futureStem: "dormir",

        passeSimple: [
            "dormis",
            "dormis",
            "dormit",
            "dormîmes",
            "dormîtes",
            "dormirent"
        ],

        subjunctive: [
            "dorme",
            "dormes",
            "dorme",
            "dormions",
            "dormiez",
            "dorment"
        ],

        imperative: [
            "dors",
            "dormons",
            "dormez"
        ],

        pastParticiple: "dormi",

        auxiliary: "avoir"
    },


    // ========================================================
    // SERVIR FAMILY
    // ========================================================

    servir: {

        label: "Servir family",

        base: "servir",

        verbs: [
            "servir",
            "desservir",
            "resservir"
        ],

        present: [
            "sers",
            "sers",
            "sert",
            "servons",
            "servez",
            "servent"
        ],

        imperfect: [
            "servais",
            "servais",
            "servait",
            "servions",
            "serviez",
            "servaient"
        ],

        futureStem: "servir",

        passeSimple: [
            "servis",
            "servis",
            "servit",
            "servîmes",
            "servîtes",
            "servirent"
        ],

        subjunctive: [
            "serve",
            "serves",
            "serve",
            "servions",
            "serviez",
            "servent"
        ],

        imperative: [
            "sers",
            "servons",
            "servez"
        ],

        pastParticiple: "servi",

        auxiliary: "avoir"
    },


    // ========================================================
    // COURIR FAMILY
    // ========================================================

    courir: {

        label: "Courir family",

        base: "courir",

        verbs: [
            "courir",
            "accourir",
            "concourir",
            "parcourir",
            "recourir",
            "secourir"
        ],

        present: [
            "cours",
            "cours",
            "court",
            "courons",
            "courez",
            "courent"
        ],

        imperfect: [
            "courais",
            "courais",
            "courait",
            "courions",
            "couriez",
            "couraient"
        ],

        futureStem: "courr",

        passeSimple: [
            "courus",
            "courus",
            "courut",
            "courûmes",
            "courûtes",
            "coururent"
        ],

        subjunctive: [
            "coure",
            "coures",
            "coure",
            "courions",
            "couriez",
            "courent"
        ],

        imperative: [
            "cours",
            "courons",
            "courez"
        ],

        pastParticiple: "couru",

        auxiliary: "avoir"
    },


    // ========================================================
    // OUVRIR / COUVRIR FAMILY
    // ========================================================

    ouvrir: {

        label: "Ouvrir family",

        custom: true,

        verbs: [
            "ouvrir",
            "rouvrir",
            "couvrir",
            "découvrir",
            "recouvrir"
        ],

        auxiliary: "avoir",


        getStem: function(verb) {

            return verb.slice(0, -2);

        },


        getForms: function(
            verb,
            tense
        ) {

            const stem =
                this.getStem(verb);


            if (tense === "present") {

                return [
                    stem + "e",
                    stem + "es",
                    stem + "e",
                    stem + "ons",
                    stem + "ez",
                    stem + "ent"
                ];

            }


            if (tense === "imperfect") {

                return [
                    stem + "ais",
                    stem + "ais",
                    stem + "ait",
                    stem + "ions",
                    stem + "iez",
                    stem + "aient"
                ];

            }


            if (tense === "passeSimple") {

                return [
                    stem + "is",
                    stem + "is",
                    stem + "it",
                    stem + "îmes",
                    stem + "îtes",
                    stem + "irent"
                ];

            }


            if (tense === "subjunctive") {

                return [
                    stem + "e",
                    stem + "es",
                    stem + "e",
                    stem + "ions",
                    stem + "iez",
                    stem + "ent"
                ];

            }


            if (tense === "imperative") {

                return [
                    stem + "e",
                    stem + "ons",
                    stem + "ez"
                ];

            }


            return null;
        },


        getFutureStem: function(verb) {

            return verb;
        },


        getPastParticiple:
            function(verb) {

                const participles = {

                    "ouvrir":
                        "ouvert",

                    "rouvrir":
                        "rouvert",

                    "couvrir":
                        "couvert",

                    "découvrir":
                        "découvert",

                    "recouvrir":
                        "recouvert"

                };


                return participles[verb];
            }

    },


    // ========================================================
    // OFFRIR / SOUFFRIR FAMILY
    // ========================================================

    offrir: {

        label: "Offrir family",

        custom: true,

        verbs: [
            "offrir",
            "souffrir"
        ],

        auxiliary: "avoir",


        getStem: function(verb) {

            return verb.slice(0, -2);

        },


        getForms: function(
            verb,
            tense
        ) {

            const stem =
                this.getStem(verb);


            if (tense === "present") {

                return [
                    stem + "e",
                    stem + "es",
                    stem + "e",
                    stem + "ons",
                    stem + "ez",
                    stem + "ent"
                ];

            }


            if (tense === "imperfect") {

                return [
                    stem + "ais",
                    stem + "ais",
                    stem + "ait",
                    stem + "ions",
                    stem + "iez",
                    stem + "aient"
                ];

            }


            if (tense === "passeSimple") {

                return [
                    stem + "is",
                    stem + "is",
                    stem + "it",
                    stem + "îmes",
                    stem + "îtes",
                    stem + "irent"
                ];

            }


            if (tense === "subjunctive") {

                return [
                    stem + "e",
                    stem + "es",
                    stem + "e",
                    stem + "ions",
                    stem + "iez",
                    stem + "ent"
                ];

            }


            if (tense === "imperative") {

                return [
                    stem + "e",
                    stem + "ons",
                    stem + "ez"
                ];

            }


            return null;
        },


        getFutureStem: function(verb) {

            return verb;
        },


        getPastParticiple:
            function(verb) {

                const participles = {

                    "offrir":
                        "offert",

                    "souffrir":
                        "souffert"

                };


                return participles[verb];
            }

    },

        // ========================================================
    // RECEVOIR / -CEVOIR FAMILY
    //
    // Examples:
    // recevoir   -> reçois, recevons, recevrons, reçu
    // apercevoir -> aperçois, apercevons, apercevrons, aperçu
    // concevoir  -> conçois, concevons, concevrons, conçu
    // décevoir   -> déçois, décevons, décevrons, déçu
    // percevoir  -> perçois, percevons, percevrons, perçu
    // ========================================================

    cevoir: {

        label: "-cevoir family",

        custom: true,

        verbs: [
            "recevoir",
            "apercevoir",
            "concevoir",
            "décevoir",
            "percevoir"
        ],

        auxiliary: "avoir",

        getRoot: function(verb) {

            return verb.substring(
                0,
                verb.length - "cevoir".length
            );

        },

        getForms: function(
            verb,
            tense
        ) {

            const root =
                this.getRoot(verb);


            // -----------------------------------------------
            // PRÉSENT
            // -----------------------------------------------

            if (tense === "present") {

                return [
                    root + "çois",
                    root + "çois",
                    root + "çoit",
                    root + "cevons",
                    root + "cevez",
                    root + "çoivent"
                ];

            }


            // -----------------------------------------------
            // IMPARFAIT
            // -----------------------------------------------

            if (tense === "imperfect") {

                return [
                    root + "cevais",
                    root + "cevais",
                    root + "cevait",
                    root + "cevions",
                    root + "ceviez",
                    root + "cevaient"
                ];

            }


            // -----------------------------------------------
            // PASSÉ SIMPLE
            // -----------------------------------------------

            if (tense === "passeSimple") {

                return [
                    root + "çus",
                    root + "çus",
                    root + "çut",
                    root + "çûmes",
                    root + "çûtes",
                    root + "çurent"
                ];

            }


            // -----------------------------------------------
            // SUBJONCTIF PRÉSENT
            // -----------------------------------------------

            if (tense === "subjunctive") {

                return [
                    root + "çoive",
                    root + "çoives",
                    root + "çoive",
                    root + "cevions",
                    root + "ceviez",
                    root + "çoivent"
                ];

            }


            // -----------------------------------------------
            // IMPÉRATIF
            // -----------------------------------------------

            if (tense === "imperative") {

                return [
                    root + "çois",
                    root + "cevons",
                    root + "cevez"
                ];

            }


            return null;

        },

        getFutureStem: function(verb) {

            const root =
                this.getRoot(verb);

            return root + "cevr";

        },

        getPastParticiple: function(verb) {

            const root =
                this.getRoot(verb);

            return root + "çu";

        }

    },

        // ========================================================
    // VOIR FAMILY
    //
    // voir   -> vois, voyons, verrai, vu
    // revoir -> revois, revoyons, reverrai, revu
    //
    // NOTE:
    // prévoir is NOT included because it has its own
    // future stem and past participle pattern.
    // ========================================================

    voir: {

        label: "Voir family",

        base: "voir",

        verbs: [
            "voir",
            "revoir"
        ],

        present: [
            "vois",
            "vois",
            "voit",
            "voyons",
            "voyez",
            "voient"
        ],

        imperfect: [
            "voyais",
            "voyais",
            "voyait",
            "voyions",
            "voyiez",
            "voyaient"
        ],

        futureStem: "verr",

        passeSimple: [
            "vis",
            "vis",
            "vit",
            "vîmes",
            "vîtes",
            "virent"
        ],

        subjunctive: [
            "voie",
            "voies",
            "voie",
            "voyions",
            "voyiez",
            "voient"
        ],

        imperative: [
            "vois",
            "voyons",
            "voyez"
        ],

        pastParticiple: "vu",

        auxiliary: "avoir"

    },


    // ========================================================
    // VIVRE FAMILY
    //
    // vivre    -> vis, vivons, vivrai, vécu
    // revivre  -> revis, revivons, revivrai, revécu
    // survivre -> survis, survivons, survivrai, survécu
    // ========================================================

    vivre: {

        label: "Vivre family",

        base: "vivre",

        verbs: [
            "vivre",
            "revivre",
            "survivre"
        ],

        present: [
            "vis",
            "vis",
            "vit",
            "vivons",
            "vivez",
            "vivent"
        ],

        imperfect: [
            "vivais",
            "vivais",
            "vivait",
            "vivions",
            "viviez",
            "vivaient"
        ],

        futureStem: "vivr",

        passeSimple: [
            "vécus",
            "vécus",
            "vécut",
            "vécûmes",
            "vécûtes",
            "vécurent"
        ],

        subjunctive: [
            "vive",
            "vives",
            "vive",
            "vivions",
            "viviez",
            "vivent"
        ],

        imperative: [
            "vis",
            "vivons",
            "vivez"
        ],

        pastParticiple: "vécu",

        auxiliary: "avoir"

    },

        // ========================================================
    // SUIVRE FAMILY
    //
    // suivre      -> suis, suivons, suivrai, suivi
    // poursuivre  -> poursuis, poursuivons, poursuivrai, poursuivi
    // ========================================================

    suivre: {

        label: "Suivre family",

        base: "suivre",

        verbs: [
            "suivre",
            "poursuivre"
        ],

        present: [
            "suis",
            "suis",
            "suit",
            "suivons",
            "suivez",
            "suivent"
        ],

        imperfect: [
            "suivais",
            "suivais",
            "suivait",
            "suivions",
            "suiviez",
            "suivaient"
        ],

        futureStem: "suivr",

        passeSimple: [
            "suivis",
            "suivis",
            "suivit",
            "suivîmes",
            "suivîtes",
            "suivirent"
        ],

        subjunctive: [
            "suive",
            "suives",
            "suive",
            "suivions",
            "suiviez",
            "suivent"
        ],

        imperative: [
            "suis",
            "suivons",
            "suivez"
        ],

        pastParticiple: "suivi",

        auxiliary: "avoir"

    },


    // ========================================================
    // RIRE FAMILY
    //
    // rire    -> ris, rions, rirai, ri
    // sourire -> souris, sourions, sourirai, souri
    // ========================================================

    rire: {

        label: "Rire family",

        base: "rire",

        verbs: [
            "rire",
            "sourire"
        ],

        present: [
            "ris",
            "ris",
            "rit",
            "rions",
            "riez",
            "rient"
        ],

        imperfect: [
            "riais",
            "riais",
            "riait",
            "riions",
            "riiez",
            "riaient"
        ],

        futureStem: "rir",

        passeSimple: [
            "ris",
            "ris",
            "rit",
            "rîmes",
            "rîtes",
            "rirent"
        ],

        subjunctive: [
            "rie",
            "ries",
            "rie",
            "riions",
            "riiez",
            "rient"
        ],

        imperative: [
            "ris",
            "rions",
            "riez"
        ],

        pastParticiple: "ri",

        auxiliary: "avoir"

    },

        // ========================================================
    // -UIRE FAMILY
    //
    // Examples:
    // conduire    -> conduis, conduisons, conduirai, conduit
    // produire    -> produis, produisons, produirai, produit
    // traduire    -> traduis, traduisons, traduirai, traduit
    // réduire     -> réduis, réduisons, réduirai, réduit
    // construire  -> construis, construisons, construirai, construit
    // détruire    -> détruis, détruisons, détruirai, détruit
    //
    // These verbs share the same general -uire pattern.
    // ========================================================

    uire: {

        label: "-uire family",

        custom: true,

        verbs: [
            "conduire",
            "reconduire",
            "produire",
            "reproduire",
            "traduire",
            "retraduire",
            "réduire",
            "déduire",
            "induire",
            "introduire",
            "réintroduire",
            "séduire",
            "construire",
            "reconstruire",
            "détruire",
            "instruire",
            "enduire"
        ],

        auxiliary: "avoir",

        getStem: function(verb) {

            // conduire -> condui
            // produire -> produi
            // construire -> construi

            return verb.slice(0, -2);

        },

        getForms: function(
            verb,
            tense
        ) {

            const stem =
                this.getStem(verb);


            // -----------------------------------------------
            // PRÉSENT
            // -----------------------------------------------

            if (tense === "present") {

                return [
                    stem + "s",
                    stem + "s",
                    stem + "t",
                    stem + "sons",
                    stem + "sez",
                    stem + "sent"
                ];

            }


            // -----------------------------------------------
            // IMPARFAIT
            // -----------------------------------------------

            if (tense === "imperfect") {

                return [
                    stem + "sais",
                    stem + "sais",
                    stem + "sait",
                    stem + "sions",
                    stem + "siez",
                    stem + "saient"
                ];

            }


            // -----------------------------------------------
            // PASSÉ SIMPLE
            // -----------------------------------------------

            if (tense === "passeSimple") {

                return [
                    stem + "sis",
                    stem + "sis",
                    stem + "sit",
                    stem + "sîmes",
                    stem + "sîtes",
                    stem + "sirent"
                ];

            }


            // -----------------------------------------------
            // SUBJONCTIF PRÉSENT
            // -----------------------------------------------

            if (tense === "subjunctive") {

                return [
                    stem + "se",
                    stem + "ses",
                    stem + "se",
                    stem + "sions",
                    stem + "siez",
                    stem + "sent"
                ];

            }


            // -----------------------------------------------
            // IMPÉRATIF
            // -----------------------------------------------

            if (tense === "imperative") {

                return [
                    stem + "s",
                    stem + "sons",
                    stem + "sez"
                ];

            }


            return null;

        },

        getFutureStem: function(verb) {

            // conduire -> conduir
            // produire -> produir

            return verb.slice(0, -1);

        },

        getPastParticiple: function(verb) {

            // condui + t = conduit
            // produi + t = produit
            // construi + t = construit

            const stem =
                this.getStem(verb);

            return stem + "t";

        }

    },

        // ========================================================
    // BATTRE FAMILY
    //
    // battre    -> bats, battons, battrai, battu
    // abattre   -> abats, abattons, abattrai, abattu
    // combattre -> combats, combattons, combattrai, combattu
    // débattre  -> débats, débattons, débattrai, débattu
    // ========================================================

    battre: {

        label: "Battre family",

        base: "battre",

        verbs: [
            "battre",
            "abattre",
            "combattre",
            "débattre",
            "rebattre"
        ],

        present: [
            "bats",
            "bats",
            "bat",
            "battons",
            "battez",
            "battent"
        ],

        imperfect: [
            "battais",
            "battais",
            "battait",
            "battions",
            "battiez",
            "battaient"
        ],

        futureStem: "battr",

        passeSimple: [
            "battis",
            "battis",
            "battit",
            "battîmes",
            "battîtes",
            "battirent"
        ],

        subjunctive: [
            "batte",
            "battes",
            "batte",
            "battions",
            "battiez",
            "battent"
        ],

        imperative: [
            "bats",
            "battons",
            "battez"
        ],

        pastParticiple: "battu",

        auxiliary: "avoir"

    },


    // ========================================================
    // ROMPRE FAMILY
    //
    // rompre      -> romps, rompons, romprai, rompu
    // interrompre -> interromps, interrompons,
    //                interromprai, interrompu
    // ========================================================

    rompre: {

        label: "Rompre family",

        base: "rompre",

        verbs: [
            "rompre",
            "corrompre",
            "interrompre"
        ],

        present: [
            "romps",
            "romps",
            "rompt",
            "rompons",
            "rompez",
            "rompent"
        ],

        imperfect: [
            "rompais",
            "rompais",
            "rompait",
            "rompions",
            "rompiez",
            "rompaient"
        ],

        futureStem: "rompr",

        passeSimple: [
            "rompis",
            "rompis",
            "rompit",
            "rompîmes",
            "rompîtes",
            "rompirent"
        ],

        subjunctive: [
            "rompe",
            "rompes",
            "rompe",
            "rompions",
            "rompiez",
            "rompent"
        ],

        imperative: [
            "romps",
            "rompons",
            "rompez"
        ],

        pastParticiple: "rompu",

        auxiliary: "avoir"

    },

        // ========================================================
    // CRAINDRE / PLAINDRE FAMILY
    //
    // craindre    -> crains, craignons, craindrai, craint
    // contraindre -> contrains, contraignons, contraindrai,
    //                contraint
    // plaindre    -> plains, plaignons, plaindrai, plaint
    // ========================================================

    craindre: {

        label: "Craindre family",

        custom: true,

        verbs: [
            "craindre",
            "contraindre",
            "restreindre",
            "astreindre",
            "plaindre"
        ],

        auxiliary: "avoir",

        getRoot: function(verb) {

            return verb.slice(0, -5);

        },

        getForms: function(verb, tense) {

            const root = this.getRoot(verb);

            if (tense === "present") {

                return [
                    root + "ins",
                    root + "ins",
                    root + "int",
                    root + "ignons",
                    root + "ignez",
                    root + "ignent"
                ];

            }

            if (tense === "imperfect") {

                return [
                    root + "ignais",
                    root + "ignais",
                    root + "ignait",
                    root + "ignions",
                    root + "igniez",
                    root + "ignaient"
                ];

            }

            if (tense === "passeSimple") {

                return [
                    root + "ignis",
                    root + "ignis",
                    root + "ignit",
                    root + "ignîmes",
                    root + "ignîtes",
                    root + "ignirent"
                ];

            }

            if (tense === "subjunctive") {

                return [
                    root + "igne",
                    root + "ignes",
                    root + "igne",
                    root + "ignions",
                    root + "igniez",
                    root + "ignent"
                ];

            }

            if (tense === "imperative") {

                return [
                    root + "ins",
                    root + "ignons",
                    root + "ignez"
                ];

            }

            return null;

        },

        getFutureStem: function(verb) {

            return verb.slice(0, -1);

        },

        getPastParticiple: function(verb) {

            const root = this.getRoot(verb);

            return root + "int";

        }

    },


    // ========================================================
    // PEINDRE / -EINDRE FAMILY
    //
    // peindre   -> peins, peignons, peindrai, peint
    // atteindre -> atteins, atteignons, atteindrai, atteint
    // éteindre  -> éteins, éteignons, éteindrai, éteint
    // ========================================================

    peindre: {

        label: "Peindre family",

        custom: true,

        verbs: [
            "peindre",
            "repeindre",
            "atteindre",
            "éteindre",
            "étreindre",
            "feindre",
            "ceindre",
            "enfreindre"
        ],

        auxiliary: "avoir",

        getRoot: function(verb) {

            return verb.slice(0, -5);

        },

        getForms: function(verb, tense) {

            const root = this.getRoot(verb);

            if (tense === "present") {

                return [
                    root + "ins",
                    root + "ins",
                    root + "int",
                    root + "ignons",
                    root + "ignez",
                    root + "ignent"
                ];

            }

            if (tense === "imperfect") {

                return [
                    root + "ignais",
                    root + "ignais",
                    root + "ignait",
                    root + "ignions",
                    root + "igniez",
                    root + "ignaient"
                ];

            }

            if (tense === "passeSimple") {

                return [
                    root + "ignis",
                    root + "ignis",
                    root + "ignit",
                    root + "ignîmes",
                    root + "ignîtes",
                    root + "ignirent"
                ];

            }

            if (tense === "subjunctive") {

                return [
                    root + "igne",
                    root + "ignes",
                    root + "igne",
                    root + "ignions",
                    root + "igniez",
                    root + "ignent"
                ];

            }

            if (tense === "imperative") {

                return [
                    root + "ins",
                    root + "ignons",
                    root + "ignez"
                ];

            }

            return null;

        },

        getFutureStem: function(verb) {

            return verb.slice(0, -1);

        },

        getPastParticiple: function(verb) {

            const root = this.getRoot(verb);

            return root + "int";

        }

    },


    // ========================================================
    // JOINDRE FAMILY
    //
    // joindre   -> joins, joignons, joindrai, joint
    // rejoindre -> rejoins, rejoignons, rejoindrai, rejoint
    // ========================================================

    joindre: {

        label: "Joindre family",

        custom: true,

        verbs: [
            "joindre",
            "rejoindre",
            "adjoindre",
            "conjoindre",
            "disjoindre"
        ],

        auxiliary: "avoir",

        getRoot: function(verb) {

            return verb.slice(0, -5);

        },

        getForms: function(verb, tense) {

            const root = this.getRoot(verb);

            if (tense === "present") {

                return [
                    root + "ins",
                    root + "ins",
                    root + "int",
                    root + "ignons",
                    root + "ignez",
                    root + "ignent"
                ];

            }

            if (tense === "imperfect") {

                return [
                    root + "ignais",
                    root + "ignais",
                    root + "ignait",
                    root + "ignions",
                    root + "igniez",
                    root + "ignaient"
                ];

            }

            if (tense === "passeSimple") {

                return [
                    root + "ignis",
                    root + "ignis",
                    root + "ignit",
                    root + "ignîmes",
                    root + "ignîtes",
                    root + "ignirent"
                ];

            }

            if (tense === "subjunctive") {

                return [
                    root + "igne",
                    root + "ignes",
                    root + "igne",
                    root + "ignions",
                    root + "igniez",
                    root + "ignent"
                ];

            }

            if (tense === "imperative") {

                return [
                    root + "ins",
                    root + "ignons",
                    root + "ignez"
                ];

            }

            return null;

        },

        getFutureStem: function(verb) {

            return verb.slice(0, -1);

        },

        getPastParticiple: function(verb) {

            const root = this.getRoot(verb);

            return root + "int";

        }

    },

        // ========================================================
    // MOURIR FAMILY
    //
    // mourir -> meurs, mourons, mourrai, mort
    //
    // Compound tenses use ÊTRE:
    // je suis mort
    // ========================================================

    mourir: {

        label: "Mourir family",

        base: "mourir",

        verbs: [
            "mourir"
        ],

        present: [
            "meurs",
            "meurs",
            "meurt",
            "mourons",
            "mourez",
            "meurent"
        ],

        imperfect: [
            "mourais",
            "mourais",
            "mourait",
            "mourions",
            "mouriez",
            "mouraient"
        ],

        futureStem: "mourr",

        passeSimple: [
            "mourus",
            "mourus",
            "mourut",
            "mourûmes",
            "mourûtes",
            "moururent"
        ],

        subjunctive: [
            "meure",
            "meures",
            "meure",
            "mourions",
            "mouriez",
            "meurent"
        ],

        imperative: [
            "meurs",
            "mourons",
            "mourez"
        ],

        pastParticiple: "mort",

        auxiliary: "être"

    },


    // ========================================================
    // FUIR FAMILY
    //
    // fuir   -> fuis, fuyons, fuirai, fui
    // s'enfuir is pronominal, so it is NOT included here yet.
    // ========================================================

    fuir: {

        label: "Fuir family",

        base: "fuir",

        verbs: [
            "fuir"
        ],

        present: [
            "fuis",
            "fuis",
            "fuit",
            "fuyons",
            "fuyez",
            "fuient"
        ],

        imperfect: [
            "fuyais",
            "fuyais",
            "fuyait",
            "fuyions",
            "fuyiez",
            "fuyaient"
        ],

        futureStem: "fuir",

        passeSimple: [
            "fuis",
            "fuis",
            "fuit",
            "fuîmes",
            "fuîtes",
            "fuirent"
        ],

        subjunctive: [
            "fuie",
            "fuies",
            "fuie",
            "fuyions",
            "fuyiez",
            "fuient"
        ],

        imperative: [
            "fuis",
            "fuyons",
            "fuyez"
        ],

        pastParticiple: "fui",

        auxiliary: "avoir"

    },

        // ========================================================
    // CUEILLIR FAMILY
    //
    // cueillir   -> cueille, cueillons, cueillerai, cueilli
    // accueillir -> accueille, accueillons, accueillerai, accueilli
    // recueillir -> recueille, recueillons, recueillerai, recueilli
    // ========================================================

    cueillir: {

        label: "Cueillir family",

        base: "cueillir",

        verbs: [
            "cueillir",
            "accueillir",
            "recueillir"
        ],

        present: [
            "cueille",
            "cueilles",
            "cueille",
            "cueillons",
            "cueillez",
            "cueillent"
        ],

        imperfect: [
            "cueillais",
            "cueillais",
            "cueillait",
            "cueillions",
            "cueilliez",
            "cueillaient"
        ],

        futureStem: "cueiller",

        passeSimple: [
            "cueillis",
            "cueillis",
            "cueillit",
            "cueillîmes",
            "cueillîtes",
            "cueillirent"
        ],

        subjunctive: [
            "cueille",
            "cueilles",
            "cueille",
            "cueillions",
            "cueilliez",
            "cueillent"
        ],

        imperative: [
            "cueille",
            "cueillons",
            "cueillez"
        ],

        pastParticiple: "cueilli",

        auxiliary: "avoir"

    },

    // ============================================================
    //          DIRE
    // ============================================================

        dire: {

        label: "Dire family",

        base: "dire",

        verbs: [
            "dire"
        ],

        present: [
            "dis",
            "dis",
            "dit",
            "disons",
            "dites",
            "disent"
        ],

        imperfect: [
            "disais",
            "disais",
            "disait",
            "disions",
            "disiez",
            "disaient"
        ],

        futureStem: "dir",

        passeSimple: [
            "dis",
            "dis",
            "dit",
            "dîmes",
            "dîtes",
            "dirent"
        ],

        subjunctive: [
            "dise",
            "dises",
            "dise",
            "disions",
            "disiez",
            "disent"
        ],

        imperative: [
            "dis",
            "disons",
            "dites"
        ],

        pastParticiple: "dit",

        auxiliary: "avoir"
    },

    // ============================================================
    // BOIRE
    // ============================================================

    boire: {

        label: "Boire family",

        base: "boire",

        verbs: [
            "boire"
        ],

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


    // ============================================================
    // CROIRE
    // ============================================================

    croire: {

        label: "Croire family",

        base: "croire",

        verbs: [
            "croire"
        ],

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
    },


    // ============================================================
    // SAVOIR
    // ============================================================

    savoir: {

        label: "Savoir family",

        base: "savoir",

        verbs: [
            "savoir"
        ],

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


    // ============================================================
    // PLAIRE
    // ============================================================

    plaire: {

        label: "Plaire family",

        base: "plaire",

        verbs: [
            "plaire"
        ],

        present: [
            "plais",
            "plais",
            "plaît",
            "plaisons",
            "plaisez",
            "plaisent"
        ],

        imperfect: [
            "plaisais",
            "plaisais",
            "plaisait",
            "plaisions",
            "plaisiez",
            "plaisaient"
        ],

        futureStem: "plair",

        passeSimple: [
            "plus",
            "plus",
            "plut",
            "plûmes",
            "plûtes",
            "plurent"
        ],

        subjunctive: [
            "plaise",
            "plaises",
            "plaise",
            "plaisions",
            "plaisiez",
            "plaisent"
        ],

        imperative: [
            "plais",
            "plaisons",
            "plaisez"
        ],

        pastParticiple: "plu",

        auxiliary: "avoir"
    },


    // ============================================================
    // VAINCRE
    // ============================================================

    vaincre: {

        label: "Vaincre family",

        base: "vaincre",

        verbs: [
            "vaincre"
        ],

        present: [
            "vaincs",
            "vaincs",
            "vainc",
            "vainquons",
            "vainquez",
            "vainquent"
        ],

        imperfect: [
            "vainquais",
            "vainquais",
            "vainquait",
            "vainquions",
            "vainquiez",
            "vainquaient"
        ],

        futureStem: "vaincr",

        passeSimple: [
            "vainquis",
            "vainquis",
            "vainquit",
            "vainquîmes",
            "vainquîtes",
            "vainquirent"
        ],

        subjunctive: [
            "vainque",
            "vainques",
            "vainque",
            "vainquions",
            "vainquiez",
            "vainquent"
        ],

        imperative: [
            "vaincs",
            "vainquons",
            "vainquez"
        ],

        pastParticiple: "vaincu",

        auxiliary: "avoir"
    }


};

// ============================================================
// FIND VERB FAMILY
// ============================================================

function findVerbFamily(verb) {

    for (
        const familyName
        in verbFamilies
    ) {

        const family =
            verbFamilies[familyName];


        if (
            family.verbs.includes(
                verb
            )
        ) {

            return {

                name:
                    familyName,

                data:
                    family

            };

        }

    }


    return null;
}


// ============================================================
// GET NORMAL PREFIX
//
// Used only by families that follow:
//
// prefix + base family
//
// Example:
//
// comprendre
//
// base = prendre
// prefix = com
// ============================================================

function getFamilyPrefix(
    verb,
    family
) {

    if (
        !family.base ||
        !verb.endsWith(
            family.base
        )
    ) {

        return "";

    }


    return verb.slice(
        0,
        verb.length -
        family.base.length
    );
}


// ============================================================
// GET FAMILY FORMS
// ============================================================

function getFamilyForms(
    verb,
    family,
    tense
) {

    // --------------------------------------------------------
    // CUSTOM FAMILY
    // --------------------------------------------------------

    if (
        family.custom &&
        typeof family.getForms
            === "function"
    ) {

        return family.getForms(
            verb,
            tense
        );

    }


    // --------------------------------------------------------
    // NORMAL PREFIX FAMILY
    // --------------------------------------------------------

    const prefix =
        getFamilyPrefix(
            verb,
            family
        );


    const baseForms =
        family[tense];


    if (!baseForms) {

        return null;

    }


    return baseForms.map(
        function(form) {

            return prefix + form;

        }
    );
}


// ============================================================
// GET FAMILY FUTURE STEM
// ============================================================

function getFamilyFutureStem(
    verb,
    family
) {

    // --------------------------------------------------------
    // CUSTOM FAMILY
    // --------------------------------------------------------

    if (
        family.custom &&
        typeof family.getFutureStem
            === "function"
    ) {

        return family.getFutureStem(
            verb
        );

    }


    // --------------------------------------------------------
    // NORMAL PREFIX FAMILY
    // --------------------------------------------------------

    const prefix =
        getFamilyPrefix(
            verb,
            family
        );


    return (
        prefix +
        family.futureStem
    );
}


// ============================================================
// GET FAMILY PAST PARTICIPLE
// ============================================================

function getFamilyPastParticiple(
    verb,
    family
) {

    // --------------------------------------------------------
    // CUSTOM FAMILY
    // --------------------------------------------------------

    if (
        family.custom &&
        typeof family.getPastParticiple
            === "function"
    ) {

        return (
            family.getPastParticiple(
                verb
            )
        );

    }


    // --------------------------------------------------------
    // NORMAL PREFIX FAMILY
    // --------------------------------------------------------

    const prefix =
        getFamilyPrefix(
            verb,
            family
        );


    return (
        prefix +
        family.pastParticiple
    );
}


// ============================================================
// GET FAMILY AUXILIARY
// ============================================================

function getFamilyAuxiliary(
    family
) {

    return family.auxiliary;
}


// ============================================================
// END OF families.js
// ============================================================