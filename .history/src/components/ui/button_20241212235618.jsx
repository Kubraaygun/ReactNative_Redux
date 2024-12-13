//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import Colors from '../../theme/colors';

// create a component
const Button = props => {
  const {title, status} = props;
  const setColor = () => {
    switch (status) {
      case 'success':
        return styles.success;
      case 'error':
        return styles.error;
      case 'warning':
        return styles.warning;
      default:
        return styles.success;
    }
  };
  return (
    <TouchableOpacity
      {...props}
      style={[
        styles.container,
        status == 'success' ? styles.success : styles.warning,
      ]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'purple',
    padding: 20,
    borderRadius: 10,
    margin: 5,
  },

  success: {
    backgroundColor: Colors.PRIMARIY,
  },
  error: {
    backgroundColor: Colors.SECONDARY,
  },
  warning: {
    backgroundColor: Colors.WARNING,
  },

  title: {
    color: 'white',
    fontWeight: '600',
    fontSize: 18,
  },
});

//make this component available to the app
export default Button;
