'use client'; // Necesario para usar el buscador en tiempo real

import { useState } from 'react';
import SearchBar from "../components/SearchBar";
import Module, { Lesson } from "../components/Module";
import VideoModal from "../components/VideoModal";

export default function Home() {
  // Gardamos lo que el usuario escribe
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);

    const modulo_a1 = [
      { title: "1. Bibliaqa Diospa Simin kasqanmanta hinaspa Trinidadmanta / La Biblia es palabra de Dios y la Trinidad", youtubeId: "RtzqdZMBxVE", startTime: 60 },
      { title: "2. Jesuspa Dios kasqanmanta hinaspa rurayninkunamanta / La deidad de Jesús y la misión de Jesús" },
      { title: "3. Salvacionmanta, hanaq pachamanta, infiernomanta hinaspa Jesuspa kutimunanmanta / Salvación por la gracia mediante la fe, el Cielo y el Infierno" },
      { title: "4. Chuya Espiritupa Dios kasqanmantawan rurayninkunamanta / La persona y obra del Espíritu Santo" },
      { title: "5. Diospa hanpikuyninmanta / La sanidad divina" },
      { title: "6. Iglesia rurananpaq kamachikuykunamanta / Las ordenanzas de la Iglesia" }
    ];

    const modulo_a2 = [
      { title: "7. Chuya Espíritumanta / El Espíritu Santo" },
      { title: "8. Chuya Espiritupa Donninkunamanta / Los dones del Espíritu Santo" },
      { title: "9. Simiwan rimanapaq kaq donkunamanta / Los dones vocales del Espíritu Santo" },
      { title: "10. Revelacionkuna chaskinapaq donkunamanta / Los dones de revelación" },
      { title: "11. Atiyninwan rimanapaq kaq donkunamanta / Los dones de poder del Espíritu Santo" },
      { title: "12. Unquqkunata sanoyachinapaq kaq donkunamanta / Los dones de sanidad" },
      { title: "13. Hatun kamachikuymantawan hunquqkuna sanoyachinamanta / La gran comisión y la sanidad" },
      { title: "14. Diospa Atiyninwan unquqkunata sanoyachinamanta / El poder de Dios para dar sanidad" },
      { title: "15. Atiywan rimaspa unquqkunata sanoyachinamanta / Hablar palabras de sanidad" },
      { title: "16. Makita churanamanta / Impartición por la imposición de manos" }
    ];

    const modulo_a3 = [
      { title: "17. Musuq Testamentomanta / Introducción al Nuevo Testamento" },
      { title: "18. Mateo, Marcos, Lucas: Jesusmanta imam willakusqankumanta / Mateo, Marcos, Lucas: tres retratos de Jesucristo" },
      { title: "19. Juan: Jesucristomanta imam willakusqanmanta / Juan: El cuarto retrato de Jesucristo" },
      { title: "20. Hechos: Evangelio willakusqankupa wiñarisqanmanta / Hechos: La expansión del Evangelio" },
      { title: "21. Romanos: Evangelioqa Diospa kuyakuynin kasqanmanta / Romanos: Carta de Pablo acerca del Evangelio de la gracia" },
      { title: "22. 1, 2 Corintios; Gálatas: Evangelioman hina kawsanamanta / Primera y Segunda de Corintios, Gálatas: Cartas de Pablo de la vida del Evangelio de la gracia" },
      { title: "23. Efesios, Filipenses, Colosenses hinaspa Filemón: Pablo carcelpi kachkaspan iglesiakunaman cartakuna apachisqanmanta / Ef., Filipenses, Colosenses y Filemón: Cartas de Pablo desde la prisión" },
      { title: "24. 1, 2 Tesalonisenses; 1, 2 Timoteo; Tito: Pastorkunaman Pablopa Cartankuna apachisqanmanta / Primera y Segunda de Timoteo y Tito: Las cartas de Pablo a los líderes" },
      { title: "25. Hebreos; Santiago; 1, 2 Pedro; 1, 2, 3 Juan, Judas: Iñiqkunaman qillqasqa cartakunamanta / De Hebreos a Judas: Las cartas generales de los creyentes" },
      { title: "26. Apocalipsis: Tukuy imapa tukupayninmanta / El Apocalipsis: La consumación de todas las cosas" }
    ];

    const modulo_a4 = [
      { title: "27. Imanasqa hinaspa imaynatam Diosta yupaychanamanta / La prioridad, el propósito, y representación de la adoración" },
      { title: "28. Diospa reinonpi música imapaqmi kasqanmanta / El papel de la música en el reino de Dios" },
      { title: "29. Musuq takikunamanta / La importancia del cántico nuevo" },
      { title: "30. Yupaychaqkunapa rurayninkunamanta / Nuestra responsabilidad como adoradores" },
      { title: "31. Diosta yupaychaqkuna kananchikmanta / Cómo hacerse adorador" }
    ];

    const modulo_b1 = [
      { title: "32. Imapaqmi mañakuy kasqanmanta / Su triple potencial" },
      { title: "33. ¿Imataq mañakuy utaq oración? / ¿Qué es la oración?" },
      { title: "34. Imaynatam mañakunanchikmanta Punta kaq yachachikuy / La práctica de la oración, 1ra parte" },
      { title: "35. Imayntam mañakunanchikmanta Iskay kaq yachachikuy / La práctica de la oración, 2da parte" },
      { title: "36. Imapaqmi mañakunanchikmanta / El propósito de la oración" }
    ];

    const modulo_b2 = [
      { title: "37. Iglesiapi yanapakunanchikmanta / El viaje de un siervo" },
      { title: "38. Diosqa churinkunata sirvikunankupaq qayasqanmanta / Dios usa estrellas y velas" },
      { title: "39. Iglesia allin organizasqa kaptinqa aswan allin yanapakuyqa kasqanmanta Punta kaq yachachikuy / No temáis al liderazgo, a la organización o a la estructura, 1ra parte" },
      { title: "40. Iglesia allin organizasqa kaptinqa aswan allin yanapakuyqa kasqanmanta Iskay kaq yachachikuy / No temáis al liderazgo, a la organización o a la estructura, 2da parte" },
      { title: "41. Yanapakuqkunapa iglesiapi llamkayninmanta / Llegando a ser un siervo de fuego" }
    ];

    const modulo_b3 = [
      { title: "42. Ñawpaq Testamentomanta / Abordando el Antiguo Testamento" },
      { title: "43. Bibliapi librokuna imayna patachasqam kasqanmanta hinaspa Dios tukuy imata unanchasqanmanta / El orden de los libros y la creación" },
      { title: "44. Runaqa Diosman richakuq kasqanmantawan huchaman wichisqanmanta / La imagen de Dios y la caída" },
      { title: "45. Abrahanmanta, Babelmanta hinaspa Dios runawan contrato rurasqanmanta / Babel y Abraham, conceptos de pacto" },
      { title: "46. Abrahanmanta, Israelmanta, Josemanta hinaspa Moisesmanta / Abraham, Israel, José, Moisés" },
      { title: "47. Diosta karpanpi yupaychasqankumanta / La adoración en el Tabernáculo" },
      { title: "48. Josuemantawan Juezkunamanta / Josué y Jueces" },
      { title: "49. Reykuna hatarisqanmanta, Davidmanta hinaspa Salmos libropi Hebreo takikunamanta / Los Reyes, David, Salmos y la poesía hebrea" },
      { title: "50. Yachaykunamanta, israel nación rakinakusqanmanta hinaspa huklaw nacionkunaman apasqa kasqankumanta / La literatura sapiencial, la división y el exilio" },
      { title: "51. Babiloniaman apasqa kasqankumanta, chaymanta Dios kutichimusqanmanta hinaspa profetakunamanta / La cautividad en Babilonia, el regreso del exilio y los profetas" }
    ];

    const modulo_b4 = [
      { title: "52. Rantinchikpi Dios imatam rurasqanmanta 1 / El cambio (Intercambio) divino, 1ra parte" },
      { title: "53. Rantinchikpi Dios imatam rurasqanmanta II / El cambio (Intercambio) divino, 2da parte" },
      { title: "54. Cristopi vencesqanchikmanta / El triunfo de alabanza" },
      { title: "55. ¿Imataq angelkunata llamkachin? / ¿Qué hace obrar a los ángeles?" },
      { title: "56. Imaynatam iñiyninchikta llamkachinamanta / Cómo hacer que su fe obre" }
    ];

    const modulo_b5 = [
      { title: "57. Diosqa unquqkunata sanoyachiy munasqanmanta / La voluntad de Dios y la sanidad" },
      { title: "58. Jesús salvawaspanchik hampiwasqanchikmanta / Sanidad en la expiación" },
      { title: "59. Diosqa kuyakuywan salvawasqanchikmanta / Salvación plena" },
      { title: "60. Moisés broncemanta culebrata sayachisqanmanta / Moisés, la serpiente y la sanidad" },
      { title: "61. Diosqa llakipayakuywan salvawaspanchik hampiykuwasqanchikmanta / La misericordia de sanar" }
    ];

    const modulo_c1 = [
      { title: "62. Kay yachachikuykuna imapaqmi kasqanmanta / Introducción al Curso Internacional" }
    ];

    const modulo_c2 = [
      { title: "63. Imaynatam iglesiapi Escuela Biblicata hatarichinamanta / El modelo para el entrenamiento ministerial" },
      { title: "64. ¿Imapaq hinaspa imanasqataq escuela biblicata hatarichisun? / La meta y el objetivo del ministerio de enseñanza" },
      { title: "65. Sumaqta Tanteaykuspa Escuela Biblicata hatarichinamanta / Planifique su instituto" }
    ];

    const modulo_c3 = [
      { title: "66. ¿Imapaqtaq iglesiapi necesitanchik taksa grupokuna hatarichiyta? / Propósitos de los grupos celulares" },
      { title: "67. Taksa grupokunawan chinkasqa runakunata haypanamanta / Evangelizando a los perdidos a través de los grupos celulares" },
      { title: "68. Lederkunata iglesiapi hatarichinamanta / Desarrollando líderes" },
      { title: "69. Imaynatam taksa grupokunawan iglesiata mirachinamanta / Los principios de la multiplicación" },
      { title: "70. Imayna runakunatam iglesiapi lider kanankupaq akllanamanta / Líderes grandes en la Iglesia" }
    ];

    const modulo_c4 = [
      { title: "71. Jesuspa hatun kamachikuy qusqanmanta / La gran comisión" },
      { title: "72. Chuya Espiritupa atiyninwan evangeliota willakunanchikmanta / Cómo puede usted ponerse a disposición del Espíritu Santo" },
      { title: "73. Diospa siminta apaqkunaqa allin kawsakuq kanankumanta / La integridad necesaria para llevar la unción del Espíritu Santo" },
      { title: "74. Hatun kamachikuyta rurananchikmanta / La magnitud de la gran comisión" },
      { title: "75. Chuya Espiritupa atiyninmanta / El fuego del Espíritu Santo" }
    ];

    const modulo_c5 = [
      { title: "76. Limpio sunquwan Diosta sirvikunanchikmanta / La integridad del corazón" },
      { title: "77. Pampachakuq Sunquyuq kananchikmanta / Un espíritu que perdona" }
    ];

    const modulo_c6 = [
      { title: "78. Ñuqanchikpaq Diospa imam munasqanta chaskispa rurananchikmanta / Abracemos la visión" },
      { title: "79. Imayna sunquyuqmi Diospa kamachikuynin chaskiq runa kananmanta / Las cualidades de la visión" },
      { title: "80. ¿Imataq visión, imaynatataq rurayta atisun? / Enfocando la visión" },
      { title: "81. Kay pachapaq imatam Dios munasqanmanta / La visión de Dios para las naciones" },
      { title: "82. ¿Maypitaq qullqita tarisun Diospa imam munasqanta rurananchikpaq? / El financiamiento de la visión" }
    ];

    const modulo_c7 = [
      { title: "83. Imaynatam musuq iglesiata hatarichinamanta / Una descripción del plantamiento de Iglesias" },
      { title: "84. Iglesia liderkunata ministeriokunata hatarichiq kanankumanta / La Iglesia local como centro de entrenamiento de ministerios" },
      { title: "85. Musuq iñiqkunata don chaskisqankuman hina llamkachinamanta / Ministros vocacionales en la Iglesia local" },
      { title: "86. Musuq Iglesiata hatarichinapaq grupokunata formanamanta / Identificando equipos para plantar Iglesias" },
      { title: "87. Iglesia hatarichimunanpaq grupo formasqanchikta kachanamanta / Preparando y enviando a los equipos que planten Iglesias" }
    ];

    const modulo_c8 = [
      { title: "88. Iñiqkunata Dios imaynatam guiasqanmanta / Las diversas maneras que Dios guía a su pueblo" },
      { title: "89. Espiritunchiktakama Dios guiawasqanchikmanta / Cómo nos guía Dios mediante nuestro espíritu" },
      { title: "90. Sasachakuy tiempokunapi Diospa yanapakuyninta chaskinamanta / Cómo recibir dirección en tiempos difíciles" },
      { title: "91. Rurayninchikmanta akllasqa kaqkunata ñawpaqman churanamanta / Las prioridades de la vida" },
      { title: "92. Diosta maskaspa ima pantachikuykunatam tarinanchikmanta / Trampas y peligros al buscar la guianza de Dios" }
    ];

    const modulo_d1 = [
      { title: "93. Israel kasta runakuna desiertopi ñakarisqanmanta / Mentalidades; visión y responsabilidad" },
      { title: "94. Pruebasqa kaspa imatam rurananchikmanta / Responsabilidad y pruebas" },
      { title: "95. Tukuy imamanta quejakuspa imamantapas hukman tumpaymanta / Quejándose e impaciencia" },
      { title: "96. Pacienciakuyqa mana yachaspa yanqa ñakariymanta / Impaciencia y la mentalidad de víctima" },
      { title: "97. Kikinchikta llakipayakuspa mana huchayuqpaq hapikuymanta / La mentalidad de víctima y lástima propia" },
      { title: "98. Diospa churinña kasqanchik rayku kuyapayakunanchikmanta / La autoestima" },
      { title: "99. Hukpa kaqta envidiakuspa runapa kaqta munapayaspa runaman tupachikuymanta / Los celos, la testarudez y la rebeldía" }
    ];

    const modulo_d2 = [
      { title: "100. Imayna sunquyuqtaq huk lider kanan / El corazón de un líder" },
      { title: "101. Runaqa sunqunpa munasqanman hinam kawsanqa / Su corazón determina el curso de la vida" },
      { title: "102. Ruraqa kawsanqa utaq ruwanqapas sunqunpa kamachisqanman hinam / Su corazón determina su éxito en la vida" },
      { title: "103. Pitaq kanki ¿Liderchu icha qatikuqllachu? / ¿Líderes o seguidores?" },
      { title: "104. Imapitaq liderkuna pantan / Trampas a los visionarios" }
    ];

    const modulo_d3 = [
      { title: "105. Huk lider allin llamkaq kananmanta / Eficacia" }
    ];

    const modulo_d4 = [
      { title: "106. Kuyanakunamanta / Introducción" },
      { title: "107. Runapa paqariyninmanta hinaspa maymanmi rinanmanta / Orígenes y destinos" },
      { title: "108. Imatataq supay ruwachkan runakunata rakinananpaq / Las estrategias del enemigo" },
      { title: "109. Huklla kawsakuy atinamanta / Viviendo una vida en reconciliación" }
    ];

    const modulo_d5 = [
      { title: "110. Imatam infierno sumaqta pakasqanmanta / El secreto mejor guardado del infierno" },
      { title: "111. Diospi mana iñiq runakunamanta utaq ateokunamanta / El ateísmo" },
      { title: "112. Evangeliota chiqap willakuqkunamanta / Evangelismo militante" },
      { title: "113. Chiqap iñikuywan hawa sunqulla iñikuymanta / La conversión verdadera y falsa" },
      { title: "114. Imaynatataq Diospaq tukuy sunquwan llamkayta atichwan / Cómo conseguir el ardor hacia Dios" }
    ];

    const modulo_d6 = [
      { title: "115. Bibliam nin supaywan guerrapi kasqanchikta / El fundamento bíblico de la guerra" },
      { title: "116. Yachananchikmi mana allin espiritukunawan peleayta / La comprensión de la guerra espiritual" },
      { title: "117. Guerrata peleanapaq Diosta atyninmanta hinaspa infiernopa punkunmanta / Oración de guerra y las puertas del Infierno" },
      { title: "118. Infiernopa punkun tuñichinamanta / Derribar las puertas del Infierno" },
      { title: "119. Diospa atiyninwanmi peleananchikqa / Usar la autoridad en la sociedad" }
    ];

    const modulo_d7 = [
      { title: "120. Wichichiwananchikpaq supaypa trampa churamusqanmanta / La carnada de Satanás" },
      { title: "121. Diospa atiyninwan pachallikunanchikmanta / Cubierto" }
    ];

    const modulo_d8 = [
      { title: "122. Diospa Siminta Yachaspa sunqupi sapinchanamanta / Memorización bíblica (PARTE 1)" },
      { title: "123. Diospa Siminta Yachaspa sunqupi sapinchanamanta / Memorización bíblica (PARTE 2)" },
      { title: "124. Ñakasqa kaykunata pakinanchikmanta utaq vencenanchikmanta / Quebrantando las maldiciones generacionales" }
    ];

    const modulo_e1 = [
      { title: "125. Jesúsmi yachachiqninchikqa / Jesús, nuestro modelo" },
      { title: "126. Jesúsmi ruranapaq kallpanchaqninchik / Jesús, nuestra inspiración" },
      { title: "127. Imanisuntaq kasukusunchu manachu / Nuestra respuesta" },
      { title: "128. Ruranapaq kachasqam kanchik / Escogidos para servicio" },
      { title: "129. Imataq willakuyninchikta valechin / Nuestra credibilidad" },
      { title: "130. Pitaq kanchik Diospi / Nuestra legalidad" },
      { title: "131. Dios qanwan kaptinga maynatataq rurawaq / La experiencia" }
    ];

    const modulo_e2 = [
      { title: "132. Diospa munasqanman hina kawsanamanta / La forma de vida máxima" },
      { title: "133. Quyta qallarinamanta / Cómo empezar una forma de vida de dar" },
      { title: "134. Quy imapaqmi siqvikusqamanta / Los beneficios de vivir dando a Dios" },
      { title: "135. Manaña atinanchikama qunamanta / Vivir y dar más de lo posible" },
      { title: "136. ¿Atinmanchu Dios? Atinqa punim / ¿Puede Dios? Dios puede" }
    ];

    const modulo_e3 = [
      { title: "137. Bibliaman hina ¿Pitaq huk anciano? / ¿Qué es un anciano en el sentido bíblico?" },
      { title: "138. Ancianokunapa rurayninmanta / La función de los Ancianos" },
      { title: "139. Ancianokunapa kawsayninmanta / El carácter de los Ancianos" },
      { title: "140. Iglesiapi ministeriokunamanta 1 / El ministerio de cinco pasos. PARTE 1" },
      { title: "141. Iglesiapi ministeriokunamanta 2 / El ministerio de cinco pasos. PARTE 2" }
    ];

    const modulo_e4 = [
      { title: "142. Imanintaq Biblia warmakunawan llamkanamanta / Qué dice la Biblia acerca del ministerio de niños" },
      { title: "143. Samaykachikuq kanamanta / Las leyes de hospitalidad" },
      { title: "144. Tukupay tiempokunapi cosechumanta / La cosecha de los últimos días" },
      { title: "145. Jesusmanta warmakunaman yachachinamanta / Predicándoles a los niños" },
      { title: "146. Pastor jovenkunawan llamkananmanta / Ministerio de jóvenes dirigido por un Pastor" },
      { title: "147. Warmakuna uyarinanpaq hina yachachinamanta / Cómo mantener la atención de un niño" },
      { title: "148. Sumaq yachachikuq kanamanta / Cómo ser un excelente narrador" }
    ];

    const modulo_e5 = [
      { title: "149. Titerekunawan wawakunaman yachachinamanta / Usando títeres en el ministerio de niños" },
      { title: "150. Imaynatataq sasachakuykunata allichachwan / Cómo ser una persona que resuelve problemas" },
      { title: "151. Iglesia mirachinapaq warmakunawan llamkay qallarinamanta / Organizando el ministerio de niños para el crecimiento" },
      { title: "152. Imaynatam hukpa yanapakuyninta tarichwan / Cómo obtener la ayuda de otros" }
    ];

    const modulo_e6 = [
      { title: "153. Jovenkunawan imaynam llamkanamanta / Establecer una visión para el ministerio de jóvenes" },
      { title: "154. Liderkunata llamkachinamanta / Guiando a líderes a ejecución máxima" },
      { title: "155. Jovenkunapa sunqunman chayanamanta / Comunicándose efectivamente con la juventud" },
      { title: "156. Jovenkunawan llamkanapaq tanteanaman / Planeando efectivamente un ministerio de jóvenes" }
    ];
  // METEMOS TODOS LOS MÓDULOS EN UNA LISTA MAESTRA
  const allModulesData = [
    { number: "01", title: "LOS FUNDAMENTOS DE LA FE", lessons: modulo_a1 },
    { number: "02", title: "LA VIDA SOBRENATURAL Y LA SANIDAD", lessons: modulo_a2 },
    { number: "03", title: "ESTUDIO PANORÁMICO DEL NUEVO TESTAMENTO", lessons: modulo_a3 },
    { number: "04", title: "ALABANZA Y ADORACIÓN", lessons: modulo_a4 },
    { number: "05", title: "EL PODER DE LA ORACIÓN", lessons: modulo_b1 },
    { number: "06", title: "EL MINISTERIO DE AYUDAS", lessons: modulo_b2 },
    { number: "07", title: "ESTUDIO PANORÁMICO DEL ANTIGUO TESTAMENTO", lessons: modulo_b3 },
    { number: "08", title: "LA ESENCIA DEL EVANGELIO", lessons: modulo_b4 },
    { number: "09", title: "JESÚS SANA HOY", lessons: modulo_b5 },
    { number: "10", title: "MOVILIZAR PARA MULTIPLICAR", lessons: modulo_c1 },
    { number: "11", title: "CÓMO DESARROLLAR UNA ESCUELA BÍBLICA EN SU IGLESIA", lessons: modulo_c2 },
    { number: "12", title: "LOS GRUPOS CELULARES", lessons: modulo_c3 },
    { number: "13", title: "EL EVANGELISMO CON PODER", lessons: modulo_c4 },
    { number: "14", title: "LA INTEGRIDAD Y LIDERAZGO", lessons: modulo_c5 },
    { number: "15", title: "LOS LÍDERES Y SU VISIÓN", lessons: modulo_c6 },
    { number: "16", title: "CÓMO PLANTAR IGLESIAS USANDO EQUIPOS", lessons: modulo_c7 },
    { number: "17", title: "CÓMO SER GUIADOS POR EL ESPÍRITU SANTO", lessons: modulo_c8 },
    { number: "18", title: "MENTALIDAD DE DESIERTO", lessons: modulo_d1 },
    { number: "19", title: "CÓMO DESARROLLAR LÍDERES", lessons: modulo_d2 },
    { number: "20", title: "CÓMO SER LÍDER DE UN GRUPO CELULAR", lessons: modulo_d3 },
    { number: "21", title: "LA RECONCILIACIÓN", lessons: modulo_d4 },
    { number: "22", title: "EL EVANGELISMO PERSONAL", lessons: modulo_d5 },
    { number: "23", title: "LA GUERRA ESPIRITUAL", lessons: modulo_d6 },
    { number: "24", title: "LA AUTORIDAD Y EL PERDÓN", lessons: modulo_d7 },
    { number: "25", title: "VICTORIA ESPIRITUAL", lessons: modulo_d8 },
    { number: "26", title: "LA CONEXIÓN CON CRISTO", lessons: modulo_e1 },
    { number: "27", title: "VIVIENDO PARA DAR", lessons: modulo_e2 },
    { number: "28", title: "LA ANCIANIDAD BÍBLICA", lessons: modulo_e3 },
    { number: "29", title: "ALCANCEMOS UNA NUEVA GENERACIÓN", lessons: modulo_e4 },
    { number: "30", title: "CÓMO ADMINISTRAR LA IGLESIA PARA EL MAÑANA", lessons: modulo_e5 },
    { number: "31", title: "LA MINISTRACIÓN DE JÓVENES", lessons: modulo_e6 }
  ];

  // ==========================================
  // LÓGICA DEL BUSCADOR
  // ==========================================
  const filteredModules = allModulesData.map(mod => {
    if (!searchTerm.trim()) return mod;

    // Quita tildes y convierte a minúsculas
    const normalizeText = (text: string) => {
      return text
        .normalize("NFD") // Separa la letra de la tilde
        .replace(/[\u0300-\u036f]/g, "") // Borra todas las tildes sueltas
        .toLowerCase();
    };

    // Normalizamos la búsqueda del usuario y la separamos en palabras
    const searchWords = normalizeText(searchTerm).split(' ').filter(word => word.trim() !== '');

    // Mini-detector que normaliza el texto antes de comparar
    const matchesAllWords = (text: string) => {
      const normalizedText = normalizeText(text);
      return searchWords.every(word => normalizedText.includes(word));
    };

    // Filtramos MÓDULOS
    if (matchesAllWords(mod.title)) {
      return mod;
    }

    // Filtramos JORNADAS
    const filteredLessons = mod.lessons.filter(lesson => 
      matchesAllWords(lesson.title)
    );

    return { ...mod, lessons: filteredLessons };
    
  }).filter(mod => mod.lessons.length > 0);

  return (
    <div className="w-full px-6 py-12 md:py-20 flex flex-col items-center min-h-[60vh]">
      
      {/* El buscador (le pasamos el estado) */}
      <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />

      {/* Mensaje por si no hay resultados */}
      {filteredModules.length === 0 && (
        <div className="text-center mt-10">
          <p className="text-2xl font-bold text-dios-brown mb-2">No se encontraron resultados</p>
          <p className="text-gray-500">Prueba buscando con otras palabras como &quot;Jesús&quot;, &quot;Sanidad&quot; o &quot;Espíritu&quot;.</p>
        </div>
      )}

      {/* Los Módulos Generados Automáticamente */}
      <div className="w-full flex flex-col gap-4">
        {filteredModules.map(mod => (
          <Module 
            key={mod.number}
            number={mod.number} 
            title={mod.title} 
            lessons={mod.lessons} 
            isExpanded={searchTerm.length > 0} // Si hay texto en el buscador, se abre solo
            onSelectLesson={(lesson) => setSelectedLesson(lesson)}
          />
        ))}
      </div>

      <VideoModal 
        isOpen={selectedLesson !== null} 
        onClose={() => setSelectedLesson(null)} 
        title={selectedLesson?.title || ""}
        youtubeId={selectedLesson?.youtubeId}
        startTime={selectedLesson?.startTime} 
      />
    </div>
  );
}