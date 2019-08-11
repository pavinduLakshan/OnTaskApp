import React from "react";
import { View, Text } from "react-native";
import Layout from '../components/Layout'
import {  Body,  Card, CardItem } from "native-base";
import AsyncStorage from "@react-native-community/async-storage";

export default class Home extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Home'
    }

    state={
      mood: ""
    }

    async componentDidMount(){
      var today = new Date()
      var curHr = today.getHours()

      //await AsyncStorage.removeItem('token')
      if (curHr < 12) {
        this.setState({mood: "morning"})
      } else if (curHr < 18) {
        this.setState({mood: "evening"})
      } else {
        this.setState({mood: "night"})
    }
  }

    render() {
      return (
        <Layout navigation = {this.props.navigation}>
          <View>
          <Card>
          <CardItem style={{backgroundColor: "#82E17B"}}>
            <Body style={{display: "flex",flexDirection: "column"}}>
            <Text style={{fontSize: 30,paddingTop: 0,fontWeight: "bold"}}>My Day</Text>
            <Text style={{fontSize: 20}}>{new Date().toJSON().slice(0,10)}</Text>
            </Body>
          </CardItem>
        </Card>
        </View>
        </Layout>
      );
    }
  }