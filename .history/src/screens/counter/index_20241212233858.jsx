//import liraries
import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import Colors from '../../theme/colors';

// create a component
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <SafeAreaView style={defaultScreenStyle.safeAreaView}>
      <View style={defaultScreenStyle.container}>
        <View style={{flex: 1, backgroundColor: Colors.PRIMARIY}}></View>
        <View style={{flex: 1, backgroundColor: Colors.SECONDARY}}></View>
        <Text>{count}</Text>
      </View>
    </SafeAreaView>
  );
};

//make this component available to the app
export default Counter;
