import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.page}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  page: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: 'green'
  },
  title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white'
  }
});
