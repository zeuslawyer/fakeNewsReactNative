import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import NewsCardItem from './NewsCardItem'

class NewsCardList extends Component {
    
  render() {
    return (
      <View>
          <NewsCardItem title={this.props.newsItems[0].title}/>
      </View>
    )
  }
}

export default NewsCardList;

const styles = StyleSheet.create({})


  