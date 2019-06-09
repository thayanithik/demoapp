import {
  createStackNavigator,
  SafeAreaView,createDrawerNavigator
} from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';

const Routes = {
  Login: {
    screen: LoginScreen,
    navigationOptions: { header: null}
  },
  Home: {
    screen: HomeScreen,
    navigationOptions: { header: null}
  },
};

export default Routes;
