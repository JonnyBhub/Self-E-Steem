export interface questions {
    questions: question[];
}

export interface answerOptions {
    answertext: string;
    isCorrect: boolean;
}

export interface question {
    questiontext: string;
    answerOptions: answerOptions[];
}