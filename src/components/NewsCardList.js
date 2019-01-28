import React, { Component } from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";
import NewsCardItem from "./NewsCardItem";

class NewsCardList extends Component {
  _keyExtractor = (item, index) => item.id;

  render() {
    // console.log(this.props.newsItems)
    return (
      <View style={styles.flatListStyle}>
        <FlatList
          data={this.props.newsItems}
          renderItem={({ item }) => <NewsCardItem item={item} />}
          keyExtractor={item => item.url}
          refreshing={this.props.refreshingBool}
          onRefresh={() => this.props.onRefreshHandler()}
          // refreshing={this.state.refreshing}
          // onRefresh={this.handleRefresh.bind(this)}
        />
      </View>
    );
  }
}

export default NewsCardList;

const styles = {
  flatListStyle: {
    justifyContent: "space-between"
  }
};
