import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Blob from './Blob'
import NewsCardList from './NewsCardList'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Check this out</Text>
        <NewsCardList newsItems= {news}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


const news = [
  {
    img:'insert',
    title:"SAMPLE Title #1 Here",
    author: "Author Name",
    date: "date here",
    body: "Loreum Ipsum something or the other goes here....etc etc etc",
    key : "145"
  },
  {
    img:'insert',
    title:"Title 2 Here",
    author: "Author Name",
    date: "date here",
    body: "Loreum Ipsum something or the other goes here....etc etc etc"
    ,
    key : "1423"
  },
  {
    img:'insert',
    title:"Title 3 Here",
    author: "Author Name",
    date: "date here",
    body: "Loreum Ipsum something or the other goes here....etc etc etc",
    key : "14523"
  },
  {
    img:'insert',
    title:"Title 4 Here",
    author: "Author Name",
    date: "date here",
    body: "Loreum Ipsum something or the other goes here....etc etc etc",
    key : "1411135"
  },
  {
    img:'insert',
    title:"Title 5 Here",
    author: "Author Name",
    date: "date here",
    body: "Loreum Ipsum something or the other goes here....etc etc etc",
    key : "122145"
  },
  {
    img:'insert',
    title:"Title #6 Here",
    author: "Author Name",
    date: "date here",
    body: "Loreum Ipsum something or the other goes here....etc etc etc",
    key : "124235145"
  }
]
