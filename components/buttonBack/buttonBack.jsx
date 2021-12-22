import * as React from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import { Link } from 'react-router-native';

const ButtonBack = () => (

  <FAB
    style={styles.fab}
    small
    icon="arrow-collapse-left"
    onPress={() => console.log('Pressed')}
  />

);

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 20,
    right: 0,
    bottom: 5,

  },
})

export default ButtonBack;