import React, { Component, useState } from "react";
import { SafeAreaView, Text, StyleSheet, FlatList, ImageBackground } from "react-native";
import api from "./src/Services/api";
import GitView from "./src/gitView";
import { Container, Input, BoxButtonSearch } from "./src/searchBar/style";

export default class App extends Component{


  constructor(props){
    super(props);
    this.state = {
      view: [],
      user: '',

    }
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange = (e) =>{
    this.setState({
      user: e
    });
  }

     searchUrl = (e) =>{

    const response = api.get(e+'/repos');
    this.setState({
      view: (await response).data
    })

  }
    componentDidMount(){
      
      this.searchUrl();
      
    }  

  render(){
    return (

      <SafeAreaView style={styles.container}>
        <Container>
            <Input  
                onChange={this.handleChange}/>
            <BoxButtonSearch onPress={()=> this.searchUrl(this.state.user)}/>
        </Container>

        <FlatList
          data={this.state.view}
          keyExtractor={item => item.id}
          renderItem={({item}) => <GitView data={item}/>}
        />
      </SafeAreaView>
    )
 
  }
 
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#F0F8FF',
  }
});


export const getInfo = (name) =>{
  let username = name.toLowerCase().trim();
  const URL = `https://api.github.com/users/${username}/repos`;
  return fetch(URL)
          .then((res) => res.json());
}