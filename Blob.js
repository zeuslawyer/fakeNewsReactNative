import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';

export class Blob extends Component {
  render() {
    const name = 'Zubin'
    return (
      <View styles={styles.container} >
        <Text > EMBED me {name}! </Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
    container: {
        
    }
})

export default Blob





