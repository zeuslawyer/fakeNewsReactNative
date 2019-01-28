import React from "react";
import axios from "axios";
import { StyleSheet, Text, View } from "react-native";
import { Header } from "react-native-elements";
import NewsCardList from "./src/components/NewsCardList";
import keys from "./src/secrets/keys.js";

export default class App extends React.Component {
  state = { newsItems: [] };

  getNews = () => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${
      keys.NEWS_API
    }`;

    axios.get(url).then(response => {
      this.setState({ newsItems: response.data.articles });
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
        <NewsCardList newsItems={this.state.newsItems} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  }
});
