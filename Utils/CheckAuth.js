import React, { Component } from 'react';
import AsyncStorage from "@react-native-community/async-storage"

class CheckAuth extends Component {
    constructor(props) {
        super(props);
        this._bootstrapAsync();
      }
    
     _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('token');
        if(userToken){
            this.props.navigation.navigate('Dashboard');
        }
        else{
            await AsyncStorage.removeItem('token')
            this.props.navigation.navigate('Signup');
        }
      };
    
    render() {
        return (
            <></>
        );
    }
}

export default CheckAuth;