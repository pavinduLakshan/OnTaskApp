import {createDrawerNavigator} from 'react-navigation'
import Home from '../screens/HomeScreen';
import Signup from '../screens/SignupScreen';
import Groups from '../screens/GroupsScreen';
import Tasks from '../screens/TasksScreen'
import Group from '../screens/GroupScreen';
import ProfileScreen from '../screens/ProfileScreen';

const DrawNavigator = createDrawerNavigator({
  Home: { screen: Home },
  Profile: { screen: ProfileScreen},
  Groups: { screen: Groups},
  Signup: { screen: Signup},
  Tasks: { screen: Tasks},
  Group: {screen: Group,
    navigationOptions: {
      drawerLabel: () => null
    }}
  },{
  initialRouteName: 'Home'
},{"drawerPosition": "right"});

export default DrawNavigator;