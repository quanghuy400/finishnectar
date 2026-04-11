import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';

export default function SplashScreen({ navigation }) {

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Onboarding');
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>

      {/* Background */}
      <Image
        source={require('../assets/splash Screen.png')}
        style={styles.background}
      />

      {/* Logo chữ */}
      <Image
        source={require('../assets/Group 1.png')}
        style={styles.logo}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  logo: {
    position: 'absolute',
    alignSelf: 'center',
    top: '45%',
    width: 200,
    height: 80,
    resizeMode: 'contain',
  },
});