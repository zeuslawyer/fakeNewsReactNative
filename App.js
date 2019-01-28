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
      this.setState({ newsItems: response.data });
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
          centerComponent={{ text: "MY TITLE", style: { color: "#fff" } }}
          backgroundColor="red"
        />
        <NewsCardList newsItems={this.state.news} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

const news = [
  {
    img: "insert",
    title: "SAMPLE Title #1 Here",
    author: "Author Name",
    date: "date here",
    body: "Loreum Ipsum something or the other goes here....etc etc etc",
    key: "145"
  },
  {
    img: "insert",
    title: "Title 2 Here",
    author: "Author Name",
    date: "date here",
    body: "Loreum Ipsum something or the other goes here....etc etc etc",
    key: "1423"
  },
  {
    img: "insert",
    title: "Title 3 Here",
    author: "Author Name",
    date: "date here",
    body: "Loreum Ipsum something or the other goes here....etc etc etc",
    key: "14523"
  },
  {
    img: "insert",
    title: "Title 4 Here",
    author: "Author Name",
    date: "date here",
    body: "Loreum Ipsum something or the other goes here....etc etc etc",
    key: "1411135"
  },
  {
    img: "insert",
    title: "Title 5 Here",
    author: "Author Name",
    date: "date here",
    body: "Loreum Ipsum something or the other goes here....etc etc etc",
    key: "122145"
  },
  {
    img: "insert",
    title: "Title #6 Here",
    author: "Author Name",
    date: "date here",
    body: "Loreum Ipsum something or the other goes here....etc etc etc",
    key: "124235145"
  }
];
