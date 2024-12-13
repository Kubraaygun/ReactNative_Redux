//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../../theme/colors';

// create a component
const Counter = () => {
  return (
    <View style={styles.container}>
      <Text>Counter</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
  },
});

//make this component available to the app
export default Counter;
