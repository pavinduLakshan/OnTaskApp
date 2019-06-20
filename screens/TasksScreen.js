import React from 'react';
import { Text, View,Button } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { DrawerActions } from 'react-navigation';

class DueScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Due</Text>
        <Button
          title="Menu"
          onPress={() =>
            this.props.navigation.dispatch(DrawerActions.openDrawer())
          }
        />
      </View>
    );
  }
}

class CompletedScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Completed</Text>
      </View>
    );
  }
}

class OverDueScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Overdue</Text>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Due: { screen: DueScreen },
  Completed: { screen: CompletedScreen },
  Overdue: { screen: OverDueScreen },
},
{
  tabBarOptions: {
    labelStyle: {
      fontSize: 20,
      margin: 0,
      padding: 0,
    }
}
});

export default createAppContainer(TabNavigator);