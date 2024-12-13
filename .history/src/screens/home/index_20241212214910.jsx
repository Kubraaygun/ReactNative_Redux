//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView, Alert} from 'react-native';
import Button from '../../components/ui/button';
import Introduction from '../../components/home/introduction';

// create a component
const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.screen}>
        <Introduction />
        <Button
          status="success"
          onPress={() => Alert.alert('merhaba')}
          title="Ekle"
        />
        <Button onPress={() => Alert.alert('merhaba')} title="Guncelle" />
        <Button onPress={() => Alert.alert('merhaba')} title="Sil" />
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  screen: {
    padding: 10,
    flex: 1,
  },
});

//make this component available to the app
export default Home;
