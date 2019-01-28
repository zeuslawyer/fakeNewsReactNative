import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Card } from 'react-native-elements'

class NewsCardItem extends Component {
  render() {
    console.log(this.props);
    return (
      <Card>
        <Text>
          {this.props.item.title}
        </Text>
      </Card>
    );
  }
}

export default NewsCardItem;

const styles = StyleSheet.create({
    cardItem: {
        borderColor: "red",
    }
});
