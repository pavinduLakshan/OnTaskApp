import React, { Component } from 'react';
import { View,Text } from 'react-native' 
import AsyncStorage from "@react-native-community/async-storage"
import { Spinner } from 'native-base';

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
            <View style={{display: "flex",alignItems: "center",height: "100%",justifyContent: "center"}}>
                 <Spinner color='green' />
                 <Text style={{fontSize: 20}}>Loading..</Text>
            </View>
        );
    }
}

export default CheckAuth;