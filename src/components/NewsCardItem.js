import React, { Component } from "react";
import {
  Alert,
  Text,
  StyleSheet,
  Linking,
  View,
  TouchableNativeFeedback
} from "react-native";
import { Card, Divider } from "react-native-elements";
import moment from "moment";

export default (newsCardItem = props => {
  const {
    source,
    title,
    description,
    urlToImage,
    url,
    publishedAt
  } = props.item;
  const timestamp = moment(publishedAt).fromNow();

  return (
    <TouchableNativeFeedback onPress={() => onCardPress(url)}>
      <View style={styles.cardItemContainer}>
        <Card
          image={{ uri: urlToImage }}
          imageStyle={styles.imageStyle}
          featuredTitle={title}
          featuredTitleStyle={styles.titleStyle}
          containerStyle={styles.cardItemStyle}
        >
          <Text style={styles.descStyle}>{description}</Text>
          <Divider style={{ backgroundColor: "#dfe6e9" }} />
          <View style={styles.dateAuthContainerStyle}>
            <Text style={styles.dateAuthStyle}>
              {source.name.toUpperCase()}
            </Text>
            <Text style={styles.dateAuthStyle}>{timestamp}</Text>
          </View>
        </Card>
      </View>
    </TouchableNativeFeedback>
  );
});

const onCardPress = url => {
  Linking.openURL(url).catch(err => console.error("An error occurred", err));
};

const styles = StyleSheet.create({
  cardItemContainer: {
    // borderWidth: 5,
    // borderColor: "green",
    // borderRadius: 25
    borderBottomWidth: 0
  },
  cardItemStyle: {
    elevation: 2, // android
    shadowColor: "white", // IOS
    shadowOffset: { height: 5, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
    marginLeft: 20,
    marginRight: 20,
    // borderColor: "red",
    // borderRadius: 10,
    // backgroundColor: "purple"
  },
  titleStyle: {
    marginHorizontal: 10,
    textShadowColor: "#A9A9A9",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    color: "#F8F8FF",
    fontSize: 20,
    // borderWidth: 5,
    // borderColor: "red",
    // borderRadius: 25
  },
  imageStyle: {
    height: 270
    // borderColor: "yellow",
    // borderWidth: 2
  },
  descStyle: {
    // borderColor: "purple",
    // borderWidth: 5
    marginBottom: 5
  },
  dateAuthContainerStyle: {
    flexDirection: "column",
    alignItems: "flex-end"
  },
  dateAuthStyle: {
    fontStyle: "italic",
    color: "#778899",
    fontSize: 10
  }
});
