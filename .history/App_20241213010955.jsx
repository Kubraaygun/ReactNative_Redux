//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Home from './src/screens/home';
import Counter from './src/screens/counter';
import {Provider} from 'react-redux';
import store from './src/store';

// create a component
const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default App;
