import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Blob from './Blob'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Check this out</Text>
        <Text>Whoa</Text>
        <Blob />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

