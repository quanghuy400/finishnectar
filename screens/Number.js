import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Number({ navigation }) {
  const [phone, setPhone] = useState('');

  return (
    <View style={styles.container}>

      {/* Back */}
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      {/* Content */}
      <View style={styles.content}>
        
        <Text style={styles.title}>Enter your mobile number</Text>

        <Text style={styles.label}>Mobile Number</Text>

        {/* Input */}
        <View style={styles.inputContainer}>
          <View style={styles.flagBox}>
            <View style={styles.flagDot} />
          </View>

          <Text style={styles.prefix}>+880</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter number"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />
        </View>
      </View>

      {/* Next button */}
      <TouchableOpacity
        style={styles.nextBtn}
        onPress={() => navigation.navigate('Verification')}
      >
        <Ionicons name="arrow-forward" size={24} color="#fff" />
      </TouchableOpacity>

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
  justifyContent: 'flex-start', 
  paddingHorizontal: 20,
  paddingTop: 120,
},

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  label: {
    fontSize: 14,
    color: '#888',
    marginBottom: 10,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingBottom: 10,
  },

  flagBox: {
    width: 30,
    height: 20,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    marginRight: 8,
  },

  flagDot: {
    width: 10,
    height: 10,
    backgroundColor: 'red',
    borderRadius: 5,
  },

  prefix: {
    marginRight: 10,
    fontSize: 16,
  },

  input: {
    flex: 1,
    fontSize: 16,
  },

  nextBtn: {
    position: 'absolute',
  right: 20,
  bottom: 500,
  width: 65,
  height: 65,
  backgroundColor: '#4CAF6A',
  borderRadius: 50,
  justifyContent: 'center',
  alignItems: 'center',
  },
});