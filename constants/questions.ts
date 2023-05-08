import { Question } from "@/protocols/question";

export const questions: Question[] | any[] = [
  {
    id: 1,
    title: "Qual anfíbio não tem cauda na fase adulta?",
    alternatives: ["Sapo ", "Salamandra", "Cecília"],
    imageUrl:'https://thumbs.dreamstime.com/b/salamander-de-inc%C3%AAndio-salamandra-do-131676373.jpg',
    correctAlternative: 0,
  },
  {
    id: 2,
    title: "Quais são os animais que fazem parte do grupo dos anfíbios?",
    imageUrl:'https://1.bp.blogspot.com/-nq_CP2eMyO4/UE6Z5mMwvOI/AAAAAAAAAQ8/avx93VfHtRQ/s1600/anfibios.png',
    alternatives: [
      "Sapo, salamandra e cecília ",
      "Sapo, lagartixa e cecília",
      "Sapo, cobra e salamandra",
    ],
    correctAlternative: 0,
  },
  {
    id: 3,
    imageUrl:'https://thumbs.dreamstime.com/b/alimenta%C3%A7%C3%A3o-dos-anf%C3%ADbios-48493892.jpg',
    title: "Acerca da alimentação, a maiorida dos anfíbios são:",
    alternatives: ["Herbivoros", "Carnívoros ", "Onívoro"],
    correctAlternative: 1,
  },
  {
    id: 4,
    title: "As salamandras fazem parte de que grupo?",
    imageUrl:'https://www.pngmart.com/files/3/Salamander-PNG-Photos.png',
    alternatives: [
      "Anura ou salientia",
      "Urodela ou caudata ",
      "Apoda ou gymnophiona",
    ],
    correctAlternative: 1,
  },
  {
    id: 5,
    title: "As cecílias fazem parte de que grupo?",
    alternatives: [
      "Apoda ou gymnophiona ",
      "Urodela ou caudata",
      "Anura ou salientia",
    ],
    imageUrl:'https://s3.static.brasilescola.uol.com.br/img/2017/11/cecilia.jpg',
    correctAlternative: 0,
  },
  {
    id: 6,
    title:
      "Quais dos representantes do grupo anfíbia que possuem escamas internas?",
    alternatives: ["Sapos", "Pererecas", "Oxalote", "Salamandras", "Cecília"],
    imageUrl:'https://images.vexels.com/media/users/3/213078/isolated/preview/9264b4d5937dea72c74373c802094ce2-axolotl-fofo-colorido.png',
    correctAlternative: 4,
  },
  {
    id: 7,
    title: "Quais algumas das sinapormorfias que juntam os grupos de anfíbios?",
    alternatives: [
      "Pele úmida, herbívoros, presença de pernas posteriores maiores",
      "Pele úmida, respiração cutânea e carnívoros  ",
    ],
    imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Amphibians.png/1200px-Amphibians.png',
    correctAlternative: 1,
  },
  {
    id: 8,
    title:
      "Qual a estratégia na qual alguns anfíbios aproveitam a sua cor para se camuflar?",
    alternatives: [
      "Coloração cromada",
      "Coloração aposemática",
      "Coloração críptica ",
    ],
    imageUrl:'https://midias.correiobraziliense.com.br/_midias/png/2022/08/17/675x450/1_low_res_rhacophorus_omeimontis__photo_by_chuan_chen__jpg-26251268.png?20220817172718?20220817172718',
    correctAlternative: 2,
  },
  {
    id: 9,
    title: "Os anfíbios atuais fazem parte dos Lissamphybia?",
    alternatives: ["Falso", "Verdadeiro "],
    imageUrl:'/lissamphibia.png',
    correctAlternative: 1,
  },
  {
    id: 10,
    title:
      "Qual é uma das caracteristicas que aproxima as cecílias dos outros grupos de anfíbios?",
    alternatives: [
      "A presença de patas",
      "Presença de dentes",
      "Tentáculos quimiossensoriais ",
    ],
    imageUrl:'https://www.elcolombiano.com/documents/10157/0/768x511/0c0/0d0/none/11101/LKLV/image_content_34654225_20191120192534.jpg',
    correctAlternative: 2,
  },
  {
    id: 11,
    title: "Qual é o órgão de copula das cecílias?",
    alternatives: ["Clasper", "Protração", "Falodeu "],
    imageUrl:'/cecilia_11.jpg',
    correctAlternative: 2,
  },
  {
    id: 12,
    title: "Essa é difícil... ache o anuro! Achou?",
    alternatives: ["Sim!", "Não!"],
    imageUrl: "/find.jpeg",
    correctAlternative: null,
    reference: {
      id: 13,
      title:
        "Bem aqui!! Agora me diga, qual é o nome dado a esse tipo de estratégia no qual o animal usa a sua própria coloração para se camuflar no ambiente?",
      alternatives: [
        "Coloração críptica",
        "Coloração aposemática",
        "Coloração estratégica",
      ],
      imageUrl: "/founded.jpeg",
      referenceAlternativeTitle:
        "Qual é o nome dado a esse tipo de estratégia no qual o animal usa a sua própria coloração para se camuflar no ambiente?",
      correctAlternative: 0,
    },
  },
  {
    id: 14,
    title:
      "Qual o nome dessa estratégia na qual os animais exibem uma coloração de aviso quando ameaçados por algum predador?",
    alternatives: [
      "Coloração cromada",
      "Coloração aposemática",
      "Coloração críptica",
    ],
    imageUrl: "/14.jpeg",
    correctAlternative: 1,
  },
  {
    id: 15,
    title:
      "Essa é pra complicar...quais são as PRINCIPAIS diferenças entre sapo e rã ?",
    alternatives: [
      " Os Sapo possui as pernas traseiras mais longas, vivem mais em ambientes aquáticos e possuem membrana interdigital",
      " Os sapo tem a pele mais grossa, rugosa e com glândulas de veneno mais evidentes",
      " As Rãs preferem ambientes mais terrestres e não possuem membranas interdigitais",
      "Os Sapos são maiores e as rãs menores",
    ],
    imageUrl: "/15.jpeg",
    correctAlternative: 1,
  },
  {
    id: 16,
    title: "O que é o que é.... é uma rã, um sapo ou perereca?",
    alternatives: ["Rã", "Sapo", "Perereca"],
    imageUrl: "/16.jpeg",
    correctAlternative: 0,
  },
  {
    id: 17,
    title:
      "O grupo ancentral mais próximo do qual os anfíbios são derivados é: ",
    alternatives: ["Reptilomorpha", "Batrachomorpha"],
    imageUrl: "/17.jpeg",
    correctAlternative: 1,
  },
  {
    id: 18,
    title:
      "Os anfíbios são atualmente os únicos vertebrados a apresentarem uma transição da água para a terra tanto em sua ontogenia quanto em sua filogenia. Pensando nisso, quais foram os possíveis motivos  que levaram a essa mudança de habitat",
    alternatives: [
      "O aumento do nível do mar incentivou a exploração de novos nichos",
      "A maior disposição de comida, oxigênio e a menor presença de predadores  no ambiente terrestres",
      "O alimento terrestre era mais nutritivo, visto que se alimentavam principalmente de insetos",
    ],
    imageUrl: "/18.jpeg",
    correctAlternative: 1,
  },
  {
    id: 19,
    title: "Hora do QUEM É ESTE POKEMON?! Preparado?",
    imageUrl:'https://i0.wp.com/multarte.com.br/wp-content/uploads/2019/03/pokemon-png-logo.png?fit=2000%2C736&ssl=1',
    alternatives: ["Vamos lá!"],
    correctAlternative: null,
    reference: {
      id: 20,
      title: "Quem é este pokemon?! Possui o corpo alongado; quatro patas funcionais; algumas são venenosas; podem realizar pedomorfose, ou seja, preservam características de seu estado larval na fase adulta como as brânquias e podem medir de 14 a 45 cm",
      alternatives: [  "Sapo-pipa" , "Salamandra", "Girino", "Sapo-flexa", "salamandra de fogo", "Rã Touro"],
      imageUrl:"/pokemon.jpeg",
      correctAlternative: 1
    },
  },
];
