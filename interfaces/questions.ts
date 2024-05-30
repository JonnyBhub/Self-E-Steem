export interface Questions {
    questions: Question[];
}

export interface AnswerOptions {
    answerText: string;
    isCorrect: boolean;
}

export interface Question {
    questionText: string;
    answerOptions: AnswerOptions[];
}