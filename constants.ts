import { GraphData, NodeType } from './types';

export const INITIAL_DATA: GraphData = {
  nodes: [
    // --- SERVER LAYER ---
    {
      id: 'simorgh',
      label: 'Սիմորգ (Բարձրագույն Գիտակցություն)',
      type: NodeType.SERVER,
      description: 'Բարձրագույն իմաստության և մետա-ինտելեկտի արխետիպ: Ինտուիցիայի, խորաթափանցության և խորը առաջնորդության աղբյուր:',
      details: {
        layer: 'Ուղեղից Անդին',
        function: [
          'Սնուցում է Զալի ինտուիցիան',
          'Ուժեղացնում է Քեյ Խոսրովի հստակությունը',
          'Մեղմորեն մարտահրավեր է նետում Զահհակին / Ստվերային նախշերին',
          'Տրամադրում է «թարմացումներ» խորաթափանցության և երազների միջոցով'
        ]
      }
    },
    {
      id: 'khvarenah',
      label: 'Խվարենահ (Աստվածային Փառք)',
      type: NodeType.SERVER,
      description: 'Ճակատագրի և օրինական իշխանության ներքին զգացողություն: Ազդանշան, որ մենք համահունչ ենք մեր խորքային ուղուն:',
      details: {
        layer: 'Ուղեղից Անդին',
      }
    },

    // --- BRAIN KINGDOM (HARDWARE) ---
    { id: 'cortex', label: 'Կեղև (Գահասրահ)', type: NodeType.HARDWARE, description: 'Պլանավորում, լեզու, տրամաբանություն, երկարաժամկետ մտածողություն:' },
    { id: 'limbic', label: 'Լիմբիկ (Ռազմադաշտ)', type: NodeType.HARDWARE, description: 'Հույզեր, վախի արձագանքներ, կապվածություն, պարգևատրման որոնում:' },
    { id: 'brainstem', label: 'Ուղեղաբուն (Ամրոց)', type: NodeType.HARDWARE, description: 'Հիմնական գոյատևում, գրգռվածություն, ինքնավար կարգավորում:' },
    { id: 'corpus_callosum', label: 'Բրշտամարմին (Կամուրջ)', type: NodeType.HARDWARE, description: 'Միավորում է ռացիոնալ/ինտուիտիվ, ձախ/աջ մշակումը:' },

    // --- EXECUTIVE KINGS ---
    {
      id: 'kay_khosrow',
      label: 'Քեյ Խոսրով (Բանականություն)',
      type: NodeType.KING,
      description: 'Հանգիստ ռացիոնալ դատողություն և ամբողջական տեսլական:',
      details: {
        function: ['Հանգիստ ռացիոնալ դատողություն', 'Երկարաժամկետ հետևանքների գնահատում', 'Ամբողջ թագավորության միասնական տեսլական'],
        questions: ['«Ի՞նչն է այստեղ իրականում ճշմարիտ»:', '«Ո՞րն է ամենաիմաստուն քայլը երկարաժամկետ հեռանկարում»։']
      }
    },
    {
      id: 'zal',
      label: 'Զալ (Ռազմավարություն)',
      type: NodeType.KING,
      description: 'Օրինաչափությունների ճանաչում և ռազմավարական պլանավորում:',
      details: {
        function: ['Օրինաչափությունների ճանաչում', 'Համակարգային նախագծում և պլանավորում', 'Նուրբ ազդանշանների լսում (Սիմորգ)'],
        questions: ['«Ինչպե՞ս է այս համակարգը իրականում աշխատում»:', '«Ո՞րն է ամենախելացի քայլը այս կառուցվածքում»։']
      }
    },
    {
      id: 'rostam',
      label: 'Ռոստամ (Բնազդ և Գոյատևում)',
      type: NodeType.KING,
      description: 'Անմիջական պաշտպանություն և ֆիզիկական խիզախություն:',
      details: {
        function: ['Անմիջական պաշտպանություն', 'Կռվել/փախչել արձագանքներ', 'Մուտք դեպի ֆիզիկական ուժ'],
        questions: ['«Արդյո՞ք մենք ապահով ենք հենց հիմա»:', '«Ի՞նչ պետք է արվի կյանքը և սահմանները պաշտպանելու համար»։']
      }
    },
    {
      id: 'jamshid',
      label: 'Ջամշիդ (Երևակայություն)',
      type: NodeType.KING,
      description: 'Նորարարություն, գյուտարարություն և ապագայի տեսլական:',
      details: {
        function: ['Նորարարություն և նոր գաղափարներ', 'Գործիքների, աշխարհների, հնարավորությունների ստեղծում', 'Դեռևս գոյություն չունեցող ապագայի տեսլական'],
        questions: ['«Ինչի՞ կարող է սա վերածվել»:', '«Ինչպե՞ս կարող ենք կառուցել ավելի լավ բան»։']
      }
    },
    {
      id: 'farangis',
      label: 'Ֆարանգիս (Հույզեր)',
      type: NodeType.KING,
      description: 'Հույզերի հստակ զգացողություն և կապի ստեղծում:',
      details: {
        function: ['Սեփական հույզերի զգացում', 'Ուրիշների վիճակների ընկալում', 'Հոգատարության և նվիրվածության ստեղծում'],
        questions: ['«Ինչպե՞ս եմ ես սա զգում»:', '«Ինչպե՞ս է սա ազդում ուրիշների սրտերի վրա»։']
      }
    },
    {
      id: 'kay_kavous',
      label: 'Քեյ Կավուս (Սոցիալական Էգո)',
      type: NodeType.KING,
      description: 'Հեղինակություն, իմիջ և վարկանիշ:',
      details: {
        function: ['Հեղինակություն, իմիջ, պրեստիժ', 'Հիացմունքի արժանանալու ցանկություն', 'Ռիսկի դիմել կարգավիճակը բարձրացնելու համար'],
        questions: ['«Ինչպե՞ս եմ ես երևում նրանց աչքերում»:', '«Ի՞նչ կանի սա իմ իմիջի հետ»։']
      }
    },
    {
      id: 'faridun',
      label: 'Ֆարիդուն (Ինքնություն)',
      type: NodeType.KING,
      description: 'Կյանքի պատմություն և անձնական առասպել:',
      details: {
        function: ['Կյանքի պատմություն և անձնական առասպել', 'Ով եմ ես ըստ իս', 'Հիշողությունների կազմակերպում միասնական «ես»-ի մեջ'],
        questions: ['«Ո՞վ եմ ես այս պատմության մեջ»:', '«Ինչպիսի՞ մարդ է ինձ դարձնում այս գործողությունը»։']
      }
    },
    {
      id: 'zahhak_king',
      label: 'Զահհակ (Ստվերային Արքա)',
      type: NodeType.KING,
      description: 'Ստվերային ես-ը իշխանության ղեկին: Ճնշված մղումներ և ամոթ:',
      details: {
        function: ['Կախվածություն, ինքնադավաճանություն', 'Մակաբուծային սովորություններ', 'Ուշադրությունը կլանող կործանարար օղակներ'],
        questions: ['«Ինչպե՞ս կարող եմ հնարավորինս արագ փախչել այս զգացողությունից»:', '«Ի՞նչ կարող եմ վերցնել հիմա»։']
      }
    },
    {
      id: 'siyavash',
      label: 'Սիավուշ (Խիղճ)',
      type: NodeType.KING,
      description: 'Անմեղության, մաքրության և ճշմարտության ներքին զգացողություն:',
      details: {
        function: ['Անմեղության ներքին զգացողություն', 'Ազդարարում է արժեքների դավաճանությունը', 'Տառապում է, երբ համակարգը անարդար է'],
        questions: ['«Արդյո՞ք սա խորապես ճիշտ է ինձ համար»:', '«Արդյո՞ք ես դավաճանում եմ ինչ-որ սուրբ բան իմ ներսում»։']
      }
    },

    // --- HEROIC SUBSYSTEMS ---
    { id: 'sub_warrior', label: 'Ռազմիկի Ենթահամակարգ', type: NodeType.HEROIC, description: 'Խիզախություն, սահմանների հաստատում (Ռոստամի ընդլայնում)' },
    { id: 'sub_architect', label: 'Ճարտարապետի Ենթահամակարգ', type: NodeType.HEROIC, description: 'Համակարգերի նախագծում (Զալի ընդլայնում)' },
    { id: 'sub_creator', label: 'Արարչի Ենթահամակարգ', type: NodeType.HEROIC, description: 'Արվեստ, դիզայն, նորարարություն (Ջամշիդի ընդլայնում)' },
    { id: 'sub_healer', label: 'Բուժողի Ենթահամակարգ', type: NodeType.HEROIC, description: 'Հարաբերությունների վերականգնում (Ֆարանգիսի ընդլայնում)' },
    { id: 'sub_weaver', label: 'Պատմող (Story Weaver)', type: NodeType.HEROIC, description: 'Կյանքի պատմության թարմացում (Ֆարիդունի ընդլայնում)' },

    // --- SHADOW SUBSYSTEMS ---
    {
      id: 'fear_demon',
      label: 'Վախ (Սպիտակ Դև)',
      type: NodeType.SHADOW,
      description: 'Լիմբիկ նախազգուշացման համակարգ:',
      details: {
        healthyRole: 'Զգուշացնում է իրական վտանգի մասին',
        distortedRole: 'Պարալիզացում, աղետալի մտածողություն, մշտական սպառնալիքի որոնում'
      }
    },
    {
      id: 'guilt_wound',
      label: 'Մեղք (Սիավուշի Վերքը)',
      type: NodeType.SHADOW,
      description: 'Բարոյական շղթայի ազդանշան:',
      details: {
        healthyRole: 'Ազդարարում է ստանդարտին հակասող գործողություն, հրավիրում է ուղղման',
        distortedRole: 'Անվերջ ինքնապատիժ'
      }
    },
    {
      id: 'shame_snakes',
      label: 'Ամոթ (Զահհակի Օձերը)',
      type: NodeType.SHADOW,
      description: 'Խորքային ինքնության համապատասխանության ազդանշան:',
      details: {
        healthyRole: 'Ճանաչում է կապի խզումները (սահմանափակ)',
        distortedRole: '«Ես կոտրված եմ/անարժան եմ», դրդում է ինքնասաբոտաժի'
      }
    },

    // --- SABOTEURS ---
    { id: 'sudabeh', label: 'Սուդաբե (Աղավաղում)', type: NodeType.SABOTEUR, description: 'Մանիպուլյացիա, աղավաղում է ընկալումները ցանկությունը արդարացնելու համար:' },
    { id: 'garsivaz', label: 'Գարսիվազ (Դավաճան)', type: NodeType.SABOTEUR, description: 'Մասերը հանում է մեկը մյուսի դեմ, շշնջում է կասկածներ:' },
    { id: 'afrasiab', label: 'Աֆրասիաբ (Քաոս)', type: NodeType.SABOTEUR, description: 'Մշտական շարժում, ուշադրության շեղում, անհանգստություն:' },

    // --- GLOBAL AFFECT FIELDS ---
    { id: 'field_trust', label: 'Վստահություն / Անվտանգություն', type: NodeType.AFFECT, description: 'Թույլ է տալիս համագործակցություն և ճկուն մտածողություն:' },
    { id: 'field_connection', label: 'Կապվածություն', type: NodeType.AFFECT, description: 'Ազդում է ապրումակցման (էмпаթիայի) և ինքնության վրա:' },
    { id: 'field_joy', label: 'Ուրախություն / Կենսունակություն', type: NodeType.AFFECT, description: 'Ազդարարում է գործողության և ես-ի միջև համապատասխանությունը:' },
    { id: 'field_meaning', label: 'Իմաստ / Նպատակ', type: NodeType.AFFECT, description: 'Ստեղծվում է, երբ Արքաները ներդաշնակ են:' },

    // --- INPUT & MEMORY ---
    { id: 'inputs', label: 'Մուտքային Հոսք', type: NodeType.INPUT, description: 'Զգայական, սոցիալական և ներքին գրգռիչներ:' },
    { id: 'memory', label: 'Հիշողության Պահոց', type: NodeType.MEMORY, description: 'Դրվագային, հուզական և պատմողական հիշողություն:' },
    
    // --- PRINCIPLES ---
    { id: 'principle_balance', label: 'Համակարգային Հավասարակշռություն', type: NodeType.PRINCIPLE, description: 'Ոչ մի Արքա չպետք է իշխի մշտապես:' },
    { id: 'principle_awareness', label: 'Մաքուր Գիտակցում', type: NodeType.PRINCIPLE, description: 'Դուք Վկան եք, ոչ թե Արքան:' },

  ],
  links: [
    // Server Connections
    { source: 'simorgh', target: 'khvarenah', value: 1 },
    { source: 'simorgh', target: 'zal', value: 2 },
    { source: 'simorgh', target: 'kay_khosrow', value: 2 },
    
    // Hardware Connections
    { source: 'cortex', target: 'kay_khosrow', value: 1 },
    { source: 'cortex', target: 'zal', value: 1 },
    { source: 'limbic', target: 'rostam', value: 1 },
    { source: 'limbic', target: 'fear_demon', value: 1 },
    { source: 'brainstem', target: 'rostam', value: 1 },
    { source: 'corpus_callosum', target: 'cortex', value: 1 },
    { source: 'corpus_callosum', target: 'limbic', value: 1 },

    // Executive Interrelations
    { source: 'kay_khosrow', target: 'zal', value: 3 },
    { source: 'kay_khosrow', target: 'siyavash', value: 2 },
    { source: 'faridun', target: 'zal', value: 1 },
    { source: 'farangis', target: 'siyavash', value: 2 },
    { source: 'farangis', target: 'faridun', value: 2 },
    
    // Subsystem Connections
    { source: 'rostam', target: 'sub_warrior', value: 3 },
    { source: 'zal', target: 'sub_architect', value: 3 },
    { source: 'jamshid', target: 'sub_creator', value: 3 },
    { source: 'farangis', target: 'sub_healer', value: 3 },
    { source: 'faridun', target: 'sub_weaver', value: 3 },

    // Shadow/Saboteur Lines
    { source: 'rostam', target: 'fear_demon', value: 1 }, // Fear triggers Rostam
    { source: 'siyavash', target: 'guilt_wound', value: 2 },
    { source: 'zahhak_king', target: 'shame_snakes', value: 3 },
    { source: 'zahhak_king', target: 'sudabeh', value: 1 },
    { source: 'zahhak_king', target: 'afrasiab', value: 1 },
    { source: 'kay_kavous', target: 'garsivaz', value: 1 },

    // Global Fields
    { source: 'field_trust', target: 'rostam', value: 1 },
    { source: 'field_trust', target: 'kay_khosrow', value: 1 },
    { source: 'field_connection', target: 'farangis', value: 1 },
    { source: 'field_meaning', target: 'kay_khosrow', value: 1 },

    // Principles & Input
    { source: 'inputs', target: 'limbic', value: 1 },
    { source: 'inputs', target: 'cortex', value: 1 },
    { source: 'principle_awareness', target: 'simorgh', value: 1 },
    { source: 'memory', target: 'faridun', value: 1 },
    { source: 'memory', target: 'zahhak_king', value: 1 },
  ]
};