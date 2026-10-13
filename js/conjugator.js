// ============================================================
// FRENCH VERB CONJUGATOR
// VERSION 13
//
// FILE: conjugator.js
//
// PURPOSE:
// The conjugation engine.
//
// It uses:
// - verbData.js
// - families.js
//
// It generates:
// INDICATIF
//   Présent
//   Imparfait
//   Passé simple
//   Futur simple
//   Passé composé
//   Plus-que-parfait
//   Passé antérieur
//   Futur antérieur
//
// CONDITIONNEL
//   Présent
//   Passé
//
// SUBJONCTIF
//   Présent
//   Passé
//
// IMPÉRATIF
//   Présent
//   Passé
// ============================================================


// ============================================================
// MAKE STANDARD SIX-PERSON CONJUGATIONS
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
// CHECK EXACT IRREGULAR
// ============================================================

function isIrregularVerb(verb) {

    return Object.prototype.hasOwnProperty.call(
        irregularVerbs,
        verb
    );
}


// ============================================================
// REGULAR VERB DETECTION
//
// IMPORTANT:
// Families and exact irregulars are checked BEFORE these.
//
// This prevents:
// sortir
// dormir
// venir
// prendre
//
// from accidentally being treated as regular verbs.
// ============================================================

function detectRegularType(verb) {

    if (verb.endsWith("er")) {

        return "er";

    }


    if (verb.endsWith("ir")) {

        return "ir";

    }


    if (verb.endsWith("re")) {

        return "re";

    }


    return null;
}


// ============================================================
// ANALYZE VERB
//
// Returns information about how the verb should be handled.
// ============================================================

function analyzeVerb(verb) {

    // Exact irregular first

    if (isIrregularVerb(verb)) {

        return {
            type: "irregular",
            verb: verb,
            irregular: irregularVerbs[verb]
        };

    }


    // Then family

    const familyMatch =
        findVerbFamily(verb);


    if (familyMatch) {

        return {
            type: "family",
            verb: verb,
            familyName: familyMatch.name,
            family: familyMatch.data
        };

    }


    // Then regular pattern

    const regularType =
        detectRegularType(verb);


    if (regularType) {

        return {
            type: "regular",
            verb: verb,
            regularType: regularType
        };

    }


    return {
        type: "unknown",
        verb: verb
    };
}


// ============================================================
// PRESENT
// ============================================================

