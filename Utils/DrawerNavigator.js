import {createDrawerNavigator} from 'react-navigation'
import Home from '../screens/HomeScreen';
import Signup from '../screens/SignupScreen';
import Groups from '../screens/GroupsScreen';

const DrawNavigator = createDrawerNavigator({
  Home: { screen: Home },
  Groups: { screen: Groups},
},{
  initialRouteName: 'Home'
},{"drawerPosition": "right"});

export default DrawNavigator;