import React from "react";
import { View, Alert } from "react-native";
import axios from "react-native-axios";
import PhoneInput from "react-native-phone-input";
import AsyncStorage from "@react-native-community/async-storage"
import {
  Button,
  Text,
  Form,
  Item as FormItem,
  Input,
  Label
} from "native-base";

export default class Signup extends React.Component {
  static navigationOptions = {
    drawerLabel: "Signup",
  };

  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      mobile: ""
    };
  }

  showError = () => {
    Alert.alert("Sorry.Some required fields are msissing.");
  };

  setToken = async token => {
    await AsyncStorage.setItem("token", token).then(async val => {
        const token = await AsyncStorage.getItem('token')
        console.log(token)
        this.props.navigation.navigate('Dashboard');
    });
  };

  signUp = () => {
    if (
      this.state.fname.length === 0 ||
      this.state.fname === undefined ||
      this.state.mobile.length === 0 ||
      this.state.mobile === undefined
    ) {
      this.showError();
    } else {
      axios
        .post("http://192.168.1.100:8080/api/auth/signup/mobile", {
          fname: this.state.fname,
          mobile: this.state.mobile,
        })
        .then(res => {
            if(res.status === 200 || res.status === 201){
              axios.post('http://192.168.1.100:8080/api/auth/signin/mobile',{
                email: this.state.mobile,
                password: this.state.mobile
              }).then(res => {
                console.log(res)
                this.setToken(res.data.accessToken)
              })
              // this.props.navigation.navigate('VerifyMobile',{
              //   userId: res.data.userId,
              //   mobile: this.state.mobile,
              //   reqId: res.data.requestId
              // })  
            }
        })
        .catch(err => {
          console.log(err);
          throw err;
        });
    }
  };

  render() {
    return (
      <View style={{ paddingTop: "40%" }}>
        <Text style={{ textAlign: "center", fontSize: 40 }}>OnTask</Text>
        <Text style={{ fontSize: 20, textAlign: "center" }}>Signup</Text>
        
        <Form>
          <FormItem>
            <Label>First Name</Label>
            <Input name="fname" onChangeText={(text) => this.setState({fname: text})} defaultValue={this.state.fname}/>
          </FormItem>

          <Label style={{ marginTop: "3%", marginLeft: "4%" }}>
            Mobile Number
          </Label>
          <PhoneInput
            ref="phone"
            style={{
              height: 50,
              padding: 10,
              width: 300,
              marginLeft: "2%",
              marginBottom: "5%",
              borderRadius: 10,
            }}
            onChangePhoneNumber={number => this.setState({ mobile: number })}
          />

          <Button
            full
            primary
            style={{ paddingBottom: 4, marginLeft: "4%", marginRight: "4%" }}
            onPress={() => this.signUp()}
          >
            <Text> Sign Up </Text>
          </Button>
        </Form>
      </View>
    );
  }
}