function conjugatePresentV13(
    verb,
    analysis
) {

    // --------------------------------------------------------
    // IRREGULAR
    // --------------------------------------------------------

    if (analysis.type === "irregular") {

        return makeConjugations(
            analysis.irregular.present
        );

    }


    // --------------------------------------------------------
    // FAMILY
    // --------------------------------------------------------

    if (analysis.type === "family") {

        return makeConjugations(
            getFamilyForms(
                verb,
                analysis.family,
                "present"
            )
        );

    }


    // --------------------------------------------------------
    // REGULAR
    // --------------------------------------------------------

    const type =
        analysis.regularType;


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
// IMPARFAIT
// ============================================================

function conjugateImperfectV13(
    verb,
    analysis
) {

    // --------------------------------------------------------
    // IRREGULAR
    // --------------------------------------------------------

    if (analysis.type === "irregular") {

        return makeConjugations(
            analysis.irregular.imperfect
        );

    }


    // --------------------------------------------------------
    // FAMILY
    // --------------------------------------------------------

    if (analysis.type === "family") {

        return makeConjugations(
            getFamilyForms(
                verb,
                analysis.family,
                "imperfect"
            )
        );

    }


    // --------------------------------------------------------
    // REGULAR
    // --------------------------------------------------------

    let stem =
        verb.slice(0, -2);


    if (
        analysis.regularType === "ir"
    ) {

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
// PASSÉ SIMPLE
// ============================================================

function conjugatePasseSimpleV13(
    verb,
    analysis
) {

    // --------------------------------------------------------
    // IRREGULAR
    // --------------------------------------------------------

    if (analysis.type === "irregular") {

        return makeConjugations(
            analysis.irregular.passeSimple
        );

    }


    // --------------------------------------------------------
    // FAMILY
    // --------------------------------------------------------

    if (analysis.type === "family") {

        return makeConjugations(
            getFamilyForms(
                verb,
                analysis.family,
                "passeSimple"
            )
        );

    }


    // --------------------------------------------------------
    // REGULAR
    // --------------------------------------------------------

    const stem =
        verb.slice(0, -2);


    const endings =
        analysis.regularType === "er"
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
// FUTURE STEM
// ============================================================

function getFutureStemV13(
    verb,
    analysis
) {

    // --------------------------------------------------------
    // IRREGULAR
    // --------------------------------------------------------

    if (analysis.type === "irregular") {

        return (
            analysis.irregular.futureStem
        );

    }


    // --------------------------------------------------------
    // FAMILY
    // --------------------------------------------------------

    if (analysis.type === "family") {

        return getFamilyFutureStem(
            verb,
            analysis.family
        );

    }


    // --------------------------------------------------------
    // REGULAR -ER / -IR
    // --------------------------------------------------------

    if (
        analysis.regularType === "er" ||
        analysis.regularType === "ir"
    ) {

        return verb;

    }


    // --------------------------------------------------------
    // REGULAR -RE
    //
    // vendre -> vendr
    // --------------------------------------------------------

    if (
        analysis.regularType === "re"
    ) {

        return verb.slice(0, -1);

    }


    return "";
}


// ============================================================
// FUTUR SIMPLE
// ============================================================

function conjugateFutureV13(
    verb,
    analysis
) {

    const stem =
        getFutureStemV13(
            verb,
            analysis
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

function conjugateConditionalPresentV13(
    verb,
    analysis
) {

    const stem =
        getFutureStemV13(
            verb,
            analysis
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
// SUBJONCTIF PRÉSENT
// ============================================================

function conjugateSubjunctivePresentV13(
    verb,
    analysis
) {

    // --------------------------------------------------------
    // IRREGULAR
    // --------------------------------------------------------

    if (analysis.type === "irregular") {

        return makeConjugations(
            analysis.irregular.subjunctive
        );

    }


    // --------------------------------------------------------
    // FAMILY
    // --------------------------------------------------------

    if (analysis.type === "family") {

        return makeConjugations(
            getFamilyForms(
                verb,
                analysis.family,
                "subjunctive"
            )
        );

    }


    // --------------------------------------------------------
    // REGULAR
    // --------------------------------------------------------

    const stem =
        verb.slice(0, -2);


    let endings;


    if (
        analysis.regularType === "er"
    ) {

        endings =
            erSubjunctiveEndings;

    }

    else if (
        analysis.regularType === "ir"
    ) {

        endings =
            irSubjunctiveEndings;

    }

    else {

        endings =
            reSubjunctiveEndings;

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
// PAST PARTICIPLE
// ============================================================

function getPastParticipleV13(
    verb,
    analysis
) {

    // --------------------------------------------------------
    // IRREGULAR
    // --------------------------------------------------------

    if (analysis.type === "irregular") {

        return (
            analysis.irregular
            .pastParticiple
        );

    }


    // --------------------------------------------------------
    // FAMILY
    // --------------------------------------------------------

    if (analysis.type === "family") {

        return getFamilyPastParticiple(
            verb,
            analysis.family
        );

    }


    // --------------------------------------------------------
    // REGULAR -ER
    // --------------------------------------------------------

    if (
        analysis.regularType === "er"
    ) {

        return (
            verb.slice(0, -2) +
            "é"
        );

    }


    // --------------------------------------------------------
    // REGULAR -IR
    // --------------------------------------------------------

    if (
        analysis.regularType === "ir"
    ) {

        return (
            verb.slice(0, -2) +
            "i"
        );

    }


    // --------------------------------------------------------
    // BASIC REGULAR -RE
    // --------------------------------------------------------

    if (
        analysis.regularType === "re"
    ) {

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

function getAuxiliaryV13(
    analysis
) {

    if (
        analysis.type === "irregular"
    ) {

        return (
            analysis.irregular.auxiliary
        );

    }


    if (
        analysis.type === "family"
    ) {

        return getFamilyAuxiliary(
            analysis.family
        );

    }


    // Most regular verbs default to avoir.
    // Later we can add an explicit list for regular verbs
    // that use être.

    return "avoir";
}


// ============================================================
// ÊTRE AGREEMENT
//
// index:
//
// 0 = je
// 1 = tu
// 2 = il / elle
// 3 = nous
// 4 = vous
// 5 = ils / elles
// ============================================================

function applyEtreAgreementV13(
    participle,
    index
) {

    if (index === 2) {

        return (
            participle +
            "(e)"
        );

    }


    if (index === 3) {

        return (
            participle +
            "(e)s"
        );

    }


    if (index === 4) {

        return (
            participle +
            "(e)(s)"
        );

    }


    if (index === 5) {

        return (
            participle +
            "(e)s"
        );

    }


    return participle;
}


// ============================================================
// GENERIC COMPOUND TENSE
// ============================================================

function conjugateCompoundTenseV13(
    verb,
    analysis,
    avoirForms,
    etreForms
) {

    const auxiliary =
        getAuxiliaryV13(
            analysis
        );


    const auxiliaryForms =
        auxiliary === "être"
            ? etreForms
            : avoirForms;


    const baseParticiple =
        getPastParticipleV13(
            verb,
            analysis
        );


    const forms = [];


    for (
        let index = 0;
        index < pronouns.length;
        index++
    ) {

        let participle =
            baseParticiple;


        if (
            auxiliary === "être"
        ) {

            participle =
                applyEtreAgreementV13(
                    participle,
                    index
                );

        }


        forms.push({

            pronoun:
                pronouns[index],

            verb:
                auxiliaryForms[index] +
                " " +
                participle

        });

    }


    return forms;
}


// ============================================================
// PASSÉ COMPOSÉ
// ============================================================

function conjugatePasseComposeV13(
    verb,
    analysis
) {

    return conjugateCompoundTenseV13(
        verb,
        analysis,
        avoirPresent,
        etrePresent
    );
}


// ============================================================
// PLUS-QUE-PARFAIT
// ============================================================

function conjugatePlusQueParfaitV13(
    verb,
    analysis
) {

    return conjugateCompoundTenseV13(
        verb,
        analysis,
        avoirImperfect,
        etreImperfect
    );
}


// ============================================================
// PASSÉ ANTÉRIEUR
// ============================================================

function conjugatePasseAnterieurV13(
    verb,
    analysis
) {

    return conjugateCompoundTenseV13(
        verb,
        analysis,
        avoirPasseSimple,
        etrePasseSimple
    );
}


// ============================================================
// FUTUR ANTÉRIEUR
// ============================================================

function conjugateFutureAnteriorV13(
    verb,
    analysis
) {

    return conjugateCompoundTenseV13(
        verb,
        analysis,
        avoirFuture,
        etreFuture
    );
}


// ============================================================
// CONDITIONNEL PASSÉ
// ============================================================

function conjugateConditionalPastV13(
    verb,
    analysis
) {

    return conjugateCompoundTenseV13(
        verb,
        analysis,
        avoirConditional,
        etreConditional
    );
}


// ============================================================
// SUBJONCTIF PASSÉ
// ============================================================

function conjugateSubjunctivePastV13(
    verb,
    analysis
) {

    return conjugateCompoundTenseV13(
        verb,
        analysis,
        avoirSubjunctive,
        etreSubjunctive
    );
}


// ============================================================
// IMPÉRATIF PRÉSENT
// ============================================================

function conjugateImperativePresentV13(
    verb,
    analysis
) {

    // --------------------------------------------------------
    // IRREGULAR
    // --------------------------------------------------------

    if (
        analysis.type === "irregular"
    ) {

        return (
            analysis.irregular.imperative
        );

    }


    // --------------------------------------------------------
    // FAMILY
    // --------------------------------------------------------

    if (
        analysis.type === "family"
    ) {

        return getFamilyForms(
            verb,
            analysis.family,
            "imperative"
        );

    }


    // --------------------------------------------------------
    // REGULAR -ER
    //
    // parler:
    // parle
    // parlons
    // parlez
    // --------------------------------------------------------

    const stem =
        verb.slice(0, -2);


    if (
        analysis.regularType === "er"
    ) {

        return [
            stem + "e",
            stem + "ons",
            stem + "ez"
        ];

    }


    // --------------------------------------------------------
    // REGULAR -IR
    //
    // finir:
    // finis
    // finissons
    // finissez
    // --------------------------------------------------------

    if (
        analysis.regularType === "ir"
    ) {

        return [
            stem + "is",
            stem + "issons",
            stem + "issez"
        ];

    }


    // --------------------------------------------------------
    // REGULAR -RE
    //
    // vendre:
    // vends
    // vendons
    // vendez
    // --------------------------------------------------------

    return [
        stem + "s",
        stem + "ons",
        stem + "ez"
    ];
}


// ============================================================
// IMPÉRATIF PASSÉ
// ============================================================

function conjugateImperativePastV13(
    verb,
    analysis
) {

    // If a verb has no normal imperative,
    // it should not receive a fabricated past imperative.

    const presentImperative =
        conjugateImperativePresentV13(
            verb,
            analysis
        );


    if (!presentImperative) {

        return null;

    }


    const auxiliary =
        getAuxiliaryV13(
            analysis
        );


    const auxiliaryForms =
        auxiliary === "être"
            ? etreImperative
            : avoirImperative;


    const baseParticiple =
        getPastParticipleV13(
            verb,
            analysis
        );


    return auxiliaryForms.map(
        function(
            auxiliaryForm,
            index
        ) {

            let participle =
                baseParticiple;


            if (
                auxiliary === "être"
            ) {

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
// GET VERB TYPE LABEL
// ============================================================

function getVerbTypeNameV13(
    analysis
) {
        // --------------------------------------------------------
    // EXACT IRREGULAR VERBS
    // --------------------------------------------------------

    if (
        analysis.type === "irregular"
    ) {

        return "Irregular verb";

    }


    // --------------------------------------------------------
    // IRREGULAR VERB FAMILIES
    // --------------------------------------------------------

    if (
        analysis.type === "family"
    ) {

        return "Irregular verb";

    }


    // --------------------------------------------------------
    // REGULAR VERBS
    // --------------------------------------------------------

    if (
        analysis.type === "regular"
    ) {

        return (
            "Regular -" +
            analysis.regularType.toUpperCase() +
            " verb"
        );

    }


    // --------------------------------------------------------
    // UNKNOWN
    // --------------------------------------------------------

    return "Unknown verb";

}
    

// ============================================================
// CONJUGATE COMPLETE VERB
//
// This is the main function that app.js will eventually call.
//
// Instead of app.js having to call 14 separate functions,
// it can simply do:
//
// const data = conjugateCompleteVerb("comprendre");
//
// and receive everything at once.
// ============================================================

function conjugateCompleteVerb(verb) {

    const normalizedVerb =
        verb
        .trim()
        .toLowerCase();


    const analysis =
        analyzeVerb(
            normalizedVerb
        );


    if (
        analysis.type === "unknown"
    ) {

        return {
            verb: normalizedVerb,
            analysis: analysis,
            supported: false
        };

    }


    // ========================================================
    // INDICATIF
    // ========================================================

    const present =
        conjugatePresentV13(
            normalizedVerb,
            analysis
        );


    const imperfect =
        conjugateImperfectV13(
            normalizedVerb,
            analysis
        );


    const passeSimple =
        conjugatePasseSimpleV13(
            normalizedVerb,
            analysis
        );


    const future =
        conjugateFutureV13(
            normalizedVerb,
            analysis
        );


    const passeCompose =
        conjugatePasseComposeV13(
            normalizedVerb,
            analysis
        );


    const plusQueParfait =
        conjugatePlusQueParfaitV13(
            normalizedVerb,
            analysis
        );


    const passeAnterieur =
        conjugatePasseAnterieurV13(
            normalizedVerb,
            analysis
        );


    const futureAnterior =
        conjugateFutureAnteriorV13(
            normalizedVerb,
            analysis
        );


    // ========================================================
    // CONDITIONNEL
    // ========================================================

    const conditionalPresent =
        conjugateConditionalPresentV13(
            normalizedVerb,
            analysis
        );


    const conditionalPast =
        conjugateConditionalPastV13(
            normalizedVerb,
            analysis
        );


    // ========================================================
    // SUBJONCTIF
    // ========================================================

    const subjunctivePresent =
        conjugateSubjunctivePresentV13(
            normalizedVerb,
            analysis
        );


    const subjunctivePast =
        conjugateSubjunctivePastV13(
            normalizedVerb,
            analysis
        );


    // ========================================================
    // IMPÉRATIF
    // ========================================================

    const imperativePresent =
        conjugateImperativePresentV13(
            normalizedVerb,
            analysis
        );


    const imperativePast =
        conjugateImperativePastV13(
            normalizedVerb,
            analysis
        );


    // ========================================================
    // RETURN EVERYTHING
    // ========================================================

    return {

        verb:
            normalizedVerb,

        analysis:
            analysis,

        supported:
            true,

        verbTypeName:
            getVerbTypeNameV13(
                analysis
            ),


        indicative: {

            present:
                present,

            imperfect:
                imperfect,

            passeSimple:
                passeSimple,

            future:
                future,

            passeCompose:
                passeCompose,

            plusQueParfait:
                plusQueParfait,

            passeAnterieur:
                passeAnterieur,

            futureAnterior:
                futureAnterior
        },


        conditional: {

            present:
                conditionalPresent,

            past:
                conditionalPast
        },


        subjunctive: {

            present:
                subjunctivePresent,

            past:
                subjunctivePast
        },


        imperative: {

            present:
                imperativePresent,

            past:
                imperativePast
        }

    };
}


// ============================================================
// END OF conjugator.js
// ============================================================