import React from "react";
import { View, Text, Button, TextInput } from "react-native";
import PhoneInput from "react-native-phone-input";

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      mobile: "",
    };
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
          onPress={() => this.props.navigation.navigate("Home")}
        />
      </View>
    );
  }
}

//
