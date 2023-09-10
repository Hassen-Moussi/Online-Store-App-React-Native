import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Contact = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Contact Us</Text>
      <Text style={styles.text}>
        You can reach us via email or phone:
      </Text>
      <Text style={styles.text}>Email: contact@example.com</Text>
      <Text style={styles.text}>Phone: +1 (123) 456-7890</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Contact;
