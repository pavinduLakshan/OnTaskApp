import React, { Component } from 'react';
import { View,ToolbarAndroid } from "react-native";

class Layout extends Component {
    onActionSelected = position =>  {
        if (position === 0) { // index of 'Settings'
          console.log("Hi")
        } 
    }

    openDrawer = () => {
        this.props.navigation.openDrawer()
    }

    render() {
        return (
           <View>
                <ToolbarAndroid
        style={{
          backgroundColor: '#2196F3',
          height: 56,
          alignSelf: 'stretch',
          textAlign: 'center',
        }}
      logo={{uri: 'https://picsum.photos/200/300'}}
      navIcon={{uri: 'https://picsum.photos/100/100'}}
      onIconClicked={this.openDrawer}
      title="OnTask"
      actions={[{title: 'Settings', icon: {uri: 'https://picsum.photos/200/300'}, show: 'always'}]}
      onActionSelected={this.onActionSelected} 
      />
      {this.props.children}
           </View>
        );
    }
}

export default Layout;