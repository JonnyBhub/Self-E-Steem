import { useRef } from 'react';
import { AnswerOptions } from '@/interfaces/questions';
import LottieView from 'lottie-react-native';
import React from 'react';
import { Pressable, StyleSheet, Text, View} from 'react-native';

interface AnswerTextProps {
    answers: AnswerOptions;
    index: number;
}

export default function AnswerText({answers, index} : AnswerTextProps) {
    const [selected, setSelected] = React.useState(false);
    const confettiRef = useRef<LottieView>(null);

    const onPress = () => {
        setSelected(true);
    }
    const onPressOut = () => {
        if (answers.isCorrect && selected) 
            confettiRef.current?.play();
    }
    
    return (
        <View style={styles.view}>
            <Pressable 
                style={[styles.button, (selected ? (answers.isCorrect ? styles.answerCorrect : styles.answerWrong) : {})]} 
                onPressIn={onPress}
                onPressOut={onPressOut}>
                <Text style={[styles.answerText, (selected ? (answers.isCorrect ? styles.answerCorrect : styles.answerWrong) : {}) ]}>
                    {String.fromCharCode(97 + index).toUpperCase()} - {answers.answerText}
                </Text>
            </Pressable>
            {answers.isCorrect && selected &&
                <LottieView 
                source={require('../assets/animations/confetti2.json')} 
                autoPlay ={false}
                loop ={false}
                ref={confettiRef} 
                style={styles.lottie}/>
            }
        </View>

    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: { 
        backgroundColor: 'purple',
        padding: 10,
        margin: 5,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'purple',
        width: '80%',
    },
    lottie : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1000,
        pointerEvents: 'none',
    },
    answerText: {
        color: 'white',
        fontSize: 20,
    },
    answerWrong:{
        color: 'red',
        borderColor: 'red',
        backgroundColor: 'white',
    },
    answerCorrect:{
        color: 'green',
        borderColor: 'green',
        backgroundColor: 'white',
    }
});