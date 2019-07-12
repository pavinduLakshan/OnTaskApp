import React, { Component } from "react";
import { View, Alert } from "react-native";
import CodeInput from "react-native-confirmation-code-input";
import { Text } from "native-base";
import axios from 'react-native-axios'

export default class VerifyMobile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: this.props.navigation.getParam("userId", " "),
            mobile: this.props.navigation.getParam("mobile", " "),
            reqId: this.props.navigation.getParam("reqId", " ")
        }   
    }

  _onFulfill =  code => {
    Alert.alert(code)
    axios.post('http://192.168.1.100:8080/api/auth/verify/mobile',{
        userId: this.state.userId,
        code: code,
        requestId: this.state.reqId
    }).then(
        res => {
            if(res.status === 200){
                this.props.navigation.navigate('Dashboard')
            }
        }
    )
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center",marginTop: "50%" }}>
          <Text style={{margin: "10%",fontSize: 40}}>OnTask</Text>
          <Text>Enter 6 digit code sent to {this.state.mobile}</Text>
          <CodeInput
            ref="codeInputRef2"
            secureTextEntry
            activeColor="rgba(49, 180, 4, 1)"
            inactiveColor="rgba(49, 180, 4, 1.3)"
            autoFocus={false}
            ignoreCase={true}
            codeLength={6}
            size={50}
            onFulfill={(code) => this._onFulfill(code)}
            containerStyle={{}}
            codeInputStyle={{ borderWidth: 1.5 }}
          />
        </View>
      </View>
    );
  }
}
