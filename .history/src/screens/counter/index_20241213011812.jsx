//import liraries
import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import Colors from '../../theme/colors';
import Button from '../../components/ui/button';
import {useSelector} from 'react-redux';

// create a component
const Counter = () => {
  const [count, setCount] = useState(0);
  const count = useSelector(state => state.counter);
  return (
    <SafeAreaView style={defaultScreenStyle.safeAreaView}>
      <View style={defaultScreenStyle.container}>
        <View
          style={{
            flex: 1,

            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 50, fontWeight: '600'}}>{count}</Text>
        </View>
        <View style={{flex: 2, justifyContent: 'flex-end'}}>
          <Button
            onPress={() => setCount(count + 1)}
            status="success"
            title="Arttir"
          />
          <Button
            onPress={() => setCount(count - 1)}
            status="error"
            title="Azalt"
          />
          <Button
            onPress={() => setCount(0)}
            status="warning"
            title="Sifirla"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

//make this component available to the app
export default Counter;
