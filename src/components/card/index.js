import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const List = ({title, image, rating}) => {
  return (
    <View style={styles.page}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.rating}>{rating}</Text>
      <Image source={{uri: image}} style={styles.poster}/>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: 'green',
    marginBottom: 10,
    flex: 1,
  },
  title: {
    fontSize: 18,
    color: 'white',
  },
  rating: {
    fontSize: 17,
    color: 'white',
  },
  poster: {
      width: 100,
      height: 100
  }
});
