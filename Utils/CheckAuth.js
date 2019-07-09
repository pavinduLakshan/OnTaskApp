import React, { Component } from 'react';
import AsyncStorage from "@react-native-community/async-storage"

class CheckAuth extends Component {
    constructor(props) {
        super(props);
        this._bootstrapAsync();
      }
    
     _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('token');
        this.props.navigation.navigate(userToken ? 'Dashboard' : 'Signup');
      };
    
    render() {
        return (
            <></>
        );
    }
}

export default CheckAuth;