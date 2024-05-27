import React, {useRef} from 'react';
import { Text, StyleSheet, Pressable, View, Animated } from 'react-native';
import { router } from 'expo-router';
import LottieView from 'lottie-react-native';

export default function ThemedLinkButton(props : {title: string, href: string, onPress: () => void}){

  const confettiRef = useRef<LottieView>(null);
  const animatedValue = useRef(new Animated.Value(1)).current;
  const {title, href} = props;

  function onPressIn(){
      Animated.spring(animatedValue, {
          toValue: 0.7,
          useNativeDriver: true,
          friction: 3,
          tension: 40
      }).start();
  }

  function onPressOut(){
      Animated.spring(animatedValue, {
          toValue: 1,
          useNativeDriver: true,
          friction: 2,
          tension: 10
      }).start(() => {
        router.navigate(href); // navigate to new page when animation is done
      });
  }

  const animatedStyle = {
      transform: [{ scale: animatedValue }]
  }

  
  return (
    <>
      <Animated.View style ={[styles.container, animatedStyle]}>
          <Pressable style={({pressed}) => [{backgroundColor: pressed ? 'black' : 'purple'}, styles.button]} onPressIn={onPressIn} onPressOut={onPressOut}>
              <Text style={styles.text}>{title}</Text>
          </Pressable>
      </Animated.View>
      <LottieView 
        source={require('../assets/animations/confetti2.json')} 
        autoPlay ={false}
        loop ={false}
        ref={confettiRef} 
        style={styles.lottie}/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    shadowColor: 'black',
    shadowOffset: { width: -3, height: 5},
    shadowRadius: 6,
    shadowOpacity: 0.6,
    backgroundColor: 'purple',
    margin: 10,
  },
  text: {
    fontSize: 15,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  lottie: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000,
    pointerEvents: 'none',
  },
});
