import React from "react";
import { View, TextInput } from "react-native";
import SENDER from '../Utils/SENDER'
import axios from 'react-native-axios'
import PhoneInput from "react-native-phone-input";
import {
  Container,
  Header,
  Button,
  Text,
  Body,
  Form,
  Item as FormItem,
  Input,
  Label,
  Title,
} from 'native-base';

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
      <View style={{paddingTop: "40%"}}>
        <Text style={{textAlign: "center",fontSize: 40}}>OnTask</Text>
        <Text style={{fontSize: 20,textAlign: "center"}}>Signup</Text>
        <Form>
        <FormItem>
          <Label>First Name</Label>
          <Input />
        </FormItem>

        <Label style={{marginTop: "3%",marginLeft: "4%"}}>Mobile Number</Label>
          <PhoneInput
          ref="phone"
          style={{
            height: 50,
            padding: 10,            
            width: 300,
            marginLeft: "2%",
            marginBottom: "5%",
            borderRadius: 10
          }}
          onChangePhoneNumber={ number => this.setState({mobile: number})}
/>

        <Button full primary style={{ paddingBottom: 4,marginLeft: "4%",marginRight: "4%"}} onPress={() => this.signUp()}>
          <Text> Sign Up </Text>
        </Button>

      </Form>
      </View>
    );
  }
}

