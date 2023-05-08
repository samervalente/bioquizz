

export interface Question {
    id:number;
    title: string;
    imageUrl:string;
    alternatives: string[];
    correctAlternative: number | null;
    referenceAlternativeTitle?:string;
    reference?: Question
    // level: "Fácil" | "Média" | "Difícil";
}