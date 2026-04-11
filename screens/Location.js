import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  FlatList,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Location({ navigation }) {
  const [zone, setZone] = useState('');
  const [area, setArea] = useState('');

  const [showZone, setShowZone] = useState(false);
  const [showArea, setShowArea] = useState(false);

  const zones = ['Zone 1', 'Zone 2', 'Zone 3'];
  const areas = ['Area A', 'Area B', 'Area C'];

  const renderItem = (item, setValue, closeModal) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        setValue(item);
        closeModal(false);
      }}
    >
      <Text style={styles.itemText}>{item}</Text>
    </TouchableOpacity>
  );

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

        {/* Map */}
        <Image
          source={require('../assets/illustration.png')}
          style={styles.map}
        />

        {/* Title */}
        <Text style={styles.title}>Select Your Location</Text>

        {/* Zone */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Your Zone</Text>

          <TouchableOpacity
            style={styles.dropdown}
            onPress={() => setShowZone(true)}
          >
            <Text style={styles.dropdownText}>
              {zone || 'Select your zone'}
            </Text>
            <Ionicons name="chevron-down" size={20} color="#888" />
          </TouchableOpacity>
        </View>

        {/* Area */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Your Area</Text>

          <TouchableOpacity
            style={styles.dropdown}
            onPress={() => setShowArea(true)}
          >
            <Text style={styles.dropdownText}>
              {area || 'Select your area'}
            </Text>
            <Ionicons name="chevron-down" size={20} color="#888" />
          </TouchableOpacity>
        </View>

        {/* Submit */}
        <TouchableOpacity
          style={styles.submitBtn}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>

      </View>

      {/* Modal Zone */}
      <Modal visible={showZone} transparent animationType="slide">
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <FlatList
              data={zones}
              keyExtractor={(item) => item}
              renderItem={({ item }) =>
                renderItem(item, setZone, setShowZone)
              }
            />
          </View>
        </View>
      </Modal>

      {/* Modal Area */}
      <Modal visible={showArea} transparent animationType="slide">
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <FlatList
              data={areas}
              keyExtractor={(item) => item}
              renderItem={({ item }) =>
                renderItem(item, setArea, setShowArea)
              }
            />
          </View>
        </View>
      </Modal>

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
    paddingTop: 120,
    paddingHorizontal: 20,
  },

  map: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
  },

  inputGroup: {
    marginBottom: 25,
  },

  label: {
    fontSize: 13,
    color: '#888',
    marginBottom: 5,
  },

  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
  },

  dropdownText: {
    fontSize: 16,
    color: '#333',
  },

  submitBtn: {
    marginTop: 30,
    height: 55,
    backgroundColor: '#4CAF6A',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  submitText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  /* Modal */
  modal: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },

  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  item: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },

  itemText: {
    fontSize: 16,
  },
});