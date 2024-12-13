//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Home from './src/screens/home';
import Counter from './src/screens/counter';
import {Provider} from 'react-redux';

// create a component
const App = () => {
  return (
    <Provider>
      <Counter />
    </Provider>
  );
};

export default App;