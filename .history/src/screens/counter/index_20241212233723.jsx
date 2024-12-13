//import liraries
import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';

// create a component
const Counter = () => {
  const [count, setCount] = useState();
  return (
    <SafeAreaView style={defaultScreenStyle.safeAreaView}>
      <View style={defaultScreenStyle.container}>
        <Text>Counter</Text>
      </View>
    </SafeAreaView>
  );
};

//make this component available to the app
export default Counter;
