import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          source={require('../assets/images/profile.jpg')} // Replace with your profile picture image
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Hassen</Text>
      </View>
      <View style={styles.profileInfo}>
        <Text style={styles.infoTitle}>About Me</Text>
        <Text style={styles.infoText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non
          mi sed augue feugiat cursus.
        </Text>
        <Text style={styles.infoTitle}>Contact Information</Text>
        <Text style={styles.infoText}>Email: hassen.moussi@example.com</Text>
        <Text style={styles.infoText}>Phone: (216) 12345678</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileHeader: {
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75, // Half of width/height to make it a circle
    resizeMode: 'cover',
  },
  profileName: {
    marginTop: 12,
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileInfo: {
    padding: 16,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 12,
  },
});

export default Profile;
