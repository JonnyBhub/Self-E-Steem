import React, { useState, useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';
import { AnswerOptions, Question, Questions } from '@/interfaces/questions';
import questionList from '../assets/questions/questions.json';
import AnswerText from './AnswerText';




export default function QuestionCard(props: any) {
    const [question, setQuestion] = useState<Question>(questionList.questions[0]);
    const randomQuestionNumber = Math.floor(Math.random() * questionList.questions.length);


    useEffect(() => {
        return () => {
            if (questionList.questions.length > 0) {
                setQuestion(questionList.questions[randomQuestionNumber]);
            }
        }
    }, []);

    const options = question.answerOptions.slice().sort(() => Math.random() - 0.5);
    
    return (
        <>
            <ThemedView>
                <View style ={styles.question}>
                    <ThemedText type='subtitle'>{question.questionText}</ThemedText>
                </View>

                
            </ThemedView>
            {options.map((option, index) => (
                <AnswerText key={String.fromCharCode(97 + index).toUpperCase()}answers={option} index={index}/>
            ))}
        </>
    );
}

const styles = StyleSheet.create({
    question : {
        borderBottomWidth: 1,
        borderBottomColor: 'black'
    }
});