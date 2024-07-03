import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {styles} from "../../theme/style"

const HomeCard = () => {
  return (
    <ScrollView style={styles.cardContainer}>
      <View style={styles.cardContent}>
        <View style={styles.cardBox}>
          <Image
            style={styles.cardImg}
            source={require('../../assets/health.png')}
          />
        </View>
        <View style={styles.cardBox}>
          <Image
            style={styles.cardImg}
            source={require('../../assets/health.png')}
          />
        </View>
      </View>
      <View style={styles.cardContent}>
        <View style={styles.cardBox}>
          <Image
            style={styles.cardImg}
            source={require('../../assets/health.png')}
          />
        </View>
        <View style={styles.cardBox}>
          <Image
            style={styles.cardImg}
            source={require('../../assets/health.png')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeCard;
