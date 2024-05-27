import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { ThemedText } from "./ThemedText";


export default function QuestionAnswer(props : {answer: string, onPress: () => void}){

  const {answer, onPress} = props;

  return (
        <Pressable onPress={onPress} style={styles.pressable}>
            <ThemedText type = "answer">{answer}</ThemedText>
        </Pressable>
  );
}

const styles = StyleSheet.create({
    pressable: {
        padding: 10,
        margin: 10,
        backgroundColor: 'purple',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    }
});
