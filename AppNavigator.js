import { createStackNavigator } from 'react-navigation';
import Home from './HomeScreen';
import Signup from './SignupScreen';

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  Signup: { screen: Signup},
},{
  initialRouteName: 'Signup'
});

export default AppNavigator;