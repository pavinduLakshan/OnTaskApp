import { createStackNavigator } from 'react-navigation';
import Home from '../screens/HomeScreen';
import Signup from '../screens/SignupScreen';

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  Signup: { screen: Signup},
},{
  initialRouteName: 'Signup'
});

export default AppNavigator;