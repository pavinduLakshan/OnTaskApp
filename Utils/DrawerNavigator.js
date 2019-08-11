import {createDrawerNavigator} from 'react-navigation'
import Home from '../screens/HomeScreen';
import Signup from '../screens/SignupScreen';
import Groups from '../screens/GroupsScreen';
import VerifyMobile from '../screens/VerifyMobileScreen'
import Tasks from '../screens/TasksScreen'
import Group from '../screens/GroupScreen';
import Settings from '../screens/SettingsScreen';
import Profile from '../screens/ProfileScreen';
import CreateGroup from '../screens/CreateGroupScreen'
import CheckAuth from '../Utils/CheckAuth'
import CustomDrawer from './CustomDrawer'

const DrawNavigator = createDrawerNavigator({
  Dashboard: { screen: Home },
  Profile: { screen: Profile},
  Tasks: { screen: Tasks},
  VerifyMobile: {screen: VerifyMobile},
  Group: {screen: Group,
    navigationOptions: {
      drawerLabel: () => null
    }},
    Settings: {screen: Settings,
      navigationOptions: {
        drawerLabel: () => null
      }},
  Groups: { screen: Groups},
  CreateGroup: { screen: CreateGroup},
  Signup: { screen: Signup},
  CheckAuth: {screen: CheckAuth}
  },{
  initialRouteName: 'CheckAuth',
contentComponent: CustomDrawer,
drawerOpenRoute: 'drawerOpen',
drawerCloseRoute: 'drawerClose',
drawerToggleRoute: 'drawerToggle'});

export default DrawNavigator