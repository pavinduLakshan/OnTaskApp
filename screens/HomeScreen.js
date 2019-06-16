import React from "react";
import { View, Text,Button } from "react-native";
import { DrawerActions } from 'react-navigation';

export default class Home extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Home'
    }

    render() {
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text>Home Screen</Text>
          <Button
          title="Back to Home"
          onPress={() =>
            //this.props.navigation.navigate('drawerOpen')
            this.props.navigation.dispatch(DrawerActions.openDrawer())
          }
        />
        </View>
      );
    }
  }