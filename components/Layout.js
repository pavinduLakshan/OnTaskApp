import React, { Component } from 'react';
import { View} from "react-native";
import Icon from 'react-native-vector-icons/dist/FontAwesome';

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
                <Icon.ToolbarAndroid
        style={{
          backgroundColor: '#2196F3',
          height: 56,
          alignSelf: 'stretch',
          textAlign: 'center',
        }}
      logo={{uri: 'https://picsum.photos/200/300'}}
      navIconName="navicon"
      onIconClicked={this.openDrawer}
      title="OnTask"
      actions={[{title: 'Settings', iconName: "search", show: 'always'}]}
      onActionSelected={this.onActionSelected} 
      />
      {this.props.children}
           </View>
        );
    }
}

export default Layout;