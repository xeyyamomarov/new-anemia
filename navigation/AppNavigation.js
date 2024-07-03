// AppNavigation.js

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import TabNavigator from './ProfileBottomNavigation';
import { CameraView } from '../components/HomeCard/CameraView';
import ModalScreen from '../screens/ModalScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {

  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Home"
        options={{headerShown: false}}
        component={TabNavigator}
      />
      
      <Stack.Screen
        name="Login"
        options={{headerShown: false}}
        component={LoginScreen}
      />
      <Stack.Screen
        name="SignUp"
        options={{headerShown: false}}
        component={SignUpScreen}
      />
       <Stack.Screen
        name="Modal"
        options={{headerShown: false}}
        component={ModalScreen}
      />
      <Stack.Screen name="Camera" component={CameraView} options={{headerShown:false}} />
    </Stack.Navigator>
  );
}
