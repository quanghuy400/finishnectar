import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Signup({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [secure, setSecure]     = useState(true);

  // Kiểm tra email hợp lệ
  const emailValid = /\S+@\S+\.\S+/.test(email);

  return (
    <ImageBackground
      source={require('../assets/Mask Group (1).png')}
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.overlay} />

      <View style={styles.content}>

        {/* Logo */}
        <Image
          source={require('../assets/Group.png')}
          style={styles.logo}
        />

        {/* Title */}
        <Text style={styles.title}>Sign Up</Text>
        <Text style={styles.subtitle}>Enter your credentials to continue</Text>

        {/* Username */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            placeholder="Afsar Hossen Shuvo"
            placeholderTextColor="#aaa"
            value={username}
            onChangeText={setUsername}
          />
        </View>

        {/* Email */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email</Text>
          <View style={styles.rowField}>
            <TextInput
              style={[styles.input, { flex: 1 }]}
              placeholder="imshuvo97@gmail.com"
              placeholderTextColor="#aaa"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
            {/* Icon check nếu email hợp lệ */}
            {emailValid && (
              <Ionicons name="checkmark" size={20} color="#4CAF6A" />
            )}
          </View>
        </View>

        {/* Password */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.rowField}>
            <TextInput
              style={[styles.input, { flex: 1 }]}
              placeholder="••••••••"
              placeholderTextColor="#aaa"
              secureTextEntry={secure}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => setSecure(!secure)}>
              <Ionicons
                name={secure ? 'eye-off' : 'eye'}
                size={20}
                color="#888"
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Terms */}
        <Text style={styles.terms}>
          By continuing you agree to our{' '}
          <Text style={styles.link}>Terms of Service</Text>
          {'\n'}and{' '}
          <Text style={styles.link}>Privacy Policy.</Text>
        </Text>

        {/* Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        {/* Already have account */}
        <View style={styles.loginRow}>
          <Text style={styles.loginText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginLink}>Singup</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ImageBackground>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255,255,255,0.85)',
  },

  content: {
    flex: 1,
    paddingTop: 100,
    paddingHorizontal: 20,
    zIndex: 1,
  },

  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 16,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#111',
    marginBottom: 4,
  },

  subtitle: {
    fontSize: 13,
    color: '#888',
    marginBottom: 28,
  },

  inputGroup: {
    marginBottom: 20,
  },

  label: {
    fontSize: 13,
    color: '#666',
    marginBottom: 5,
  },


  input: {
    borderBottomWidth: 1,
    borderColor: '#050505',
    fontSize: 16,
    color: '#000',
    paddingVertical: 8,
    width: '100%',
  },


  rowField: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  terms: {
    fontSize: 12,
    color: '#666',
    marginBottom: 24,
    lineHeight: 18,
  },

  link: {
    color: '#4CAF6A',
  },

  button: {
    height: 55,
    backgroundColor: '#4CAF6A',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  loginRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  loginText: {
    fontSize: 13,
    color: '#555',
  },

  loginLink: {
    fontSize: 13,
    color: '#4CAF6A',
    fontWeight: 'bold',
  },
});