import React from "react";
import { View, Text, Button, TextInput } from "react-native";
import SENDER from '../Utils/SENDER'
import axios from 'react-native-axios'
import PhoneInput from "react-native-phone-input";

export default class Signup extends React.Component {
  static navigationOptions = {
    drawerLabel: "Signup",
  };

  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      mobile: "",
    };
  }

  signUp = () => {
    axios.post('http://192.168.1.100:8080/api/auth/signup/mobile',{
      fname: this.state.fname,
      mobile: this.state.mobile,
      headers: {
        "Accept": "application/json",
        "Content-type": "application/json"
      }
    }).then(
      res => {console.log(res);return res}
    ).catch(err => {
      console.log(err)
      throw err
    })
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 40,marginBottom: "5%"}}>Signup</Text>
        
        <TextInput
          style={{
            height: 50,
            borderColor: "black",
            width: 300,
            borderWidth: 1,
            marginBottom: "5%",
            borderRadius: 10
          }}
          onChangeText={text => this.setState({ fname: text })}
          value={this.state.fname}
        />

        <PhoneInput
          ref="phone"
          style={{
            height: 50,
            padding: 10,
            borderColor: "black",
            width: 300,
            borderWidth: 1,
            marginBottom: "5%",
            borderRadius: 10
          }}
          onChangePhoneNumber={ number => this.setState({mobile: number})}
        />

        <Button
          title="Sign up"
          style={{ marginLeft: "25%", height: 100, width: 300 }}
          onPress={() => this.signUp()}
        />
      </View>
    );
  }
}

//
