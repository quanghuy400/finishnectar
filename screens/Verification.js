import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Verification({ navigation }) {
  const [code, setCode] = useState(['', '', '', '']);

  
  const inputs = useRef([]);

  const handleChange = (text, index) => {

    if (text.length > 1) {
      const newCode = text.slice(0, 4).split('');
      setCode(newCode);

      newCode.forEach((_, i) => {
        if (inputs.current[i]) {
          inputs.current[i].setNativeProps({ text: newCode[i] });
        }
      });
      return;
    }

    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    
    if (text && index < 3) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (e, index) => {

    if (e.nativeEvent.key === 'Backspace' && !code[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  return (
    <View style={styles.container}>

      {/* Back */}
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <View style={styles.content}>

        <Text style={styles.title}>Enter your 4-digit code</Text>

        <Text style={styles.desc}>
          Code sent to your phone
        </Text>

        {/* OTP */}
        <View style={styles.otpContainer}>
          {code.map((item, index) => (
            <TextInput
              key={index}
              ref={(ref) => (inputs.current[index] = ref)}
              style={styles.otpBox}
              keyboardType="number-pad"
              maxLength={1}
              value={item}
              onChangeText={(text) => handleChange(text, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
            />
          ))}
        </View>

        {/* Bottom row */}
        <View style={styles.bottomRow}>

          <TouchableOpacity>
            <Text style={styles.resend}>Resend Code</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.nextBtn}
            onPress={() => navigation.navigate('Location')}
          >
            <Ionicons name="arrow-forward" size={20} color="#fff" />
          </TouchableOpacity>

        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },

  backBtn: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 10,
  },

  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 120,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  desc: {
    fontSize: 14,
    color: '#888',
    marginBottom: 30,
  },

  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },

  otpBox: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 20,
    color: '#000', 
  },

  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  resend: {
    fontSize: 14,
    color: '#4CAF6A',
    fontWeight: '500',
  },

  nextBtn: {
    width: 60,
    height: 60,
    backgroundColor: '#4CAF6A',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',

    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
});