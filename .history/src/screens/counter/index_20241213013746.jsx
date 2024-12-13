//import liraries
import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import Colors from '../../theme/colors';
import Button from '../../components/ui/button';
import {useDispatch, useSelector} from 'react-redux';
import {
  decrementCount,
  incrementCount,
  resetCount,
} from '../../store/actions/countActions';

// create a component
const Counter = () => {
  // const [count, setCount] = useState(0);
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();
  console.log(count);
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
            onPress={() => dispatch(incrementCount())}
            status="success"
            title="Arttir"
          />
          <Button
            onPress={() => dispatch(decrementCount())}
            status="error"
            title="Azalt"
          />
          <Button
            onPress={() => dispatch(resetCount())}
            status="warning"
            title="Sifirla"
          />

          <Button
            onPress={() => dispatch(resetCount())}
            status="blue"
            title="Esitle"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

//make this component available to the app
export default Counter;
