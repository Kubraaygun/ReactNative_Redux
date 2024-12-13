//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import Colors from '../../theme/colors';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';

// create a component
const Counter = () => {
  return (
    <SafeAreaView>
      <Text style={defaultScreenStyle.container}>Counter</Text>
    </SafeAreaView>
  );
};

//make this component available to the app
export default Counter;
