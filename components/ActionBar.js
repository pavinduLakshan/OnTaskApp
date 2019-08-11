import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

class ActionBar extends Component {
    openDrawer = () => {
        this.props.navigation.openDrawer()
    }

    onActionSelected = position =>  {
      if (position === 0) { // index of 'Settings'
        this.props.navigation.navigate('Settings')
      } 
  }

    // 
    render() {
        return (
            <Icon.ToolbarAndroid
            style={{
              backgroundColor: '#26BE1C',
              height: 56,
              alignSelf: 'stretch',
              textAlign: 'center',
            }}
          logo={{uri: 'https://picsum.photos/200/300'}}
          navIconName="navicon"
          onIconClicked={this.openDrawer}
          title={this.props.name}
          actions={[{title: 'Settings', iconName: "cog", show: 'always'},{title: 'Search', iconName: "search", show: 'always'}]}
          onActionSelected={this.onActionSelected} 
          />
        );
    }
}

export default ActionBar;