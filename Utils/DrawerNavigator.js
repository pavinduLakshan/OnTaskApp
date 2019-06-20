import {createDrawerNavigator} from 'react-navigation'
import Home from '../screens/HomeScreen';
import Signup from '../screens/SignupScreen';
import Groups from '../screens/GroupsScreen';
import Tasks from '../screens/TasksScreen'

const DrawNavigator = createDrawerNavigator({
  Home: { screen: Home },
  Groups: { screen: Groups},
  Signup: { screen: Signup},
  Tasks: { screen: Tasks}
},{
  initialRouteName: 'Home'
},{"drawerPosition": "right"});

export default DrawNavigator;