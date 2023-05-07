import { Question } from "@/protocols/question";

export const questions: Question[] = [
    {
        id:1,
        title: 'Qual anfíbio não tem cauda na fase adulta?',
        alternatives:[ "Sapo ", "Salamandra", "Cecília" ],
        correctAlternative: 0,
        
    },
    {
        id:2,
        title: 'Quais são os animais que fazem parte do grupo dos anfíbios?',
        alternatives:[ "Sapo, salamandra e cecília ", "Sapo, lagartixa e cecília", "Sapo, cobra e salamandra" ],
        correctAlternative: 0,
        
    },   {
        id:3,
        title: 'Acerca da alimentação, a maiorida dos anfíbios são:',
        alternatives:[ "Herbivoros", "Carnívoros ", "Onívoro" ],
        correctAlternative: 1,
        
    },   {
        id:4,
        title: 'As salamandras fazem parte de que grupo?',
        alternatives:[ "Anura ou salientia", "Urodela ou caudata ", "Apoda ou gymnophiona" ],
        correctAlternative: 1,
        
    },   {
        id:5,
        title: 'As cecílias fazem parte de que grupo?',
        alternatives:[ "Apoda ou gymnophiona ", "Urodela ou caudata", "Anura ou salientia" ],
        correctAlternative: 0,
        
    },   {
        id:6,
        title: 'Quais dos representantes do grupo anfíbia que possuem escamas internas?',
        alternatives:[ "Sapos", "Pererecas", "Oxalote", "Salamandras", "Cecília" ],
        correctAlternative: 4,
        
    },   {
        id:7,
        title: 'Quais algumas das sinapormorfias que juntam os grupos de anfíbios?',
        alternatives:["Pele úmida, herbívoros, presença de pernas posteriores maiores" , "Pele úmida, respiração cutânea e carnívoros  "],
        correctAlternative: 1,
        
    },   {
        id:8,
        title: 'Qual a estratégia na qual alguns anfíbios aproveitam a sua cor para se camuflar?',
        alternatives:[ "Coloração cromada", "Coloração aposemática", "Coloração críptica " ],
        correctAlternative: 2,
        
    },   {
        id:9,
        title: 'Os anfíbios atuais fazem parte dos Lissamphybia?',
        alternatives:[ "Falso", "Verdadeiro " ],
        correctAlternative: 1,
        
    },{
        id:10,
        title: 'Qual é uma das caracteristicas que aproxima as cecílias dos outros grupos de anfíbios ',
        alternatives:[ "A presença de patas", "Presença de dentes", "Tentáculos quimiossensoriais " ],
        correctAlternative: 2,
        
    },   {
        id:11,
        title: 'Qual é o órgão de copula das cecílias?',
        alternatives:[ "Clasper", "Protração", "Falodeu " ],
        correctAlternative: 2,
    },
    {
        id:12,
        title: 'Essa é difícil... ache o anuro! Achou?',
        alternatives:['Sim!', 'Não!'],
        imageUrl: '/find.jpeg',
        correctAlternative: null,
        reference: {
            id: 13, 
            title: 'Bem aqui!! Agora me diga, qual é o nome dado a esse tipo de estratégia no qual o animal usa a sua própria coloração para se camuflar no ambiente?',
            alternatives:['Coloração críptica', 'Coloração aposemática', 'Coloração estratégica'],
            imageUrl: '/founded.jpeg',
            referenceAlternativeTitle:'Qual é o nome dado a esse tipo de estratégia no qual o animal usa a sua própria coloração para se camuflar no ambiente?',
            correctAlternative: 0
        }
    }
]