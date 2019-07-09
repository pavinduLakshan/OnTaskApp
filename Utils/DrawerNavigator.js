import {createDrawerNavigator} from 'react-navigation'
import Home from '../screens/HomeScreen';
import Signup from '../screens/SignupScreen';
import Groups from '../screens/GroupsScreen';
import Tasks from '../screens/TasksScreen'
import Group from '../screens/GroupScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CheckAuth from '../Utils/CheckAuth'
import CustomDrawer from './CustomDrawer'

const DrawNavigator = createDrawerNavigator({
  Dashboard: { screen: Home },
  Profile: { screen: ProfileScreen},
  Tasks: { screen: Tasks},
  Group: {screen: Group,
    navigationOptions: {
      drawerLabel: () => null
    }},
  Groups: { screen: Groups},
  Signup: { screen: Signup},
  CheckAuth: {screen: CheckAuth}
  },{
  initialRouteName: 'CheckAuth',
contentComponent: CustomDrawer,
drawerOpenRoute: 'drawerOpen',
drawerCloseRoute: 'drawerClose',
drawerToggleRoute: 'drawerToggle'});

export default DrawNavigator