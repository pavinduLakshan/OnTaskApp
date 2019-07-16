import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

class ActionBar extends Component {
    openDrawer = () => {
        this.props.navigation.openDrawer()
    }

    render() {
        return (
            <Icon.ToolbarAndroid
            style={{
              backgroundColor: 'red',
              height: 56,
              alignSelf: 'stretch',
              textAlign: 'center',
            }}
          logo={{uri: 'https://picsum.photos/200/300'}}
          navIconName="navicon"
          onIconClicked={this.openDrawer}
          title={this.props.name}
          actions={[{title: 'Settings', iconName: "search", show: 'always'}]}
          onActionSelected={this.onActionSelected} 
          />
        );
    }
}

export default ActionBar;