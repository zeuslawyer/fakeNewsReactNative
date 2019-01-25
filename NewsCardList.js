import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import NewsCardItem from "./NewsCardItem";

class NewsCardList extends Component {
  renderListOfNews = newsItems => {
    return newsItems.map(item => {
      return <NewsCardItem title={item.title} />;
    });
  };

  render() {
    return (
      <View>
        {/* <NewsCardItem title={this.props.newsItems[0].title}/> */}
        {this.renderListOfNews(this.props.newsItems)}
      </View>
    );
  }
}

export default NewsCardList;

const styles = StyleSheet.create({});
