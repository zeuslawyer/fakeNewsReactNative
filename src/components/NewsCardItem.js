import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Card, Divider } from "react-native-elements";

class NewsCardItem extends Component {
  render() {
    const {
      source,
      title,
      description,
      urlToImage,
      url,
      publishedAt
    } = this.props.item;
    return (
      <Card
        containerstyle={styles.cardItem}
        image={{ uri: urlToImage }}
        imageStyle={styles.imageStyle}
        featuredTitle={title}
        featuredTitleStyle={styles.titleStyle}
      >
        <Text style={styles.descStyle}>{description}</Text>
        <Divider style={{ backgroundColor: "#dfe6e9" }} />
        <View
          style={{
            flexDirection: "column",
            alignItems: "flex-end"
          }}
        >
          <Text style={styles.dateAuthStyle}>{source.name.toUpperCase()}</Text>
          <Text style={styles.dateAuthStyle}>{publishedAt}</Text>
        </View>
      </Card>
    );
  }
}

export default NewsCardItem;

const styles = StyleSheet.create({
  cardItem: {
    borderWidth: 2,
    borderColor: "orange",
    borderWidth: 50
  },
  titleStyle: {
    marginHorizontal: 10,
    textShadowColor: "#778899",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
    borderWidth: 5,
    borderColor: "red"
  },
  imageStyle: {
    height: 220,
    borderColor: "yellow",
    borderWidth: 5
  },
  descStyle: {
    // backgroundColor: "grey",
    borderColor: "purple",
    borderWidth: 5
  },
  dateAuthStyle: {
    // margin: 5,
    fontStyle: "italic",
    color: "#b2bec3",
    fontSize: 10,
    borderColor: "green",
    borderWidth: 5
  }
});
