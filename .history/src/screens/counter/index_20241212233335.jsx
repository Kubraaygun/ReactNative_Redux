//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../../theme/colors';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';

// create a component
const Counter = () => {
  return (
    <View>
      <Text style={defaultScreenStyle.container}>Counter</Text>
    </View>
  );
};

//make this component available to the app
export default Counter;
