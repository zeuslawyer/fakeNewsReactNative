import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";

class NewsCardItem extends Component {
  render() {
    return (
      <View>
        <Text style={{ fontSize: 16 }}>
          Are you seeing something here: {this.props.data.title}
        </Text>
      </View>
    );
  }
}

export default NewsCardItem;

const styles = StyleSheet.create({});
