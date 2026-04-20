import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StorageService } from '../services/storageService';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secure, setSecure] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Lỗi', 'Vui lòng nhập email và mật khẩu!');
      return;
    }

    try {
      setLoading(true);
      // ✅ Lưu user vào AsyncStorage
      await StorageService.saveUser({ email, name: 'User' });
      navigation.replace('MainTab');
    } catch (e) {
      Alert.alert('Lỗi', 'Đăng nhập thất bại!');
    } finally {
      setLoading(false);
    }
  };

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
        <Text style={styles.title}>Log In</Text>

        {/* Email */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="imshuvo97@gmail.com"
            placeholderTextColor="#aaa"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {/* Password */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordRow}>
            <TextInput
              style={styles.input}
              placeholder="********"
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

        {/* Forgot */}
        <View style={styles.forgotRow}>
          <TouchableOpacity>
            <Text style={styles.forgot}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        {/* Button */}
        <TouchableOpacity
          style={[styles.button, loading && { opacity: 0.7 }]}
          onPress={handleLogin}
          disabled={loading}
        >
          <Text style={styles.buttonText}>
            {loading ? 'Đang đăng nhập...' : 'Log In'}
          </Text>
        </TouchableOpacity>

        {/* Signup */}
        <View style={styles.signupRow}>
          <Text style={styles.signupText}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.signupLink}>Signup</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255,255,255,0.85)',
  },
  content: {
    flex: 1, paddingTop: 100,
    paddingHorizontal: 20, zIndex: 1,
  },
  logo: {
    width: 110, height: 110,
    resizeMode: 'contain',
    alignSelf: 'center', marginBottom: 20,
  },
  title: {
    fontSize: 22, fontWeight: 'bold',
    alignSelf: 'center', marginBottom: 30,
  },
  inputGroup: { marginBottom: 20 },
  label: { fontSize: 13, color: '#666', marginBottom: 5 },
  input: {
    borderBottomWidth: 1, borderColor: '#050505',
    fontSize: 16, color: '#000',
    paddingVertical: 8, width: '100%',
  },
  passwordRow: { flexDirection: 'row', alignItems: 'center' },
  forgotRow: { alignItems: 'flex-end', marginBottom: 25 },
  forgot: { fontSize: 13, color: '#555' },
  button: {
    height: 55, backgroundColor: '#4CAF6A',
    borderRadius: 30, justifyContent: 'center',
    alignItems: 'center', marginBottom: 20,
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  signupRow: { flexDirection: 'row', justifyContent: 'center' },
  signupText: { fontSize: 13, color: '#555' },
  signupLink: { fontSize: 13, color: '#4CAF6A', fontWeight: 'bold' },
});