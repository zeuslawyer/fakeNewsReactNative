import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'


class NewsCardItem extends Component {
  render() {
    return (
      <View>
        <Text> Are you seeing something here: {this.props.title}</Text>
      </View>
    )
  }
}

export default NewsCardItem

const styles = StyleSheet.create({})
