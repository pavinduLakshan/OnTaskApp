import {createDrawerNavigator} from 'react-navigation'
import Home from '../screens/HomeScreen';
import Signup from '../screens/SignupScreen';
import Groups from '../screens/GroupsScreen';
import Tasks from '../screens/TasksScreen'
import Group from '../screens/GroupScreen';
import ProfileScreen from '../screens/ProfileScreen';
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
  },{
  initialRouteName: 'Dashboard',
contentComponent: CustomDrawer,
drawerOpenRoute: 'drawerOpen',
drawerCloseRoute: 'drawerClose',
drawerToggleRoute: 'drawerToggle'});

export default DrawNavigator;