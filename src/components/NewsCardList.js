import React, { Component } from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";
import NewsCardItem from "./NewsCardItem";

class NewsCardList extends Component {
  _keyExtractor = (item, index) => item.id;

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.newsItems}
          // keyExtractor={this._keyExtractor}
          renderItem={({ item }) => <NewsCardItem key={item.title} data={item} />}
        />
      </View>
    );
  }
}

export default NewsCardList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  }
});
