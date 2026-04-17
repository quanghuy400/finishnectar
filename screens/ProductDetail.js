import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProductDetail({ navigation, route }) {
  const { item } = route.params;
  const [qty, setQty] = useState(1);

  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} />
        </TouchableOpacity>

        <Ionicons name="share-outline" size={22} />
      </View>

      {/* IMAGE */}
      <View style={styles.imageBox}>
        <Image source={item.image} style={styles.image} />
      </View>

      {/* DOT */}
      <View style={styles.dot} />

      {/* CONTENT */}
      <View style={styles.content}>

        {/* NAME + HEART */}
        <View style={styles.rowBetween}>
          <View>
            <Text style={styles.name}>Naturel {item.name}</Text>
            <Text style={styles.sub}>1kg, Price</Text>
          </View>

          <Ionicons name="heart-outline" size={22} color="#333" />
        </View>

        {/* QTY + PRICE */}
        <View style={styles.qtyRow}>
          <View style={styles.qtyBox}>
            <TouchableOpacity onPress={() => setQty(Math.max(1, qty - 1))}>
              <Ionicons name="remove" size={18} />
            </TouchableOpacity>

            <Text style={styles.qtyText}>{qty}</Text>

            <TouchableOpacity onPress={() => setQty(qty + 1)}>
              <Ionicons name="add" size={18} color="#4CAF6A" />
            </TouchableOpacity>
          </View>

          <Text style={styles.price}>$4.99</Text>
        </View>

        {/* PRODUCT DETAIL */}
        <View style={styles.block}>
          <View style={styles.rowBetween}>
            <Text style={styles.blockTitle}>Product Detail</Text>
            <Ionicons name="chevron-down" size={18} />
          </View>

          <Text style={styles.desc}>
            Apples Are Nutritious. Apples May Be Good For Weight Loss.
            Apples May Be Good For Your Heart. As Part Of A Healthful
            And Varied Diet.
          </Text>
        </View>

        {/* NUTRITIONS */}
        <View style={styles.block}>
          <View style={styles.rowBetween}>
            <Text style={styles.blockTitle}>Nutritions</Text>
            <Text style={styles.tag}>100gr</Text>
          </View>
        </View>

        {/* REVIEW */}
        <View style={styles.block}>
          <View style={styles.rowBetween}>
            <Text style={styles.blockTitle}>Review</Text>

            <View style={{ flexDirection: 'row' }}>
              {[1,2,3,4,5].map(i => (
                <Ionicons key={i} name="star" size={16} color="#FF8C42" />
              ))}
            </View>
          </View>
        </View>

      </View>

      {/* BUTTON */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Add To Basket</Text>
      </TouchableOpacity>

    </View>
  );
}

/* STYLE */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 50,
  },

  imageBox: {
    backgroundColor: '#f2f2f2',
    margin: 20,
    borderRadius: 20,
    alignItems: 'center',
    padding: 30,
  },

  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },

  dot: {
    width: 6,
    height: 6,
    backgroundColor: '#4CAF6A',
    alignSelf: 'center',
    borderRadius: 3,
    marginBottom: 10,
  },

  content: {
    paddingHorizontal: 20,
  },

  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  sub: {
    color: '#888',
    marginTop: 5,
  },

  qtyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },

  qtyBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 40,
  },

  qtyText: {
    marginHorizontal: 15,
    fontSize: 16,
  },

  price: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  block: {
    borderTopWidth: 1,
    borderColor: '#eee',
    paddingVertical: 15,
  },

  blockTitle: {
    fontWeight: 'bold',
  },

  desc: {
    color: '#777',
    marginTop: 10,
    fontSize: 13,
    lineHeight: 18,
  },

  tag: {
    backgroundColor: '#eee',
    paddingHorizontal: 8,
    borderRadius: 5,
    fontSize: 12,
  },

  button: {
    backgroundColor: '#4CAF6A',
    margin: 20,
    borderRadius: 30,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});