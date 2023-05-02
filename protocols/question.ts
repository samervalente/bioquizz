

export interface Question {
    id:number;
    title: string;
    imageUrl?:string;
    alternatives: string[];
    correctAlternative: number;
    // level: "Fácil" | "Média" | "Difícil";
}