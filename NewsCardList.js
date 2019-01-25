import React, { Component } from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";
import NewsCardItem from "./NewsCardItem";

class NewsCardList extends Component {
  renderListOfNews = newsItems => {
    return newsItems.map((item, index) => {
      return <NewsCardItem key={index} data={item} />;
    });
  };

  render() {
    return (
      <View styles={styles.container}>
        <FlatList 
            data={this.props.newsItems} 
            renderItem={({item}) => <NewsCardItem key={item.key} data={item} />}
        />
          {/* <NewsCardItem title={this.props.newsItems[0].title} /> */}
          {/* {this.renderListOfNews(this.props.newsItems)} */}
      </View>
    );
  }
}

export default NewsCardList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
