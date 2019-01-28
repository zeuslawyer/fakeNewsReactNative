import React from "react";
import axios from "axios";
import { StyleSheet, Text, View } from "react-native";
import { Header } from "react-native-elements";
import NewsCardList from "./src/components/NewsCardList";
import keys from "./src/secrets/keys.js";

export default class App extends React.Component {
  state = {
    newsItems: [],
    isRefreshing: true
  };

  getNews = () => {
    const URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${
      keys.NEWS_API
    }`;

    fetch(URL)
      .then(response => response.json())
      .then(newsJson => {
        console.log("*** Fetched News. Updating State. ***");
        this.setState({
          newsItems: newsJson.articles,
          isRefreshing: false
        });
      })
      .catch(err => console.log(err.message));
  };

  onRefresh = () => {
    this.setState({ isRefreshing: true }, () => {
      console.log("*** REFRESHING news list in state. ***");
      this.getNews();
    });
  };

  componentDidMount = () => {
    this.getNews();
  };

  render() {
    // console.log('STATE:  ', this.state.newsItems);
    return (
      <View style={styles.container}>
        <Header
          leftComponent={{ icon: "menu", color: "#fff" }}
          centerComponent={{ text: "FAKE REAL NEWS", style: { color: "#fff" } }}
          backgroundColor="red"
        />
        <NewsCardList
          newsItems={this.state.newsItems}
          onRefreshHandler={this.onRefresh}
          refreshingBool={this.state.isRefreshing}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center"
  }
});
