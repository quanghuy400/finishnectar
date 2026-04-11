import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function Onboarding({ navigation }) {
  return (
    <View style={styles.container}>

      {/* Background */}
      <Image
        source={require('../assets/8140 1.png')}
        style={styles.background}
      />

      {/* Nội dung */}
      <View style={styles.content}>

        {/* Ảnh Welcome */}
        <Image
          source={require('../assets/Welcome to our store.png')}
          style={styles.welcome}
        />

        {/* Ảnh text nhỏ */}
        <Image
          source={require('../assets/Ger your groceries in as fast as one hour.png')}
          style={styles.subtext}
        />

        {/* Button Get Started */}
        <TouchableOpacity
          onPress={() => navigation.navigate('SignIn')}
        >
          <Image
            source={require('../assets/button.png')}
            style={styles.button}
          />
        </TouchableOpacity>

      </View>

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

  content: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 60,
  },

  welcome: {
    width: 250,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },

  subtext: {
    width: 280,
    height: 50,
    resizeMode: 'contain',
    marginBottom: 30,
  },

  button: {
    width: 200,
    height: 60,
    resizeMode: 'contain',
  },
});