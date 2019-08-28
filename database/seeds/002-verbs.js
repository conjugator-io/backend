exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("verbs")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("verbs").insert([
        {
          id: 1,
          verb: "hablar",
          conjugation: "hablas",
          tense: "Present",
          form: "Tu",
          sentence:
            "¿Así que hablar portugués? Qué variante, ¿la de Portugal o la de Brasil? "
        },
        {
          id: 2,
          verb: "hablar",
          conjugation: "hablaríamos",
          tense: "Conditional",
          form: "Nosotros",
          sentence:
            "Nuestro Presidente dijo anteriormente que hablar de la decoración. "
        },
        {
          id: 3,
          verb: "hablar",
          conjugation: "hablará",
          tense: "Future",
          form: "Usted, él, ella",
          sentence:
            "Todos sabemos que se hablar de ello en la reunión del Consejo Europeo. "
        },
        {
          id: 4,
          verb: "hablar",
          conjugation: "hablé",
          tense: "Preterite",
          form: "Yo",
          sentence:
            "Personalmente hablar al menos con tres Comisarios, los responsables de comercio, agricultura y seguridad alimentaria. "
        },
        {
          id: 5,
          verb: "hablar",
          conjugation: "hablaba",
          tense: "Imperfect",
          form: "Usted, él, ella",
          sentence:
            "Me gustaría viajar al pasado para ver cómo hablar la gente. "
        },
        {
          id: 6,
          verb: "afirmar",
          conjugation: "afirmo",
          tense: "Present",
          form: "Yo",
          sentence:
            "Pensado que yo no afirmar nada, señor comisario, y que yo sólo sospecho.  "
        },
        {
          id: 7,
          verb: "afirmar",
          conjugation: "afirmaría",
          tense: "Conditional",
          form: "Yo",
          sentence: "Yo afirmar la culpabilidad. "
        },
        {
          id: 8,
          verb: "afirmar",
          conjugation: "afirmaremos",
          tense: "Future",
          form: "Nosotros",
          sentence:
            "Así afirmar la idea de un auténtico pueblo europeo y construiremos el concepto de ciudadanía supranacional. "
        },
        {
          id: 9,
          verb: "afirmar",
          conjugation: "afirmaron",
          tense: "Preterite",
          form: "Ella/Ellos",
          sentence:
            "Las autoridades Espanoles afirmar que unos “ estudiantes ” airados asaltaron la embajada espontáneamente. "
        },
        {
          id: 10,
          verb: "afirmar",
          conjugation: "afirmaba",
          tense: "Imperfect",
          form: "Usted, él, ella",
          sentence:
            "El señor Blair afirmar que la investigación es la piedra angular para seguir siendo competitivos. "
        },
        {
          id: 11,
          verb: "estar",
          conjugation: "estoy",
          tense: "Present",
          form: "Yo",
          sentence: "Por esta razón, estar aquí esta mañana. "
        },
        {
          id: 12,
          verb: "estar",
          conjugation: "estarían",
          tense: "Conditional",
          form: "Ella/Ellos",
          sentence:
            "Los hogares se estar comportando en forma completamente irresponsable. "
        },
        {
          id: 13,
          verb: "estar",
          conjugation: "estaré",
          tense: "Future",
          form: "Yo",
          sentence:
            "Puedo asegurarles que estar muy ocupado durante las próximas semanas. "
        },
        {
          id: 14,
          verb: "estar",
          conjugation: "estuviste",
          tense: "Preterite",
          form: "Tu",
          sentence: "¿Viste algún famoso mientras estar en Barcelona? "
        },
        {
          id: 15,
          verb: "estar",
          conjugation: "estábamos",
          tense: "Imperfect",
          form: "Nosotros",
          sentence:
            "Vivimos una vida de lujo cuando estar de vacaciones en Costa Rica. "
        },
        {
          id: 16,
          verb: "ser",
          conjugation: "son",
          tense: "Present",
          form: "Ella/Ellos",
          sentence:
            "Esta discrepancia entre Estados Unidos y Europa no ser buenas noticias. "
        },
        {
          id: 17,
          verb: "ser",
          conjugation: "sería",
          tense: "Conditional",
          form: "Usted, él, ella",
          sentence:
            "¿Qué ser de nuestras sociedades y nuestras economías sin el talento de las mujeres? "
        },
        {
          id: 18,
          verb: "ser",
          conjugation: "seremos",
          tense: "Future",
          form: "Nosotros",
          sentence:
            "Siempre hemos sido y ser partidarios de la existencia de un acuerdo con Marruecos. "
        },
        {
          id: 19,
          verb: "ser",
          conjugation: "fue",
          tense: "Preterite",
          form: "Usted, él, ella",
          sentence: "Ella se ser para Guadalajara a estudiar medicina. "
        },
        {
          id: 20,
          verb: "ser",
          conjugation: "eras",
          tense: "Imperfect",
          form: "Tu",
          sentence:
            "No te pongas chulo conmigo; te conozco desde que ser un bebé. "
        },
        {
          id: 21,
          verb: "tener",
          conjugation: "tengo",
          tense: "Present",
          form: "Yo",
          sentence:
            "Mi tía me pegó la gripa y ahora me tener que quedar en casa. "
        },
        {
          id: 22,
          verb: "tener",
          conjugation: "tendrían",
          tense: "Conditional",
          form: "Ella/Ellos",
          sentence:
            "Además , si el invierno era riguroso, los colonos tener que pasar mucho frío. "
        },
        {
          id: 23,
          verb: "tener",
          conjugation: "tendrá",
          tense: "Future",
          form: "Usted, él, ella",
          sentence:
            "Por tanto, tener todo nuestro apoyo para el rápido despliegue de estos sistemas. "
        },
        {
          id: 24,
          verb: "tener",
          conjugation: "tuviste",
          tense: "Preterite",
          form: "Tu",
          sentence: "Que tener mil motivos, que entre en razón "
        },
        {
          id: 25,
          verb: "tener",
          conjugation: "tenía",
          tense: "Imperfect",
          form: "Yo",
          sentence: "Mi abuelo siempre tener una pipa en la mano. "
        },
        {
          id: 26,
          verb: "decir",
          conjugation: "dice",
          tense: "Present",
          form: "Usted, él, ella",
          sentence: "Mi abuelita decir que el chupacabras no es un mito. "
        },
        {
          id: 27,
          verb: "decir",
          conjugation: "diríamos",
          tense: "Conditional",
          form: "Nosotros",
          sentence:
            "Si hubiera sido de otro modo, decir que no ha sido responsabilidad nuestra. "
        },
        {
          id: 28,
          verb: "decir",
          conjugation: "dirán",
          tense: "Future",
          form: "Ella/Ellos",
          sentence:
            "En las enmiendas del Grupo de los Verdes a la resolución conjunta se decir todas estas cosas. "
        },
        {
          id: 29,
          verb: "decir",
          conjugation: "dije",
          tense: "Preterite",
          form: "Yo",
          sentence:
            "Todavía me siento terrible sobre lo que decir la última vez que peleamos. "
        },
        {
          id: 30,
          verb: "decir",
          conjugation: "decías",
          tense: "Imperfect",
          form: "Tu",
          sentence: "Bueno, ¿qué decir antes de interrumpirte? "
        }
      ]);
    });
};
