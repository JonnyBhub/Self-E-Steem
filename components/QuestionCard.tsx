import React, { useState, useEffect} from 'react';
import { View } from 'react-native';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';




export default function QuestionCard(props: any) {

    const questionList = require('../assets/questions/questions.json')
    const [question, setQuestion] = useState(questionList.questions[0].questionText);

    return (
        <ThemedView>
            <ThemedText>{question}</ThemedText>
        </ThemedView>
        
    );
}