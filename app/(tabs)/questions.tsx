import React, { useState, useEffect} from 'react';
import { Collapsible } from '@/components/Collapsible';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, Alert, Pressable } from 'react-native';
import ThemedButton  from '@/components/ThemedButton';
import QuestionCard from '@/components/QuestionCard';

export default function Questions() {
    const [questionsOpen, setQuestionsOpen] = useState(false);

    useEffect(() => {
        return () => {
            setQuestionsOpen(false);
        }
    }, []);

    return (
        <ParallaxScrollView
        headerBackgroundColor={{ light: '#E5E1E5', dark: '#353636' }}
        headerImage={<Ionicons size={200} name="receipt-sharp" style={styles.headerImage} />}>
            {
                !questionsOpen &&  
                    <ThemedButton 
                        title='Open Questions'
                        onPress={() => setQuestionsOpen(true)}
                        >         
                    </ThemedButton>
            }
            {
                questionsOpen && <QuestionCard />
            }           
        </ParallaxScrollView>
    );

}

const styles = StyleSheet.create({
    headerImage: {
      color: 'purple',
      bottom: -20,
      left: 10,
      position: 'absolute',
    },
    titleContainer: {
      flexDirection: 'row',
      gap: 5,
    },
  });
  