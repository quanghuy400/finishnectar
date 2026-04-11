import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function SignIn({ navigation }) {
  return (
    <View style={styles.container}>

      {/* Nửa trên - ảnh hoa quả */}
      <View style={styles.top}>
        <Image
          source={require('../assets/Mask Group.png')}
          style={styles.topImage}
        />
      </View>

      {/* Nửa dưới */}
      <View style={styles.bottom}>

        {/* Ảnh "Get your..." */}
        <Image
          source={require('../assets/Get your groceries with nectar.png')}
          style={styles.getYour}
        />

        {/* Ảnh số điện thoại + cờ */}
        <TouchableOpacity
          onPress={() => navigation.navigate('Number')}
        >
          <Image
            source={require('../assets/Group 6798.png')}
            style={styles.phone}
          />
        </TouchableOpacity>

        {/* Ảnh "or connect" */}
        <Image
          source={require('../assets/Or connect with social media.png')}
          style={styles.or}
        />

        {/* Login Google */}
        <TouchableOpacity>
          <Image
            source={require('../assets/google.png')}
            style={styles.social}
          />
        </TouchableOpacity>

        {/* Login Facebook */}
        <TouchableOpacity>
          <Image
            source={require('../assets/facebook.png')}
            style={styles.social}
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

  /* Nửa trên */
  top: {
    flex: 1,
  },

  topImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  /* Nửa dưới */
  bottom: {
    flex: 1.2,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 30,
  },

  getYour: {
    width: 250,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 20,
  },

  phone: {
    width: 300,
    height: 60,
    resizeMode: 'contain',
    marginBottom: 20,
  },

  or: {
    width: 200,
    height: 40,
    resizeMode: 'contain',
    marginBottom: 20,
  },

  social: {
    width: 300,
    height: 60,
    resizeMode: 'contain',
    marginBottom: 15,
  },
});