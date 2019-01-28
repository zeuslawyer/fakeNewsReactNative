import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";

class NewsCardItem extends Component {
  render() {
    return (
      <View style={styles.cardItem}>
        <Text style={{ fontSize: 16, color: "white" }}>
          Are you seeing something here: {this.props.data.title}
        </Text>
      </View>
    );
  }
}

export default NewsCardItem;

const styles = StyleSheet.create({
    cardItem: {
        borderColor: "red",
    }
});
