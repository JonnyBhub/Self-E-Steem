import { Collapsible } from '@/components/Collapsible';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, Button,Alert, Pressable } from 'react-native';
import ThemedLinkButton from '@/components/ThemedLinkButton';
import { Link } from 'expo-router';

export default function Funzone() {

    return (
        <ParallaxScrollView
        headerBackgroundColor={{ light: '#E5E1E5', dark: '#353636' }}
        headerImage={<Ionicons size={200} name="thunderstorm" style={styles.headerImage} />}>
             <Collapsible title="Hello world">
                <ThemedView>             
                    <ThemedText type="defaultSemiBold">Hello world</ThemedText>
                </ThemedView>
            </Collapsible>
            <ThemedLinkButton 
                title='Welcome'
                href = '/(tabs)/explore'
                onPress={() => Alert.alert('Welcome to the Funzone!')}
                >         
            </ThemedLinkButton>
            <Link href="/(tabs)/index" asChild>
                <Pressable>
                    <ThemedText>Click me!</ThemedText>
                </Pressable>
            </Link>
        </ParallaxScrollView>
    );

}

const styles = StyleSheet.create({
    headerImage: {
      color: '#FFD700',
      bottom: -20,
      left: 10,
      position: 'absolute',
    },
    titleContainer: {
      flexDirection: 'row',
      gap: 5,
    },
  });
  