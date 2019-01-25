import React, { Component } from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";
import NewsCardItem from "./NewsCardItem";

class NewsCardList extends Component {
  _keyExtractor = (item, index) => item.id;

  render() {
    return (
      <View styles={styles.container}>
        <FlatList
          data={this.props.newsItems}
          keyExtractor={this._keyExtractor}
          renderItem={({ item }) => <NewsCardItem key={item.key} data={item} />}
        />
      </View>
    );
  }
}

export default NewsCardList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center"
  }
});
